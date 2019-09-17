import json
import os
import stat
import sys
from hashlib import sha256
from random import randint
from shlex import quote as shlex_quote
from tempfile import mkstemp

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
    @property
    def is_filter(self):
        if not hasattr(self, "_chunk_index"):
            return True


class TaskFilter(BaseAction):
    def __init__(self, s, bashfile):
        self.source = s
        self.bashfile = bashfile

    def __str__(self):
        split = self.source.split(":", 1)
        extra = ")" if len(split) > 1 else ""
        source = "(".join(split) + extra

        source = (
            click.style(source[: len(split[0])], fg="yellow") + source[len(split[0]) :]
        )

        return source

    def __hash__(self):
        return hash((self.bashfile, self.source))

    def __eq__(self, other):
        if hasattr(other, "source"):
            return other.source == self.source

    @property
    def name(self):
        return self.source.split(":", 1)[0][len("@") :]

    @property
    def arguments(self):
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
        return []

    @staticmethod
    def execute_confirm(*, prompt=False, yes=False, secure=False, **kwargs):
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

    @staticmethod
    def execute_skip_if(*, key, cache=None, **kwargs):
        if cache is None:
            cache = f".git/bake-hash-{sha256(key.encode('utf-8')).hexdigest()}"

        key_path = os.path.abspath(key)
        cache_path = os.path.abspath(cache)
        os.makedirs(os.path.dirname(cache_path), exist_ok=True)

        if not os.path.exists(key_path):
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
            return ("skip", True)

        return ("skip", False)

    def execute(self, yes=False, **kwargs):
        if self.name == "confirm":
            return self.execute_confirm(yes=yes, **self.arguments)
        elif self.name == "skip":
            return self.execute_skip_if(yes=yes, **self.arguments)


class FakeTaskScript(BaseAction):
    def __init__(self, s, bashfile):
        self.source = s
        self.bashfile = bashfile

    def __str__(self):
        return str(click.style(self.source, fg="red"))


class TaskScript(BaseAction):
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

    def depends_on(self, *, recursive=False):
        def gen_actions():
            task_strings = self.declaration_line.split(":", 1)[1].split()

            task_name_index_tuples = [
                (self.bashfile.find_chunk(task_name=s), s) for s in task_strings
            ]

            for i, task_string in task_name_index_tuples:

                if task_string.startswith("@"):
                    yield TaskFilter(task_string, bashfile=self.bashfile)
                elif i is None:
                    # Create the filter.
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
                    graph[parent].append(child)

            for task in graph:
                for action in graph[task]:
                    for dep_action in graph.get(action, []):
                        if dep_action not in actions:
                            actions.append(dep_action)
                    if action not in actions:
                        actions.append(action)

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

    def prepare_init(self, sources=None, insert_source=None):

        tf = mkstemp(suffix=".sh", prefix="bashf-")[1]

        stdlib_path = os.path.join(os.path.dirname(__file__), "scripts", "stdlib.sh")
        with open(stdlib_path, "r") as f:
            stdlib = f.read()

        if sources is None:
            sources = (stdlib, self.bashfile.funcs_source, self.bashfile.root_source)

        with open(tf, "w") as f:
            if insert_source:
                f.write(f"#!/usr/bin/env bash\nsource {insert_source}\n")
            for source in sources:
                f.write(source)
                f.write("\n\n")

        # Mark the temporary file as executable.
        st = os.stat(tf)
        os.chmod(tf, st.st_mode | stat.S_IEXEC)

        return tf

    def execute(
        self, *, blocking=False, debug=False, interactive=False, silent=False, **kwargs
    ):

        init_tf = self.prepare_init()
        if self.bashfile._is_shebang_line(self.source_lines[0]):
            script_tf = self.prepare_init(sources=[self.source])
            if self.source_lines[0] == "#!/usr/bin/env bash":
                with open(script_tf, "r") as f:
                    lines = f.readlines()
                lines.insert(1, f"source {init_tf}")
                with open(script_tf, "w") as f:
                    f.write("\n".join(lines))
        else:
            script_tf = self.prepare_init(sources=[self.source], insert_source=init_tf)

        args = " ".join([shlex_quote(a) for a in self.bashfile.args])

        if interactive:
            script = f"source {shlex_quote(init_tf)}; {shlex_quote(script_tf)} {args}"
        else:
            script = f"source {shlex_quote(init_tf)}; {shlex_quote(script_tf)} {args} 2>&1 | bake:indent"

        cmd = f"bash -c {shlex_quote(script)}"

        if debug:
            click.echo(f" $ {cmd}", err=True)

        c = os.system(cmd)

        if not debug:
            os.remove(script_tf)
            os.remove(init_tf)

        return c

    def shellcheck(self, *, silent=False, debug=False, **kwargs):
        tf = self.prepare_init(sources=[self.source])
        cmd = f"shellcheck {shlex_quote(tf)} --external-sources --format=json"

        c = delegator.run(cmd)

        if debug:
            click.echo(f"$ {cmd}", err=True)
        else:
            os.remove(tf)

        return c

    @property
    def name(self):
        return self.chunk[0].split(":")[0].strip()

    @property
    def chunk(self):
        return self.bashfile.chunks[self._chunk_index]

    def _iter_source(self):
        try:
            has_shebang = self._transform_line(self.chunk[1]).startswith("#!")
        except IndexError:
            has_shebang = False

        if not has_shebang:
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
                g.add_node(dep)
                g.add_edge(task, dep)

        self._graph = g
        return self.graph

    def __repr__(self):
        return f"<Bakefile path={self.path!r}>"

    def __getitem__(self, key):
        return self.tasks[key]

    def _iter_chunks(self):
        task_lines = [tl for tl in self._iter_task_lines()]

        for i, (index, declaration_line) in enumerate(task_lines):
            try:
                end_index = task_lines[i + 1][0]
            except IndexError:
                end_index = None

            yield self.source_lines[index:end_index]

    def _iter_task_lines(self):
        for i, line in enumerate(self.source_lines):
            if line:
                if self._is_declaration_line(line):
                    yield (i, line.rstrip())

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

    def _is_declaration_line(self, line):
        if not self._is_comment_line(line):
            if ":" in line:
                line = line.replace("\t", " " * 4)
                return bool(len(line[:4].strip()))

    @staticmethod
    def _is_shebang_line(line):
        return line.startswith("#!")

    @staticmethod
    def _is_comment_line(line):
        return line.startswith("#")

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
                    if not task_active:
                        source_lines.append(line)
            # else:
            # task_active = False

        return source_lines

    @property
    def root_source(self):
        return "\n".join(self.root_source_lines)

    @property
    def funcs_source(self):
        source = []

        for task in self.tasks:
            task = self[task]
            source.append(
                f"task:{task.name}()" + " { " + f"bake --silent {task.name} $@;" + "}"
            )

        return "\n".join(source)
