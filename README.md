# `bashf`— Kinda like Make & Bash, combined.

I love using `Makefile`s for one-off tasks in projects. The problem with doing this, is you can't use familiar bash–isms when doing so, as GNU Make doesn't use the familiar Bash sytnax. This project seeks to bridge these works.

## Example `Bashfile`

To be improved:

    echo:
        cat Bashfile
    format:
        black .

    full-install: system-deps python-deps
    install: node-deps python-deps

    python-deps:
        # Example of comments
        pipenv install
    node-deps:
        yarn install

    system-deps:
        brew install pipenv

Unlike `Makefile`s, either tabs or 4 spaces can be used.

## Installation

Install `bashf` via:

    $ brew install kennethreitz/-/bashf --head
