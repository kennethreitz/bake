import sys
import click
import json
import random

from .bakefile import Bakefile, TaskFilter
from .exceptions import NoBakefileFound
from .clint import eng_join

import pygments
import pygments.lexers
import pygments.formatters

from .constants import SKIP_NEXT, SAFE_ENVIRONS


def indent(line):
    return f'{" " * 4}{line}'


def do_help(exit=0):
    with click.Context(entrypoint) as ctx:
        help = entrypoint.get_help(ctx)
        help = help.replace(
            "  bake",
            str(click.style(" $ ", fg="green", bold=True))
            + str(click.style("bake", fg="yellow", bold=True)),
        )
        help = help.replace(
            "the strangely familiar task–runner",
            str(
                click.style("the strangely familiar task–runner", fg="white", bold=True)
            ),
        )
        help = help.replace(
            "Options", str(click.style("Options", fg="white", bold=True))
        )

        help = help.replace(
            "--insecure", str(click.style("--insecure", fg="red", bold=True))
        )
        help = help.replace("--yes", str(click.style("--yes", fg="red", bold=True)))
        help = help.replace(
            "--allow", str(click.style("--allow", fg="green", bold=True))
        )
        help = help.replace(
            "--no-deps", str(click.style("--no-deps", fg="yellow", bold=True))
        )
        help = help.replace(
            "--continue", str(click.style("--continue", fg="red", bold=True))
        )
        help = help.replace(
            "--environ-json", str(click.style("--environ-json", fg="green", bold=True))
        )
        help = help.replace("-e,", str(click.style("-e", fg="green", bold=True) + ","))

        click.echo(help, err=True)
        sys.exit(exit)


