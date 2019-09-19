import json
import os
import stat
import sys
from hashlib import sha256
from random import randint
from shlex import quote as shlex_quote
from tempfile import mkstemp
from uuid import uuid4
import delegator
import click
import networkx

from .bash import Bash

INDENT_STYLES = ("\t", " " * 4)


class NoBakefileFound(RuntimeError):
    pass


class TaskNotInBashfile(ValueError):
    pass


class FilterNotAvailable(ValueError):
    pass


class BaseAction:
    do_skip = None

    @property
    def is_filter(self):
        if not hasattr(self, "_chunk_index"):
            return True


class TaskFilter(BaseAction):
    """A filter, which can be applied to a task."""

    def __init__(self, s, bashfile):
        self.source = s
        self.bashfile = bashfile
        self.__uuid = uuid4().hex
        self.do_skip = None

    def __str__(self):
        """Used for terminal display."""
        split = self.source.split(":", 1)
        extra = ")" if len(split) > 1 else ""
        source = "(".join(split) + extra

        source = (
            click.style(source[: len(split[0])], fg="yellow") + source[len(split[0]) :]
        )

        return source

    def __hash__(self):
        """Important for (networkx) graph traversal."""
        return hash((self.bashfile, self.source, self.__uuid))

    @property
    def name(self):
        """Whoami?"""
        return self.source.split(":", 1)[0][len("@") :]

    @property
    def arguments(self):
        """Parsed arguments, in the following format:

            @filter:key1:key2=value

        Pretty sure…
        """
        arguments = {}

        try:

            for arg in self.source.split(":", 1)[1].split(":"):
                split = arg.split("=", 1)

                key = split[0]
                value = split[1] if len(split) == 2 else True

                arguments[key] = value
        except IndexError:
            pass

        return arguments

    def depends_on(self, **kwargs):
        """Here for API compatibility with TaskScripts."""
        return []

    @staticmethod
    def execute_confirm(*, prompt=False, yes=False, secure=False, **kwargs):
        """Executes a confirm dialouge for the user, interactively."""

        def abort(msg="Aborted!"):
            msg = click.style(msg, fg="red")
            dash = click.style(" - ", fg="white", bold=True)

            click.echo(f"{dash}{msg}", err=True)
            sys.exit(1)

        if secure:
            int1 = randint(1, 12)
            int2 = randint(1, 12)

            user_value = click.prompt(
                f" {click.style('?', fg='green')}  ({int1} × {int2})",
                prompt_suffix=" = ",
            )

            try:
                if int(user_value) != (int1 * int2):
                    abort(msg="Wrong answer!")
            except ValueError:
                abort(msg="Please provide a valid number.")

        else:
            if not yes:
                question = str(click.style("?", fg="green", bold=True))
                click.confirm(f" {question} Do you want to continue?", abort=True)

        return ("confirmed", True)

    def execute_skip_if(self, *, key, cache=None, **kwargs):
        """Determines if it is appropriate to skip the dependent TaskScript."""
        if cache is None:
            # I'm cheating here, and shoving stuff into the git folder (which I assume is there).
            # TODO: Improve this — look into $ git config --local (shell) use instead.
            cache = f".git/bake-hash-{sha256(key.encode('utf-8')).hexdigest()}"

        key_path = os.path.abspath(key)
        cache_path = os.path.abspath(cache)
        os.makedirs(os.path.dirname(cache_path), exist_ok=True)

        if not os.path.exists(key_path):
            self.do_skip = False
            return ("skip", False)

        if os.path.exists(cache_path):
            with open(cache_path, "r") as f:
                old_hash = f.read().strip()
        else:
            old_hash = "NOPE"

        with open(key_path, "r") as f:
            current_hash = sha256(f.read().encode("utf-8")).hexdigest()

        with open(cache_path, "w") as f:
            f.write(current_hash)

        if old_hash == current_hash:
            self.do_skip = True
            return ("skip", True)

        self.do_skip = False
        return ("skip", False)

    def execute(self, yes=False, **kwargs):
        """This should probably be two different classes…

        …but I was too tired to approach that problem. I continue to be.
        """
        if self.name == "confirm":
            return self.execute_confirm(yes=yes, **self.arguments)
        elif self.name == "skip":
            return self.execute_skip_if(yes=yes, **self.arguments)


