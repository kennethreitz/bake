# ☿ `bake`— a strangely familiar Bash task runner.


I love using `Makefile` for one-off tasks in projects. The problem with doing this, is you can't use familiar bash–isms when doing so, as GNU Make doesn't use the familiar Bash syntax. This project seeks to bridge these works.

**WORK IN PROGRESS**

```console
$ bake -h
Usage: bake [OPTIONS] [TASK] [ARGUMENTS]...

  bake — a strangely familiar Bash task–runner.

Options:
  -b, --bakefile PATH      The Bakefile to use.
  -l, --list               Lists available tasks from Bakefile.
  --allow TEXT             Whitelist an environment variable for use.
  --yes                    Set medium–security prompts to yes.
  -c, --continue           Fail immediately, if any task fails.
  --insecure               Use parent shell's environment variables.
  -s, --silent             Reduce output.
  -e, --environ-json TEXT  Environment variables, in JSON format.
  -j, --json               Output in JSON format (stdout).
  -h, --help               Show this message and exit.
```

### Features 'n Things

- A `Bakefile`, which looks and feels like the good parts of a `Makefile`.
- Except, you can write real bash code!
- Environment variables are explicitly passed or whitelisted (allowed), not inherinted from the parent shell.
- Unlike `Makefile`, either tabs or 4 spaces can be used.
- Tasks can be run safely and reliably. Rest assured that scripts are executed from the project root (e.g. location of the `Bakefile`).


## `$ cat Bakefile`

```make
full-install: system-deps install
install: node-deps python-deps
format:
    black .

argv-example:
    set -euxe
    echo "HELLO, $WHO"
    echo $@

# This will make you do a simple math question before proceeding.
dangerous-example: @confirm:secure
    rm -fr *

python-deps:
    pipenv install
node-deps:
    yarn install

system-deps:
    brew install pipenv
```

### `$ bake --list`

```console
 - format
 - full-install
 - install
 - env
 - argv-example
 - dangerous-example
 - python-deps
 - node-deps
 - system-deps
```


### `$ bake --silent format`

```console
All done! ✨ 🍰 ✨
7 files left unchanged.
```


### `$ bake install`

```console
 · Executing 'node-deps':
yarn install v1.17.3
[1/4] 🔍  Resolving packages...
success Already up-to-date.
✨  Done in 0.03s.
 · Executing 'python-deps':
Installing dependencies from Pipfile.lock (2ee04c)…
  🐍   ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 8/8 — 00:00:01
 · Done.
```


### `$ bake argv-example WHO=you 1 2 3`

```console
· Executing 'argv-example':
++ echo 'HELLO, you'
HELLO, you
++ echo '[1,' 2, '3]'
[1, 2, 3]
 · Done.
```

### `$ bake dangerous-example`

```console
· Executing '@confirm:secure' ·
   What is 10 times 2?: 7
· Aborted.
```


## Simple Installation of `bake` (**MacOS**):

Coming soon!

```console
$ brew install kennethreitz/-/bake --HEAD
```

--------------------

![bake icon](https://github.com/kennethreitz/bake/blob/master/ext/bake.png?raw=true)

This repository, brought to you, with much joy, by [Kenneth Reitz](https://kennethreitz.org/).
