# `bake`— Kinda like Bash & Make, combined.

I love using `Makefile`s for one-off tasks in projects. The problem with doing this, is you can't use familiar bash–isms when doing so, as GNU Make doesn't use the familiar Bash sytnax. This project seeks to bridge these works.

## Example `Bakefile`, for use with `bake`:

To be improved:

```make
echo:
    cat Bakefile
format:
    black .

full-install: system-deps install
install: node-deps python-deps

python-deps:
    # Example of comments
    pipenv install
node-deps:
    yarn install

system-deps:
    brew install pipenv
```

## Features

- a `Bakefile`
Unlike `Makefile`, either tabs or 4 spaces can be used.

## Installation

Install `bake` via:

    $ brew install kennethreitz/-/bake --HEAD
