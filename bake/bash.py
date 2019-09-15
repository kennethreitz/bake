"""
bash.py module
"""
import re
import time
import json as json_lib
import os
import stat
from tempfile import mkstemp
from shlex import quote as shlex_quote

import delegator

DELEGATOR_MINIMUM_TIMEOUT = 60 * 60 * 60 * 8
WHICH_BASH = "bash"

# Monkey-patch delegator (hack):
if delegator.TIMEOUT < DELEGATOR_MINIMUM_TIMEOUT:
    delegator.TIMEOUT = DELEGATOR_MINIMUM_TIMEOUT

__all__ = ["run", "Bash"]


class BashProcess:
    """Bash process object."""

    def __init__(self, args, parent: "Bash", blocking: bool = True) -> None:
        """constructor"""
        # Environ inherents from parent.

        # Remember passed-in arguments.
        self.parent = parent
        self.args = args

        # Run the subprocess.
        args = " ".join(args)
        self.start_time = time.time()
        self.sub = delegator.run(
            f"{self.parent.path} {args}", env=self.parent.environ, block=blocking
        )
        if blocking:
            self.elapsed_time = time.time() - self.start_time

    @property
    def output(self) -> str:
        """stdout of the running process"""
        return str(self.sub.out)

    @property
    def err(self) -> str:
        """stderr of the running process"""
        return str(self.sub.err)

    @property
    def json(self) -> dict:
        """stdout of the running process, converted to a dict if it's json"""
        return json_lib.loads(str(self.sub.out))

    @property
    def ok(self) -> bool:
        """if the process exited with a 0 exit code"""
        return self.sub.ok

    @property
    def return_code(self) -> int:
        """the exit code of the process"""
        return self.sub.return_code

    @property
    def pid(self) -> int:
        """the process id"""
        return self.sub.pid

    def __repr__(self) -> str:
        """string representation of the bash process"""
        return (
            f"<BashProcess pid={self.sub.pid!r} return_code={self.sub.return_code!r}>"
        )


class Bash:
    """An instance of Bash."""

    def __init__(self, *, path=WHICH_BASH, environ=None, interactive=False):
        """constructor"""
        self.path = path
        self.interactive = interactive
        self.environ = environ or {}

        ver_proc = self._exec("--version")
        if not ver_proc.ok:
            raise RuntimeError("bash is required.")
        self.about = ver_proc.output

    @property
    def version(self) -> str:
        """Returns the version number of the Bash-interpreter."""
        matches = re.search(r"\bversion\s+(.+)\b", self.about)
        # ...GNU Bash, version 4.4.19(1)-release ... --> 4.4.19(1)-release
        return matches.group(1) if matches else "version_unknown"

    def _exec(self, *args, **kwargs) -> BashProcess:
        """execute the bash process as a child of this process"""
        return BashProcess(parent=self, args=args, **kwargs)

    def command(self, script: str, debug=False, **kwargs) -> BashProcess:
        """form up the command with shlex and execute"""

        tf = mkstemp(suffix=".sh", prefix="bashf-")[1]

        with open(tf, "w") as f:
            f.write(script)

        # Mark the temporary file as executable.
        st = os.stat(tf)
        os.chmod(tf, st.st_mode | stat.S_IEXEC)

        stdlib_path = os.path.join(os.path.dirname(__file__), "scripts", "stdlib.sh")
        # print(stdlib_path)

        # cmd = f"bash -c {(script)}"
        script = shlex_quote(f"unbuffer {tf} 2>&1 | bashf-indent")
        cmd = f"bash --init-file {shlex_quote(stdlib_path)} -i -c {script} "

        if debug:
            print(cmd)

        return_code = os.system(cmd)

        if not debug:
            # Cleanup temporary file.
            os.remove(tf)

        return return_code


def run(script=None, **kwargs):
    """Runs the given bash script."""
    return Bash(**kwargs).command(script)
