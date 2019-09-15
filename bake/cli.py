import sys
import click
import crayons

from .bakefile import Bakefile
from .config import config

SAFE_ENVIRONS = ["HOME"]


def indent(line):
    return f'{" " * 4}{line}'


@click.command(context_settings=dict(help_option_names=["-h", "--help"]))
@click.argument(
    "task",
    type=click.STRING,
    default="__LIST_ALL__",
    envvar="BAKE_TASK",
    # required=False,
)
@click.option(
    "--bakefile",
    "-b",
    default="__BAKEFILE__",
    envvar="BAKEFILE_PATH",
    nargs=1,
    type=click.Path(),
)
@click.option(
    "--list",
    "-l",
    "_list",
    default=False,
    is_flag=True,
    help="Lists available tasks from Bakefile.",
)
@click.option("--debug", default=False, is_flag=True, hidden=True)
@click.option("--shellcheck", default=False, is_flag=True, hidden=False)
@click.option("--whitelist", default=False, nargs=1, hidden=False)
@click.option("--yes", is_flag=True, help="Set prompts to yes.")
@click.option(
    "--fail",
    "-x",
    is_flag=True,
    type=click.BOOL,
    help="Fail immediately, if any task fails.",
)
@click.option(
    "--secure",
    is_flag=True,
    type=click.BOOL,
    help="Ignore parent shell's environment variables.",
)
@click.argument(
    "arguments",
    nargs=-1,
    type=click.STRING,
    # multiple=True,
    # help="task ARGV argument (can be passed multiple times).",
)
@click.option("--no-color", is_flag=True, type=click.BOOL, help="Disable colors.")
@click.option("--silent", "-s", is_flag=True, type=click.BOOL, help="Reduce output.")
@click.option(
    "--environ-json",
    "-j",
    nargs=1,
    type=click.STRING,
    help="environment variables, in JSON format.",
)
def task(
    *,
    task,
    bakefile,
    arguments,
    _list,
    fail,
    environ_json,
    shellcheck,
    debug,
    silent,
    secure,
    no_color,
    whitelist,
    yes,
):
    """bake — the familiar Bash/Make hybrid."""

    # Default to list behavior, when no task is provided.
    if no_color:
        crayons.DISABLE_COLOR = True

    if whitelist:
        if debug:
            click.echo(f" + config: {config!r}")
        if whitelist not in config["ENVIRON_WHITELIST"]:
            config["ENVIRON_WHITELIST"].append(whitelist)
            config.save()

    if task == "__LIST_ALL__":
        _list = True
        task = None

    if bakefile == "__BAKEFILE__":
        bakefile = Bakefile.find(root=".")
    if secure:
        for key in bakefile.environ:
            if key not in SAFE_ENVIRONS:
                del bakefile.environ[key]

    if environ_json:
        bakefile.add_environ_json(environ_json)

    argv = []
    environ = []

    for i, argument in enumerate(arguments[:]):
        if "=" in argument:
            key, value = argument.split("=", 1)
            environ.append((key, value))
        else:
            argv.append(argument)

    if debug:
        click.echo(f" + argv: {argv!r}")
        click.echo(f" + environ: {environ!r}")

    for env in environ:
        key, value = env
        if debug:
            click.echo(
                f" + Setting environ: {crayons.red(key)} {crayons.white('=')} {value}.",
                err=True,
            )
        bakefile.add_environ(key, value)

    bakefile.add_args(*argv)

    if _list:
        for task in bakefile.tasks:
            print(f" - {task}")
        sys.exit(0)

    if task:
        try:
            task = bakefile[task]
        except KeyError:
            click.echo(crayons.red(f"Task {task} does not exist!"))
            sys.exit(1)

        def execute_task(task, *, next_task=None, silent=False):
            if not silent:
                click.echo(
                    crayons.white(" · ")
                    + crayons.yellow(f"Executing {task}")
                    + crayons.white(" · ")
                )
            return_code = task.execute(yes=yes, next_task=next_task, silent=silent)

            if fail:
                if not return_code == 0:
                    click.echo(f"Task {task} failed!")
                    sys.exit(return_code)

        tasks = task.depends_on(recursive=True) + [task]
        for task in tasks:
            try:
                next_task = tasks[tasks.index(task) + 1]
            except IndexError:
                next_task = None

            execute_task(task, next_task=next_task, silent=silent)

        if not silent:
            click.echo(
                crayons.white(" · ") + crayons.green("Done") + crayons.white(" · ")
            )
        sys.exit(0)


def entrypoint():
    try:
        main()
    except KeyboardInterrupt:
        print("ool beans.")


def main():
    task()


if __name__ == "__main__":
    entrypoint()
