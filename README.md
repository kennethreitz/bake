# `bake`— Kinda like Bash & Make, combined.


I love using `Makefile`s for one-off tasks in projects. The problem with doing this, is you can't use familiar bash–isms when doing so, as GNU Make doesn't use the familiar Bash sytnax. This project seeks to bridge these works.

**WORK IN PROGRESS**

![bake icon](https://github.com/kennethreitz/bake/blob/master/ext/bake.png?raw=true)


## Example `Bakefile`, for use with `bake`:

```make
echo:
    cat Bakefile
format:
    black .

full-install: system-deps install
install: node-deps python-deps


argv-example:
    set -eux
    echo "HELLO, $WHO"
    echo $@

dangerous-example: @confirm:secure
    rm -fr *

python-deps:
    # Example of comments
    pipenv install
node-deps:
    yarn install

system-deps:
    brew install pipenv
```

## Features

- a `Bakefile`, which looks and feels like the good parts of a `Makefile`.
- except, you can write real bash code!
- Unlike `Makefile`, either tabs or 4 spaces can be used.

## Installation

Install `bake` via:

    $ brew install kennethreitz/-/bake --HEAD
