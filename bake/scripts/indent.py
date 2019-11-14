import sys

import click


@click.command(context_settings=dict(help_option_names=["-h", "--help"]))
@click.option(
    "--read-stderr", is_flag=True, type=click.BOOL, default=True, help="Read stderr."
)
@click.option("--char", nargs=1, type=click.STRING, default="|", help="Prefix char.")
def entrypoint(*, char, read_stderr):

    pipe = sys.stdin if not read_stderr else sys.stderr

    for line in pipe:
        if line:
            print(f" {char} ", end="")
            print(line.rstrip())
        else:
            print(f" {char} ", end="")
