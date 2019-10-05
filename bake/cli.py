import sys
import click
import json
import random

from .bakefile import Bakefile, TaskFilter
from .exceptions import NoBakefileFound
from .clint import eng_join
from .utils import scrub_hidden_tasks

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
        help = help.replace("--dont_skip", str(click.style("--dont-skip", fg="red", bold=True)))
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
    required=False,
)
@click.option(
    "--bakefile",
    "-b",
    default="__BAKEFILE__",
    envvar="BAKEFILE",
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
    "--clear-skips", default=False, is_flag=True, help="Clears the skip cache."
)
@click.option(
    "--clear-envs",
    default=False,
    is_flag=True,
    help="Clears the allowed environment variable cache.",
)
@click.option(
    "--levels",
    "-l",
    default=-2,
    nargs=1,
    type=click.INT,
    help="The number of '/' levels to list.",
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
@click.option("--dont-skip", is_flag=True, help="Forces task to run even if skip key hasnt changed")
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
    clear_skips,
    clear_envs,
    interactive,
    dont_skip,
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

    # Enable list functionality, by default.
    if task == "__LIST_ALL__":
        _list = True
        task = None

    # Establish the Bakefile.
    try:
        bf = (
            Bakefile.find(root=".", filename="Bakefile", debug=debug)
            if bakefile == "__BAKEFILE__"
            else Bakefile(path=bakefile, debug=debug)
        )

    except NoBakefileFound:
        click.echo(click.style("No Bakefile found!", fg="red"), err=True)
        do_help(1)
        sys.exit(0)

    if allow:
        bf.env_cache[allow] = 1

    # Clear the cache, if asked to do so.
    if clear_envs:
        bf.env_cache.clear()

    # Allow explicitly–passed environment variables.
    SAFE_ENVIRONS.extend([g.upper() for g in bf.env_cache])

    if debug:
        click.echo(f" + Bakefile: {bf.path}", err=True)

    # Clear the cache, if asked to do so.
    if clear_skips:
        bf.skip_cache.clear()

    # --source (internal API)
    if source:

        task = bf.tasks[source]
        source = task.gen_source(sources=[task.bf.root_source, task.source])

        for source_line in source:
            click.echo(source_line)
        sys.exit(0)

    if not insecure:
        for key in bf.environ:
            if key not in SAFE_ENVIRONS:
                del bf.environ[key]

    if environ_json:
        bf.add_environ_json(environ_json)

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
        bf.add_environ(key, value)

    bf.add_args(*argv)

    if _list:
        __list_json = {"tasks": {}}

        # Enable level filtering.
        if levels is not None:
            task_list = []
            for _task in bf.tasks:
                if len(_task.split("/")) <= abs(levels):
                    task_list.append(_task)
        else:
            task_list = bf.tasks

        if sort:
            task_list = sorted(task_list)

        if levels < 0:
            task_list = scrub_hidden_tasks(task_list)

        for _task in task_list:
            depends_on = bf[_task].depends_on(include_filters=False, recursive=True)
            if levels < 0:
                depends_on = scrub_hidden_tasks(depends_on)

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
            if levels > 0:
                tasks_unechoed = len(bf.tasks) - len(task_list)

                if tasks_unechoed and levels is not None:
                    bake_command = str(
                        click.style(f"bake --levels {abs(levels) + 1}", fg="red")
                    )
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
            task = bf[task]
        except KeyError:
            click.echo(click.style(f"Task {task} does not exist!", fg="red"))
            sys.exit(1)

        def execute_task(task, *, silent=False):
            try:
                edges = list(bf.graph.out_edges(task))[0]
            except IndexError:
                edges = list()

            skips = []
            interactives = []

            for edge in edges:
                if edge.do_skip is not None:
                    skips.append(edge.do_skip)
                if edge.do_interactive is not None:
                    interactives.append(edge.do_interactive)

            force_interactive = any(interactives)

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
                    yes=yes,
                    dont_skip=dont_skip,
                    debug=debug,
                    silent=silent,
                    interactive=force_interactive or interactive,
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
                        # key, value = (
                        #     usually_bash_task
                        # )  # But, in this instance, clearly isn't.
                        pass
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
