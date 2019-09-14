import os
import json

import bash


class NoBashfileFound(RuntimeError):
    pass


class TaskNotInBashfile(ValueError):
    pass


class TaskScript:
    def __init__(self, *, bashfile, name):
        self.bashfile = bashfile
        self.name = name

    def __repr__(self):
        return f"<TaskScript name={self.name!r} depends_on={self.depends_on!r} src={self.bashfile.path!r}>"

    @property
    def declaration_line(self):
        for line in self.bashfile.source_lines:
            if line.startswith(self.name):
                return line

    @property
    def depends_on(self):
        # TODO: return script objects.
        task_names = self.declaration_line.split(':')[1].split()
        return [TaskScript(bashfile=self.bashfile, name=n) for n in task_names]

    @classmethod
    def from_declaration_line(Class, s, *, bashfile):
        name = s.split(':')[0].strip()
        return Class(bashfile=bashfile, name=name)

    def run(self):
        bash.run(self.task_script)


class Bashfile:
    def __init__(self, *, path):
        self.path = path
        self.environ = {}
        if not os.path.exists(path):
            raise NoBashfileFound()

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
    def source_text(self):
        with open(self.path, 'r') as f:
            return f.read()

    @property
    def source_lines(self):
        return self.source_text.split('\n')

    @staticmethod
    def _is_declaration_line(line):
        return not (line.startswith(' ') or line.startswith('\t'))

    @property
    def scripts(self):
        def iter_task_lines():
            for line in self.source_lines:
                if line:
                    if self._is_declaration_line(line):
                        yield line.rstrip()

        scripts = {}
        for line in iter_task_lines():
            if self._is_declaration_line(line):
                script = TaskScript.from_declaration_line(line, bashfile=self)
                scripts[script.name] = script

        return scripts
