"""
bash.py module
"""
import json as json_lib
import re
import sys
import time
from shlex import quote as shlex_quote
import subprocess
import os
import delegator
import click

DELEGATOR_MINIMUM_TIMEOUT = 60 * 60 * 60 * 8
WHICH_BASH = "bash"

# Monkey-patch delegator (hack):
if delegator.TIMEOUT < DELEGATOR_MINIMUM_TIMEOUT:
    delegator.TIMEOUT = DELEGATOR_MINIMUM_TIMEOUT

__all__ = ["run", "Bash"]


def system_which(command, mult=False):
    """Emulates the system's which. Returns None if not found."""
    _which = "which -a" if not os.name == "nt" else "where"
    # os.environ = {
    #     vistir.compat.fs_str(k): vistir.compat.fs_str(val)
    #     for k, val in os.environ.items()
    # }
    result = None
    try:
        c = delegator.run("{0} {1}".format(_which, command))
        try:
            # Which Not found…
            if c.return_code == 127:
                click.echo(
                    "{}: the {} system utility is required for bake to find bash properly."
                    "\n  Please install it.".format(
                        click.style("Warning", bold=True), click.style(_which, fg="red")
                    ),
                    err=True,
                )
            assert c.return_code == 0
        except AssertionError:
            result = None
    except TypeError:
        if not result:
            result = None
    else:
        if not result:
            result = next(iter([c.out, c.err]), "").split("\n")
            result = next(iter(result)) if not mult else result
            return result
        if not result:
            result = None
    result = [result] if mult else result
    return result


class BashProcess:
    """bash process object"""

    def __init__(
        self,
        args,
        parent: "bash",
        interactive: bool = False,
        blocking: bool = True,
        **kwargs,
    ) -> None:
        # Environ inherents from parent.

        # Remember passed-in arguments.
        self.parent = parent
        self.args = args
        self._return_code = None
        self.start_time = time.time()
        self.elapsed_time = None
        self.sub = None

        cmd = [system_which("bash"), *args]

        std_out = sys.stdout if interactive else subprocess.PIPE
        std_in = sys.stdin if interactive else subprocess.PIPE

        self.sub = subprocess.Popen(
            cmd, stdout=std_out, stdin=std_in, universal_newlines=True, **kwargs
        )
        if blocking:
            self._return_code = self.sub.wait()

        self.elapsed_time = time.time() - self.start_time

    @property
    def output(self) -> str:
        """stdout of the running process"""
        return str(self.sub.stdout)

    @property
    def err(self) -> str:
        """stderr of the running process"""
        return str(self.sub.stderr)

    @property
    def json(self) -> dict:
        """stdout of the running process, converted to a dict if it's json"""
        return json_lib.loads(str(self.sub.out))

    @property
    def ok(self) -> bool:
        """if the process exited with a 0 exit code"""
        return self.return_code == 0

    @property
    def return_code(self) -> int:
        """the exit code of the process"""
        return self._return_code or self.sub.returncode

    @property
    def pid(self) -> int:
        """the process id"""
        return self.sub.pid

    def __repr__(self) -> str:
        """string representation of the bash process"""
        return f"<BashProcess pid={self.sub.pid!r} return_code={self.return_code!r}>"


class Bash:
    """an instance of bash"""

    def __init__(self, *, path=WHICH_BASH, environ=None):
        """constructor"""
        self.path = path
        self.environ = environ or {}

        ver_proc = self("--version")
        self.about = ver_proc.output

    @property
    def version(self) -> str:
        """Returns the version number of the Bash-interpreter."""
        matches = re.search(r"\bversion\s+(.+)\b", self.about)
        # ...GNU Bash, version 4.4.19(1)-release ... --> 4.4.19(1)-release
        return matches.group(1) if matches else "version_unknown"

    def __call__(self, *args) -> BashProcess:
        """execute the bash process as a child of this process"""
        return BashProcess(parent=self, args=args)

    def command(self, script: str, quote=True) -> BashProcess:
        """form up the command with shlex and execute"""
        maybe_quote = shlex_quote if quote else str
        return self(f"-c", maybe_quote(script))


def run(script=None, **kwargs):
    """Runs the given bash script."""
    return Bash(**kwargs).command(script)
