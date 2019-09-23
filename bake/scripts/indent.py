import sys

import click


@click.command(context_settings=dict(help_option_names=["-h", "--help"]))
@click.option(
    "--only-stdout", is_flag=True, type=click.BOOL, default=False, help="Use stdout."
)
@click.option(
    "--read-stderr", is_flag=True, type=click.BOOL, default=True, help="Read stderr."
)
@click.option("--char", nargs=1, type=click.STRING, default="|", help="Prefix char.")
def indent(*, char, read_stderr, only_stdout):

    pipe = sys.stdin if not read_stderr else sys.stderr

    for line in pipe:
        click.echo(f" {char}  ", err=(not only_stdout), nl=False)
        click.echo(line, nl=False)
