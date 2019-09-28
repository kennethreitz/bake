import click
import delegator

PREFIX = "bake"
SEPERATOR = "."

__all__ = ["Cache"]


class Cache:
    prefix = PREFIX
    seperator = SEPERATOR

    def __init__(self, *, bf, namespace="hashes", debug=False, enabled=True):

        self.bf = bf
        self.enabled = enabled
        self.debug = debug
        self.namespace = namespace

        try:
            # Assert git exists, and appears functioning.
            c = delegator.run("git --version")
            assert c.ok
            if self.debug:
                click.echo(" + cache.git.ok: true", err=True)

            # Record the top-level directory of the git repository.
            c = delegator.run("git rev-parse --show-toplevel")
            self.git_root = c.out.strip()
            if self.debug:
                click.echo(f" + cache.git.root: {self.git_root!r}", err=True)

            # Assert Bakefile exists within it.
            assert self.bf.path.startswith(self.git_root)
            if self.debug:
                click.echo(f" + cache.git.contains_bakefile: true", err=True)

        except AssertionError:
            # Cache is disabled.
            self.enabled = False

        if debug:
            click.echo(f" + cache.enabled: true", err=True)

    def __repr__(self):
        return f"<Cache enabled={self.enabled}>"

    def _key_for_hashes(self, key):
        return self.seperator.join((self.prefix, self.namespace, key))

    def clear(self):
        for key in self:
            del self[key]

        if self.debug:
            click.echo(" + cache.git.cleared: true", err=True)

    def __iter__(self):
        # TODO: Print these.
        cmd = "git config --local --list"

        if self.debug:
            click.echo(f" {click.style('$', fg='green')} {cmd}", err=True)

        c = delegator.run(cmd)
        for result in c.out.split("\n"):
            if result.startswith(self.prefix):
                yield result.split("=", -1)[0][
                    len(self.prefix + "." + self.namespace + ".") :
                ]

    def __getitem__(self, k):
        key = self._key_for_hashes(k)
        cmd = f"git config --local --get {key}"

        if self.debug:
            click.echo(f" {click.style('$', fg='green')} {cmd}", err=True)

        c = delegator.run(cmd)
        if c.ok:
            return c.out.strip()
        else:
            return None

    def __setitem__(self, k, v):
        key = self._key_for_hashes(k)
        cmd = f"git config --local {key} {v}"

        if self.debug:
            click.echo(f" {click.style('$', fg='green')} {cmd}", err=True)

        c = delegator.run(cmd)
        return c.ok

    def __delitem__(self, k):
        key = self._key_for_hashes(k)
        cmd = f"git config --local --unset {key}"

        if self.debug:
            click.echo(f" {click.style('$', fg='green')} {cmd}", err=True)

        c = delegator.run(cmd)
        return c.ok