class FakeTaskScript(BaseAction):
    """A task that is referenced (as a dependency), but doesn't actually exist.

    Ussually typos. They display red in the terminal. Neat.
    """

    def __init__(self, s, bashfile):
        self.source = s
        self.bashfile = bashfile

    def __str__(self):
        """The color red, as mentioned above."""
        return str(click.style(self.source, fg="red"))


class TaskScript(BaseAction):
    """The primary iteraction point of the entire bake system. Pay close attention.

    You're pretty witty & intelligent — you can infer what this class is for, based on its name.
    """

    def __init__(self, bashfile, chunk_index=None):
        self.bashfile = bashfile
        self._chunk_index = chunk_index

        if self._chunk_index is None:
            raise TaskNotInBashfile()

    def __repr__(self):
        return f"<TaskScript name={self.name!r}>"

    def __str__(self):
        return f"{self.name}"

    def __hash__(self):
        return hash((self.bashfile, self._chunk_index))

    def __eq__(self, other):
        if hasattr(other, "_chunk_index"):
            return other._chunk_index == self._chunk_index

    @property
    def declaration_line(self):
        return self.chunk[0]

    def depends_on(self, *, include_filters=True, recursive=False, include_fakes=True):
        def gen_actions(include_filters=include_filters, include_fakes=include_fakes):
            task_strings = self.declaration_line.split(":", 1)[1].split()

            task_name_index_tuples = [
                (self.bashfile.find_chunk(task_name=s), s) for s in task_strings
            ]

            for i, task_string in task_name_index_tuples:

                if task_string.startswith("@"):
                    if include_filters:
                        yield TaskFilter(task_string, bashfile=self.bashfile)
                elif i is None:
                    if include_fakes:
                        yield FakeTaskScript(task_string, bashfile=self.bashfile)
                else:
                    # Otherwise, create the task.
                    yield TaskScript(chunk_index=i, bashfile=self.bashfile)

        actions = [t for t in gen_actions()]

        if recursive:
            graph = {}
            actions = []

            edge_view = networkx.edge_dfs(
                self.bashfile.graph, self, orientation="original"
            )

            for parent, child, _ in edge_view:
                if parent not in graph:
                    graph[parent] = [child]
                else:
                    if child not in graph[parent]:
                        graph[parent].append(child)

            for task in graph:
                for action in graph[task]:
                    for dep_action in graph.get(action, []):
                        actions.append(dep_action)
                    actions.append(action)

        # Remove filters, if requested to do so.
        if not include_filters:
            _actions = []
            for action in actions:
                if not isinstance(action, TaskFilter):
                    _actions.append(action)

            actions = _actions

        # Remove duplicates from the list.
        _actions = []
        for action in actions:
            if action not in _actions:
                _actions.append(action)
        actions = _actions

        return actions

    @classmethod
    def _from_chunk_index(Class, bashfile, *, i):

        return Class(bashfile=bashfile, chunk_index=i)

    @staticmethod
    def _transform_line(line, *, indent_styles=INDENT_STYLES):
        for indent_style in indent_styles:
            if line.startswith(indent_style):
                return line[len(indent_style) :]

        return line

    def gen_source(self, *, sources):

        source_container = []

        # Grab the first source line, for shebang comparison.
        try:
            # Last script comes first.
            first_natural_line = sources[-1].split("\n", 1)[0]
        except IndexError:
            first_natural_line = "#!/usr/bin/env bash"

        # Check if there's a shebang. If so, disable injection.
        if Bakefile._is_shebang_line(first_natural_line):
            shebang = first_natural_line
            yield shebang

            source_offset_index = (
                None if Bakefile._is_safe_to_inject(shebang=shebang) else -1
            )
            source_container.extend(sources[source_offset_index:])

        else:
            shebang = "#!/usr/bin/env bash"
            yield shebang

            source_container += [self.bashfile.funcs_source, self.bashfile.root_source]

        main_source = "\n".join(source_container)

        for sourceline in main_source.split("\n"):
            if not Bakefile._is_comment_line(sourceline, exclude_shebang=False):
                if sourceline:
                    yield sourceline

        yield "\n"

    def execute(
        self, *, blocking=False, debug=False, interactive=False, silent=False, **kwargs
    ):

        args = " ".join([shlex_quote(a) for a in self.bashfile.args])

        sed_magic = (
            "2>&1  | sed >&2 's/^/ |  /' && exit \"${PIPESTATUS[0]}\""
            if not (interactive or silent)
            else ""
        )
        script = f"t=$(mktemp) && bake --source {self.name} > $t && chmod +x $t && $t {args} {sed_magic} ; rm -fr $t"

        if debug:
            click.echo(f" {click.style('$', fg='green')} {script}", err=True)

        bash = Bash()
        return bash.command(script, quote=False)

    @property
    def name(self):
        return self.chunk[0].split(":")[0].strip()

    @property
    def chunk(self):
        return self.bashfile.chunks[self._chunk_index]

    def _iter_source(self):
        try:
            if not Bakefile._is_shebang_line(self.chunk[1]):
                yield "#!/usr/bin/env bash"
        except IndexError:
            yield "#!/usr/bin/env bash"

        for line in self.chunk[1:]:
            line = self._transform_line(line)
            if line:
                yield line

    @property
    def source(self):
        return "\n".join([s for s in self._iter_source()])

    @property
    def source_lines(self):
        return [s for s in self._iter_source()]