def echo_json(obj):
    _json = json.dumps(obj, indent=2)

    if sys.stdin.isatty():
        _json = pygments.highlight(
            _json, pygments.lexers.JsonLexer(), pygments.formatters.TerminalFormatter()
        )

    click.echo(_json, err=False)


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
    help="The Bakefile to use.",
)
@click.option(
    "--list",
    "_list",
    default=False,
    is_flag=True,
    help="Lists available tasks (and their dependencies).",
)
@click.option(
    "--levels",
    "-l",
    default=None,
    nargs=1,
    type=click.INT,
    help="List only a given number of '/' levels of tasks.",
)
@click.option(
    "--help", "-h", default=False, is_flag=True, help="Show this message and exit."
)
@click.option("--debug", default=False, is_flag=True, hidden=True)
@click.option("--source", default=False, nargs=1, hidden=True)
@click.option(
    "--allow",
    default=False,
    nargs=1,
    multiple=True,
    hidden=False,
    help="Whitelist an environment variable for use.",
)
@click.option(
    "--no-deps",
    default=False,
    is_flag=True,
    hidden=False,
    help="Do not run dependent tasks.",
)
@click.option("--yes", is_flag=True, help="Set medium–security prompts to yes.")
@click.option(
    "--continue",
    "_continue",
    is_flag=True,
    # type=click.BOOL,
    help="Continue, if a task fails.",
)
@click.option(
    "--interactive",
    "-i",
    is_flag=True,
    # type=click.BOOL,
    help="Run in interactive mode.",
)
@click.option(
    "--insecure",
    is_flag=True,
    # type=click.BOOL,
    help="Inherit parent shell's environment variables.",
)
@click.argument("arguments", nargs=-1, type=click.STRING)
@click.option(
    "--silent",
    "-s",
    is_flag=True,
    # type=click.BOOL,
    help="Reduce output.",
    envvar="BAKE_SILENT",
)
@click.option(
    "--sort", is_flag=True, type=click.BOOL, help="Sort tasks, alphabetially."
)
@click.option(
    "--environ-json",
    "-e",
    nargs=1,
    type=click.STRING,
    help="Provide environment variables via JSON.",
)
@click.option(
    "--json",
    "-j",
    "_json",
    is_flag=True,
    # type=click.BOOL,
    help="Output in JSON format (stdout).",
)
def entrypoint(
    *,
    task,
    bakefile,
    arguments,
    _list,
    levels,
    _continue,
    environ_json,
    debug,
    silent,
    sort,
    insecure,
    allow,
    _json,
    no_deps,
    interactive,
    yes,
    help,
    source,
):
    """bake — the strangely familiar task–runner."""

    if help:
        do_help(0)

    # Default to list behavior, when no task is provided.
    if _json or source:
        silent = True

    # Allow explicitly–passed environment variables.
    SAFE_ENVIRONS.extend(allow)

    # Enable list functionality, by default.
    if task == "__LIST_ALL__":
        _list = True
        task = None

    # Establish the Bakefile.
    try:
        if bakefile == "__BAKEFILE__":
            bakefile = Bakefile.find(root=".", filename="Bakefile")
        else:
            bakefile = Bakefile(path=bakefile)

    except NoBakefileFound:
        click.echo(click.style("No Bakefile found!", fg="red"), err=True)
        do_help(1)
        sys.exit(0)

    if debug:
        click.echo(f" + Bakefile: {bakefile.path}", err=True)

    # --source (internal API)
    if source:

        def echo_generator(g):
            for g in g:
                click.echo(g)

        if source == "__init__":
            source = random.choice(list(bakefile.tasks.keys()))
            task = bakefile.tasks[source]
            source = task.gen_source(
                sources=[task.bashfile.funcs_source, task.bashfile.root_source]
            )
        else:
            task = bakefile.tasks[source]
            source = task.gen_source(
                sources=[
                    task.bashfile.funcs_source,
                    task.bashfile.root_source,
                    task.source,
                ]
            )

        for source_line in source:
            click.echo(source_line)
        sys.exit(0)

    if not insecure:
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
        click.echo(f" + argv: {argv!r}", err=True)
        click.echo(f" + environ: {environ!r}", err=True)
        click.echo(err=True)
    for env in environ:
        key, value = env
        if debug:
            click.echo(
                f" + Setting environ: {click.style(key, fg='red')} {click.style('=', fg='white')} {value}.",
                err=True,
            )
        bakefile.add_environ(key, value)

    bakefile.add_args(*argv)

    if _list:
        __list_json = {"tasks": {}}

        # Enable level filtering.
        if levels is not None:
            task_list = []
            for _task in bakefile.tasks:
                if len(_task.split("/")) <= levels:
                    task_list.append(_task)
        else:
            task_list = bakefile.tasks

        if sort:
            task_list = sorted(task_list)

        for _task in task_list:
            depends_on = bakefile[_task].depends_on(
                include_filters=False, recursive=True
            )

            if no_deps:
                depends_on = ()

            if depends_on:
                deps = [str(a) for a in depends_on]
                deps = f"\n    {click.style('+', fg='yellow', bold=True)} {eng_join(deps, conj='&')}."
            else:
                deps = ""
            colon = "" if not deps else "…"

            __list_json["tasks"].update(
                {_task: {"depends_on": [str(d) for d in depends_on]}}
            )

            if not silent:
                click.echo(
                    f" {click.style('-', fg='green', bold=True)} {click.style(_task, bold=True)}{colon}{deps}",
                    err=False,
                )

        if not silent:
            tasks_unechoed = len(bakefile.tasks) - len(task_list)

            if tasks_unechoed:
                bake_command = str(click.style(f"bake --levels {levels + 1}", fg="red"))
                click.echo(
                    f"Note: {tasks_unechoed} more tasks are available. "
                    f"Please use $ {bake_command} to see more.",
                    err=True,
                )

        if _json:
            echo_json(__list_json)

        sys.exit(0)

    if task:
        try:
            task = bakefile[task]
        except KeyError:
            click.echo(click.style(f"Task {task} does not exist!", fg="red"))
            sys.exit(1)

        def execute_task(task, *, silent=False):
            try:
                edges = list(bakefile.graph.out_edges(task))[0]
            except IndexError:
                edges = list()

            skips = []
            for edge in edges:
                if edge.do_skip is not None:
                    skips.append(edge.do_skip)

            if not all(skips or [False]):
                # TODO: fully implement this?
                if "@" in f"{task}":
                    silent = True

                if not silent:
                    click.echo(
                        click.style(" + ", fg="white")
                        + click.style(f"Executing {task}", fg="yellow")
                        + click.style(":", fg="white"),
                        err=True,
                    )
                usually_bash_task = task.execute(
                    yes=yes, debug=debug, silent=silent, interactive=interactive
                )

                if not _continue:
                    if hasattr(usually_bash_task, "ok"):

                        if usually_bash_task.return_code > 0:
                            if not silent:
                                click.echo(
                                    click.style(f"Task {task} failed!", fg="red"),
                                    err=True,
                                )
                            sys.exit(usually_bash_task.return_code)

                    # This happens when it's a task filter.
                    elif isinstance(usually_bash_task, tuple):
                        key, value = (
                            usually_bash_task
                        )  # But, in this instance, clearly isn't.
            else:
                click.echo(
                    click.style(" + ", fg="green")
                    + click.style(f"Skipping {task}", fg="white")
                    + click.style(".", fg="white"),
                    err=True,
                )

        if not no_deps:
            tasks = task.depends_on(recursive=True) + [task]

        else:
            tasks = [task]

        for task in tasks:
            execute_task(task, silent=silent)

        if not silent:
            click.echo(
                click.style(" + ", fg="white")
                + click.style("Done", fg="green")
                + click.style(".", fg="white"),
                err=True,
            )
        sys.exit(0)


if __name__ == "__main__":
    entrypoint()
