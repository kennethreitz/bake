import sys
import click
import crayons
from .bashfile import Bashfile


def indent(line):
    return f'{" " * 4}{line}'


@click.command()
@click.argument(
    'task',
    type=click.STRING,
    default='__LIST_ALL__',
    envvar="BASHFILE_TASK",
    # required=False,
)
@click.option(
    '--bashfile',
    '-b',
    default='__BASHFILE__',
    envvar='BASHFILE_PATH',
    nargs=1,
    type=click.Path(),
)
@click.option('--list', '-l', '_list', default=False, is_flag=True)
@click.option('--debug', default=False, is_flag=True, hidden=True)
@click.option('--shellcheck', default=False, is_flag=True, hidden=True)
@click.option(
    '--environ',
    '-e',
    nargs=2,
    type=click.STRING,
    multiple=True,
    help='task environment variable (can be passed multiple times).',
)
@click.option(
    '--fail',
    '-x',
    is_flag=True,
    type=click.BOOL,
    help='Fail immediately, if any task fails.',
)
@click.option(
    '--arg',
    '-a',
    nargs=1,
    type=click.STRING,
    multiple=True,
    help='task ARGV arguments (can be passed multiple times).',
)
@click.option(
    '--quiet', '-q', is_flag=True, type=click.BOOL, help='Reduce output.'
)
@click.option(
    '--environ-json',
    '-j',
    nargs=1,
    type=click.STRING,
    help='environment variables, in JSON format.',
)
def task(
    *,
    task,
    bashfile,
    arg,
    _list,
    environ,
    fail,
    environ_json,
    shellcheck,
    debug,
    quiet,
):
    """bashf — Bashfile runner (the familiar Bash/Make hybrid)."""
    # Default to list behavior, when no task is provided.

    if task == '__LIST_ALL__':
        _list = True
        task = None

    if bashfile == '__BASHFILE__':
        bashfile = Bashfile.find(root='.')

    if environ_json:
        bashfile.add_environ_json(environ_json)

    for env in environ:
        key, value = env[:]
        if debug:
            click.echo(
                f"    Setting environ: {crayons.red(key)} {crayons.white('=')} {value}.",
                err=True,
            )
        bashfile.add_environ(key, value)

    if _list:
        for task in bashfile.tasks:
            print(f" - {task}")
        sys.exit(0)

    if task:
        try:
            task = bashfile[task]
        except KeyError:
            click.echo(crayons.red(f'Task {task!r} does not exist!'))
            sys.exit(1)

        # print(task)
        for task in task.depends_on(recursive=True):
            if not quiet:
                click.echo(crayons.yellow(f'Executing task {task.name!r}…'))
            return_code = task.execute()

            if fail:
                if not return_code == 0:
                    click.echo(f'Task {task.name!r} failed!')
                    sys.exit(return_code)

        click.echo('Done!')
        sys.exit(0)


def entrypoint():
    try:
        main()
    except KeyboardInterrupt:
        print('ool beans.')


def main():
    task()


if __name__ == '__main__':
    entrypoint()
