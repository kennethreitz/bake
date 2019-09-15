# `bake`— Kinda like Bash & Make, combined.


I love using `Makefile`s for one-off tasks in projects. The problem with doing this, is you can't use familiar bash–isms when doing so, as GNU Make doesn't use the familiar Bash sytnax. This project seeks to bridge these works.

**WORK IN PROGRESS**

```text
$ bake -h
Usage: bake [OPTIONS] [TASK] [ARGUMENTS]...

  bake — the familiar Bash/Make hybrid.

Options:
  -b, --bakefile PATH
  -l, --list               Lists available tasks from Bakefile.
  --shellcheck
  --whitelist TEXT
  --yes                    Set prompts to yes.
  -x, --fail               Fail immediately, if any task fails.
  --secure                 Ignore parent shell's environment variables.
  --no-color               Disable colors.
  -s, --silent             Reduce output.
  -j, --environ-json TEXT  environment variables, in JSON format.
  -h, --help               Show this message and exit.
```

![bake icon](https://github.com/kennethreitz/bake/blob/master/ext/bake.png?raw=true)


## Example `Bakefile`, for use with `bake`:

```make
full-install: system-deps install
install: node-deps python-deps
format:
    black .

argv-example:
    set -eux
    echo "HELLO, $WHO"
    echo $@

dangerous-example: @confirm:secure
    # This will make you do a
    # simple math question before proceeding.
    rm -fr *

python-deps:
    pipenv install
node-deps:
    yarn install

system-deps:
    brew install pipenv
```

**Running the above `Bakefile`**:

```text
$ bake --silent format
All done! ✨ 🍰 ✨
7 files left unchanged.


$ bake install
 · Executing 'node-deps':
yarn install v1.17.3
[1/4] 🔍  Resolving packages...
success Already up-to-date.
✨  Done in 0.03s.
 · Executing 'python-deps':
Installing dependencies from Pipfile.lock (2ee04c)…
  🐍   ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 8/8 — 00:00:01
 · Done.


$ bake argv-example WHO=you 1 2 3
 · Executing 'argv-example':
++ echo 'HELLO, you'
HELLO, you
++ echo '[1,' 2, '3]'
[1, 2, 3]
 · Done.


$ bake dangerous-example
· Executing '@confirm:secure' ·
   What is 10 times 2?: 7
· Aborted.
```

## Features

- a `Bakefile`, which looks and feels like the good parts of a `Makefile`.
- except, you can write real bash code!
- Unlike `Makefile`, either tabs or 4 spaces can be used.

## Installation

Install `bake` via:

    $ brew install kennethreitz/-/bake --HEAD