class Bakefile:
    def __init__(self, *, path):
        self.path = path
        self.environ = os.environ
        self._chunks = []
        self.args = []

        if not os.path.exists(path):
            raise NoBakefileFound()

        os.environ["BAKEFILE_PATH"] = self.path
        os.environ["BAKE_SKIP_DONE"] = "1"
        os.environ["PYTHONUNBUFFERED"] = "1"

        self.chunks
        self._tasks = None
        self._graph = None

    @property
    def graph(self):
        if self._graph:
            return self._graph

        g = networkx.OrderedDiGraph()

        for task in self.tasks.values():
            g.add_node(task)
            for dep in task.depends_on():
                g.add_edge(task, dep)

        self._graph = g
        return self.graph

    def __repr__(self):
        return f"<Bakefile path={self.path!r}>"

    def __getitem__(self, key):
        return self.tasks[key]

    def _iter_chunks(self):
        all_chunks = [tl for tl in self._iter_chunk_task_lines()]
        task_lines = [tl if tl[1] else None for tl in self._iter_chunk_task_lines()]

        # Unsort / resort.
        task_lines = list(set(task_lines))
        try:
            task_lines.pop(task_lines.index(None))
        except ValueError:
            pass
        task_lines = sorted(task_lines, key=lambda x: x[0])

        for i, (index, declaration_line) in enumerate(task_lines):
            try:
                end_index = task_lines[i + 1][0]

            except IndexError:
                i = all_chunks.index((index, declaration_line))
                try:
                    end_index = all_chunks[i + 1][0]
                except IndexError:
                    end_index = None

            yield self.source_lines[index:end_index]

    def _iter_chunk_task_lines(self):
        for i, line in enumerate(self.source_lines):
            if line:
                if self._is_declaration_line(line, collect_all=True):
                    if self._is_declaration_line(line, collect_all=False):
                        yield (i, line.rstrip())
                    else:
                        yield (i, None)

    @property
    def home(self):
        return os.path.dirname(self.path)

    @property
    def chunks(self):
        if not self._chunks:
            self._chunks = [c for c in self._iter_chunks()]
        return self._chunks

    def find_chunk(self, task_name):
        for i, chunk in enumerate(self.chunks):
            if chunk[0].split(":")[0].strip() == task_name:
                return i

    def __iter__(self):
        return (v for v in self.tasks.values())

    def add_args(self, *args):
        self.args.extend(args)

    def add_environ(self, key, value):
        self.environ[key] = value

    def add_environ_json(self, s):
        try:
            j = json.loads(s)
        except json.JSONDecodeError:
            assert os.path.exists(s)
            # Assume a path was passed, instead.
            with open(s, "r") as f:
                j = json.load(f)

        self.environ.update(j)

    @property
    def home_path(self):
        return os.path.abspath(os.path.dirname(self.path))

    @classmethod
    def find(
        Class, *, filename="Bashfile", root=os.getcwd(), max_depth=4, topdown=True
    ):
        """Returns the path of a Pipfile in parent directories."""
        i = 0
        for c, d, f in os.walk(root, topdown=topdown):
            if i > max_depth:
                raise NoBakefileFound(f"No {filename} found!")
            elif filename in f:
                return Class(path=os.path.join(c, filename))
            i += 1

    @property
    def source(self):
        with open(self.path, "r") as f:
            return f.read()

    @property
    def source_lines(self):
        return self.source.split("\n")

    def _is_declaration_line(self, line, collect_all=False):
        line = line.replace("\t", " " * 4)

        if not len(line[0].strip()):
            return False

        if not self._is_comment_line(line):
            if not collect_all:
                if ":" in line:
                    return bool(len(line[:4].strip()))
            else:
                return bool(len(line[:4].strip()))

    @staticmethod
    def _is_safe_to_inject(shebang):
        # --- Note: This is kind of a clever hack, as this matches both
        # bash and sh (and many other potentially–compatible shells).
        return shebang.strip().endswith("sh")

    def _is_task_line(self, line):
        if line.startswith(INDENT_STYLES[0]) or line.startswith(INDENT_STYLES[1]):
            return True

    @staticmethod
    def _is_shebang_line(line):
        return line.lstrip().startswith("#!")

    @staticmethod
    def _is_comment_line(line, *, exclude_shebang=True):
        if exclude_shebang:
            return line.strip().startswith("#") and not line.startswith("#!")
        else:
            return line.strip().startswith("#")

    @staticmethod
    def _comment_line(line):
        return f"# {line}"

    @property
    def tasks(self):
        if self._tasks:
            return self._tasks

        tasks = {}
        for i, chunk in enumerate(self.chunks):
            script = TaskScript._from_chunk_index(bashfile=self, i=i)
            tasks[script.name] = script

        self._tasks = tasks
        return self.tasks

    @property
    def root_source_lines(self):
        source_lines = []
        task_active = False
        for line in self.source_lines:
            if line:
                if self._is_declaration_line(line):
                    task_active = True
                else:
                    if not self._is_task_line(line):
                        task_active = False

                    if not task_active:
                        source_lines.append(line)

        return source_lines

    @property
    def root_source(self):
        return "\n".join(self.root_source_lines)

    @property
    def funcs_source(self):
        source = []

        # TODO: this can cause bugs.
        # for task in self.tasks:
        #     task = self[task]
        #     f_name = task.name.replace("/", "_")
        #     f_name = f_name.replace("-", "_")
        #     f_name = f"bake_{f_name}"

        #     source.append(
        #         # Replace / namespacing with _ namespacing, for functions.
        #         f"function {f_name}"
        #         + " { \n"
        #         + f"    bake --silent {task.name} $@;\n"
        #         + "}\n"
        #         + f"declare -x {f_name};"
        #     )

        return "\n".join(source)
