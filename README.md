### Automate Workflows—Bootstrap Development Environments—Commit The Tasks (*i.e.* `git`) 


![vanity image](https://github.com/kennethreitz/bake/blob/master/ext/img.jpg?raw=true)


<span align="center">
<pre>
    <code>$ <strong>bake</strong></code><em>, n</em>:
    <em>the s☿rangely familiar task runner.</em>
</pre>
</span>

--------------------


I love using `Makefile` for one-off **tasks** in projects.

The problem with doing this is that you can't use familiar bash–isms when doing so, as **GNU Make** doesn't use the familiar **Bash** syntax, nor does it allow for simple ad–hoc use of arbitrary scripting languages (e.g. **Python**).

This project seeks to bridge all of these worlds into a single entrypoint — ideal for cross–language repositories.

----------------

<p>&nbsp;</p>
<p align="center"><strong>What's in the oven?</strong></p>
<p>&nbsp;</p>

- A `Bakefile`, which looks and feels like the good parts of a `Makefile`.
- Except, you can write real bash code!
- Environment variables are explicitly passed or whitelisted (allowed), not inherited from the parent shell.
- Unlike `Makefile`, either tabs or 4 spaces can be used.
- Tasks can be run safely and reliably. Rest assured that scripts are executed from the project root (e.g. location of the `Bakefile`).
- See [advanced example](https://github.com/kennethreitz/bake#advanced-usage-sample) for further, juicy, details.

<pre>
    <div align="left">
    <p></p>
<code>$ <strong>cat Bakefile</strong>                         $ <strong> bake install</strong>
<strong>install</strong>: install/node install/python           + Executing install/node:
    echo 'Your system is now setup for development!'            |  yarn install v1.17.3
<strong>install/full</strong>: install/system install           |  info No lockfile found.
<strong>install/python</strong>: @skip:key=Pipfile.lock         |  [1/4] Resolving packages...
    pipenv install                                              |  [2/4] Fetching packages...
<strong>install/node</strong>: @skip:key=yarn.lock              |  [3/4] Linking dependencies...
    yarn install                                                |  [4/4] Building fresh packages...
<strong>install/system</strong>: @confirm                       |  success Saved lockfile.
    brew install pipenv yarn                                    |  Done in 0.05s.
                                                                + Executing install/python:
<strong>python/format</strong>:                                 |  Installing dependencies from Pipfile.lock (f10bb0)…
    black .                                                     + Executing install:
                                                                |  Your system is now setup for development!
<strong>utils/argv</strong>:                                    + Done.
    set -u && echo "$HELLO: $@"                                 
                                                                Rinse and repeat…
<strong>utils/deploy</strong>: @confirm:secure                 
    exit 0</code>                                              
    </div>                                                     
                                                            
    <p align="center">                                         
This software has been designed for you, with much joy, 
by <a href="https://kennethreitz.org/">Kenneth Reitz</a>.  
   </p>
<p>&nbsp;</p>

</pre>

### Community / Contrib

- [Visual Studio Code Extension](https://marketplace.visualstudio.com/items?itemName=kennethreitz.bake) — highlights `Bakefile`— adequately.

------------------

## Installing `$ bake`


### **Various `*`nix Distributions** (Python 3.6+):

The primary installation method of `bake`, today, is via `pip`:

```console
$ pip3 install bake-cli
Collecting bake-cli
…
Successfully installed bake-cli-0.2.0 delegator.py-0.1.1 pexpect-4.7.0 ptyprocess-0.6.0
```

This will always work, but it will not be the default recommendation.

## MacOS (Previously known as OS X)

Installation of `bake` will (soon) be very easy, with Homebrew. The formula needs a subtle adjustment — if you want to help, [here's the repo](http://github.com/kennethreitz/homebrew--)!

```console
$ brew install kennethreitz/-/bake
==> Installing bake from kennethreitz/-
…
🍺  /usr/local/Cellar/bake/19-09-16: 1,563 files, 16.7MB, built in 11 seconds
```

Homebrew will be the primary installation target of `bake`.

✨🍰✨

## Containers! *e.g.* Docker.

You an also run `bake` via Docker! An official image has been made available:

```console
$ docker run kennethreitz/bake                                                                                                                                                                       Wed Sep 18 10:11:01 2019
No Bakefile found!
Usage:  [OPTIONS] [TASK] [ARGUMENTS]...

 $ bake — the strangely familiar task–runner.

Options:
  -b, --bakefile PATH      The Bakefile to use.
  -l, --list               Lists available tasks (and their dependencies).
  -h, --help               Show this message and exit.
  --shellcheck             Run shellcheck on Bakefile.
  --allow TEXT             Whitelist an environment variable for use.
  --no-deps                Do not run dependent tasks.
  --yes                    Set medium–security prompts to yes.
  --continue               Continue, if a task fails.
  -i, --interactive        Run in interactive mode.
  --insecure               Inherit parent shell's environment variables.
  -s, --silent             Reduce output.
  -e, --environ-json TEXT  Provide environment variables via JSON.
  -j, --json               Output in JSON format (stdout).
```

---------------




### Team & Workflow Management

```console
$ bake install
 + Executing install/node:
 |  yarn install v1.17.3
 |  info No lockfile found.
 |  [1/4] Resolving packages...
 |  [2/4] Fetching packages...
 |  [3/4] Linking dependencies...
 |  [4/4] Building fresh packages...
 |  success Saved lockfile.
 |  Done in 0.05s.
 + Executing install/python:
 |  Installing dependencies from Pipfile.lock (f10bb0)…
 + Executing install:
 + Done.
```

### Skip Steps, Automatically

Because we configured `yarn.lock` and `Pipfile.lock` as cache keys,
bake will automatically skip the configured steps— only running them
when the files are changed!

So, let's run that command again :)

```console
$ bake install
 + Skipping install/node:
 + Skipping install/python.
 + Executing install:
 + Done.
```

Neat, eh?

### Passing Values (Arguments & Parameters)

```console
$ bake utils/argv KEY=VALUE 1 2 3
 + Executing utils/argv:
 |  WORLD: 1 2 3
 + Done.
 ```

### Added Peace of Mind

```console
$ bake utils/deploy
   What is 10 times 2?: 7
Aborted.
```

## Advanced Usage Sample

![advanced screenshot](https://github.com/kennethreitz/bake/blob/master/ext/screenshot.png?raw=true)

Fancy, eh?

<!-- ![bake icon](https://github.com/kennethreitz/bake/blob/master/ext/bake.png?raw=true) -->

---------------------

<p align="center">
This repository has been brought to you, with much joy, by <a href="https://kennethreitz.org/">Kenneth Reitz</a>.
</p>

![kr soul icon](https://github.com/kennethreitz/bake/blob/master/ext/tattoo-design.jpg?raw=true)

<p align="center">
    <em>As above, so below.</em>
</p>
