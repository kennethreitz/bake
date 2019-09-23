import sys

import click
import colorama


@click.command(context_settings=dict(help_option_names=["-h", "--help"]))
@click.argument("s", type=click.STRING, default=False, required=False)
@click.option("--err", is_flag=True, type=click.BOOL, default=False, help="Use stderr.")
@click.option(
    "--always",
    is_flag=True,
    type=click.BOOL,
    default=False,
    help="Always speak technicolor.",
)
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
def entrypoint(s, *, fg, bg, bold, err, always):
    if always:
        # Don't strip colors.
        colorama.init(strip=False)

    if s is False:
        s = sys.stdin.read()

    s = s.rstrip()

    try:
        s = click.style(s, fg=fg, bg=bg)
    except TypeError:
        pass

    print(s)
