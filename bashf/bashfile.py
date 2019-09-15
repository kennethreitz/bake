import os
import json

from .bash import Bash

INDENT_STYLES = ('\t', ' ' * 4)


class NoBashfileFound(RuntimeError):
    pass


class TaskNotInBashfile(ValueError):
    pass


class TaskScript:
    def __init__(self, bashfile, chunk_index=None):
        self.bashfile = bashfile
        self._chunk_index = chunk_index

        if self._chunk_index is None:
            raise TaskNotInBashfile()

    def __repr__(self):
        return f"<TaskScript name={self.name!r} depends_on={self.depends_on(recursive=True)!r}>"

    @property
    def declaration_line(self):
        for line in self.bashfile.source_lines:
            if line.startswith(self.name):
                return line

    def depends_on(self, *, reverse=False, recursive=False):
        def gen_tasks():
            task_names = self.declaration_line.split(':')[1].split()
            task_indexes = [
                self.bashfile.find_chunk(task_name=n) for n in task_names
            ]
            for i in task_indexes:
                yield TaskScript(bashfile=self.bashfile, chunk_index=i)

        tasks = [t for t in gen_tasks()]

        if recursive:
            for i, task in enumerate(tasks[:]):
                for t in reversed(task.depends_on()):
                    if t.name not in [task.name for task in tasks]:
                        tasks.insert(i + 1, t)

        # if reverse:
        #     tasks = list(reversed(tasks))

        return tasks

    @classmethod
    def _from_chunk_index(Class, bashfile, *, i):

        return Class(bashfile=bashfile, chunk_index=i)

    @staticmethod
    def _transform_line(line, *, indent_styles=INDENT_STYLES):
        for indent_style in indent_styles:
            if line.startswith(indent_style):
                return line[len(indent_style) :]

    def execute(self, blocking=False):
        bash = Bash(environ=self.bashfile.environ)
        return bash.command(self.source, blocking=False)

    @property
    def name(self):
        return self.chunk[0].split(':')[0].strip()

    @property
    def chunk(self):
        return self.bashfile.chunks[self._chunk_index]

    def _iter_source(self):
        for line in self.chunk[1:]:
            line = self._transform_line(line)
            if line:
                yield line

    @property
    def source(self):
        return '\n'.join([s for s in self._iter_source()])

    @property
    def source_lines(self):
        def gen():
            for line in self.bashfile.source_lines:
                pass


class Bashfile:
    def __init__(self, *, path):
        self.path = path
        self.environ = {}
        self._chunks = []

        if not os.path.exists(path):
            raise NoBashfileFound()

        self.chunks

    def __repr__(self):
        return f"<Bashfile path={self.path!r}>"

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
    def chunks(self):
        if not self._chunks:
            self._chunks = [c for c in self._iter_chunks()]
        return self._chunks

    def find_chunk(self, task_name):
        for i, chunk in enumerate(self.chunks):
            if chunk[0].split(':')[0].strip() == task_name:
                return i

    def __iter__(self):
        return (v for v in self.tasks.values())

    def add_environ(self, key, value):
        self.environ[key] = value

    def add_environ_json(self, s):
        try:
            j = json.loads(s)
        except json.JSONDecodeError:
            assert os.path.exists(s)
            # Assume a path was passed, instead.
            with open(s, 'r') as f:
                j = json.load(f)

        self.environ.update(j)

    @property
    def home_path(self):
        return os.path.abspath(os.path.dirname(self.path))

    @classmethod
    def find(
        Class,
        *,
        filename='Bashfile',
        root=os.getcwd(),
        max_depth=4,
        topdown=True,
    ):
        """Returns the path of a Pipfile in parent directories."""
        i = 0
        for c, d, f in os.walk(root, topdown=topdown):
            if i > max_depth:
                raise NoBashfileFound('No {filename} found!')
            elif filename in f:
                return Class(path=os.path.join(c, filename))
            i += 1

    @property
    def source(self):
        with open(self.path, 'r') as f:
            return f.read()

    @property
    def source_lines(self):
        return self.source.split('\n')

    @staticmethod
    def _is_declaration_line(line):
        return not (line.startswith(' ') or line.startswith('\t'))

    @property
    def tasks(self):
        tasks = {}
        for i, chunk in enumerate(self.chunks):
            script = TaskScript._from_chunk_index(bashfile=self, i=i)
            tasks[script.name] = script

        return tasks
