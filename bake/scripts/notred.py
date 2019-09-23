import sys

import click


@click.command(context_settings=dict(help_option_names=["-h", "--help"]))
@click.argument("s", type=click.STRING, default=False, required=False)
@click.option("--err", is_flag=True, type=click.BOOL, default=False, help="Use stderr.")
def entrypoint(s, *, err):

    if s is False:
        s = sys.stdin.read()

    s = s.rstrip()

    click.echo(s)
