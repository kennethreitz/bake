import sys

import click


@click.command(context_settings=dict(help_option_names=["-h", "--help"]))
@click.argument("s", type=click.STRING, default=False, required=False)
@click.option("--err", is_flag=True, type=click.BOOL, default=False, help="Use stderr.")
@click.option(
    "--fg", nargs=1, type=click.STRING, default="red", help="Foreground color to use."
)
@click.option(
    "--bg",
    nargs=1,
    type=click.STRING,
    default=False,
    help="Background color to use (rare).",
)
@click.option("--bold", is_flag=True, type=click.BOOL, default=False, help="Be bold.")
def red(s, *, fg, bg, bold, err):
    if s is False:
        s = sys.stdin.read()

    try:
        click.echo(click.style(s, fg=fg, bg=bg), err=err, nl=False)
    except TypeError:
        click.echo(click.style(s), err=err, nl=False)
