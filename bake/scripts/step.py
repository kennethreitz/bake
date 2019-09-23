# + Executing random/entrypoints:

import sys

import colorama
import click

# Don't strip colors.
colorama.init(strip=False)


@click.command(context_settings=dict(help_option_names=["-h", "--help"]))
@click.argument("s", type=click.STRING, default=False, required=False)
@click.option(
    "--read-stderr", is_flag=True, type=click.BOOL, default=False, help="Read stderr."
)
@click.option(
    "--no-color", is_flag=True, type=click.BOOL, default=False, help="Read stderr."
)
@click.option("--char", nargs=1, type=click.STRING, default="+", help="Prefix char.")
@click.option(
    "--color", nargs=1, type=click.STRING, default="yellow", help="Color to use."
)
def entrypoint(s, *, char, read_stderr, no_color, color):

    pipe = sys.stdin if not read_stderr else sys.stderr
    if s is False:
        s = pipe.read()

    if no_color:
        color = "NOTACOLOR"

    for line in s.strip().split("\n"):
        try:
            title = str(click.style(line, fg=color))
        except TypeError:
            title = line

        print(f" + {title}: ")
