# ☿ `bake`— the _strangely familiar_ task runner.


I love using `Makefile` for one-off **tasks** in projects. 

The problem with doing this is that you can't use familiar bash–isms when doing so, as **GNU Make** doesn't use the familiar **Bash** syntax, nor does it allow for simple ad–hoc use of abritrary scripting languages (e.g. **Python**). 

This project seeks to bridge all of these worlds into a single entrypoint — ideal for cross–language repositories.

![vanity image](https://github.com/kennethreitz/bake/blob/master/ext/img.jpg?raw=true)

-----------------

```console
$ bake -h
Usage: bake [OPTIONS] [TASK] [ARGUMENTS]...

  bake — the strangely familiar task–runner.

Options:
  -b, --bakefile PATH      The Bakefile to use.
  -l, --list               Lists available tasks.
  --allow TEXT             Whitelist an environment variable for use.
  --yes                    Set medium–security prompts to yes.
  -c, --continue           Continue, if a task fails.
  --insecure               Inherit parent shell's environment variables.
  -s, --silent             Reduce output.
  -e, --environ-json TEXT  Provide environment variables via JSON.
  -j, --json               Output in JSON format (stdout).
  -h, --help               Show this message and exit.
```

----------------

### Features 'n Things

- A `Bakefile`, which looks and feels like the good parts of a `Makefile`.
- Except, you can write real bash code!
- Environment variables are explicitly passed or whitelisted (allowed), not inherinted from the parent shell.
- Unlike `Makefile`, either tabs or 4 spaces can be used.
- Tasks can be run safely and reliably. Rest assured that scripts are executed from the project root (e.g. location of the `Bakefile`).
- See [advanced example](https://github.com/kennethreitz/bake#advanced-usage-sample) for further, juicy, details.

---------------

## `$ cat Bakefile`

```make
full-install: system-deps install
install: node-deps python-deps
format:
    black .

python-deps:
    pipenv install
node-deps:
    yarn install
system-deps: @confirm
    brew install pipenv
    
python-example:
    #!/usr/bin/env python
    import os
    import sys

    print(os.environ['KEY'])
    print(sys.argv[1:])

dangerous-example: @confirm:secure
    # <insert deploy to production here>
    exit 0
```


### `$ bake install`

```console
 + Executing 'node-deps':
yarn install v1.17.3
[1/4] 🔍  Resolving packages...
success Already up-to-date.
✨  Done in 0.03s.
 + Executing 'python-deps':
Installing dependencies from Pipfile.lock (2ee04c)…
  🐍   ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 8/8 — 00:00:01
 + Done.
```


### `$ bake python-example KEY=VALUE 1 2 3`

```console
 + Executing 'python-argv':
   VALUE
   ['1', '2', '3']
 + Done.
 ```

### `$ bake dangerous-example`

```console
+ Executing '@confirm:secure' ·
   What is 10 times 2?: 7
Aborted.
```

## Advanced Usage Sample

![advanced screenshot](https://github.com/kennethreitz/bake/blob/master/ext/screenshot.png?raw=true)

Fancy, eh?

## Simple Installation of `bake` (**MacOS**):

**WORK IN PROGRESS**

```console
$ brew install kennethreitz/-/bake --HEAD
```

<!-- ![bake icon](https://github.com/kennethreitz/bake/blob/master/ext/bake.png?raw=true) -->

---------------------

<p align="center">
This repository has been brought to you, with much joy, by <a href="https://kennethreitz.org/">Kenneth Reitz</a>.
</p>

![kr soul icon](https://github.com/kennethreitz/bake/blob/master/ext/tattoo-design.jpg?raw=true)

<p align="center">
<em>As above, so below.
</p>
