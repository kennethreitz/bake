

<span align="center"><pre align="center"><img src="https://github.com/kennethreitz/bake/blob/master/ext/bake.png?raw=true" /></pre></span>

<p align="center"><code>$ <strong>bake</strong> — a s☿rangely familiar workflow utlity. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code></p>
<pre>

<p align="center"><small>~ under development ~&nbsp;&nbsp;</small></p>

<div align="left">
<code>$ <strong>cat Bakefile</strong>                                                $ <strong>bake install</strong>
<strong>install</strong>: install/node install/python                            + <strong>Executing install/node</strong>:
    echo 'All ready!'                                           |  yarn install v1.17.3
<strong>install/full</strong>: install/system install                            |  info No lockfile found.
<strong>install/python</strong>: @skip:key=Pipfile.lock                          |  [1/4] Resolving packages...
    pipenv install                                              |  [2/4] Fetching packages...
<strong>install/node</strong>: @skip:key=yarn.lock                               |  [3/4] Linking dependencies...
    yarn install                                                |  [4/4] Building fresh packages...
<strong>install/system</strong>: @confirm                                        |  success Saved lockfile.
    brew install pipenv yarn                                    |  Done in 0.05s.
                                                                + <strong>Executing install/python</strong>:
<strong>python/format</strong>:                                                  |  Installing dependencies from …
    black .                                                     + <strong>Executing install</strong>:
                                                                |  All ready!
<strong>utils/argv</strong>:                                                     + <strong>Done</strong>.
    set -u && echo "$HELLO: $@"                                 
                                                                Rinse and repeat…
<strong>utils/deploy</strong>: @confirm:secure                 
    exit 0</code>                                              
    </div>                                                     
</pre>
<p align="center"><small>~ <a href="https://github.com/kennethreitz/bake/blob/master/Bakefile">see <strong>bake</strong>'s own <code><strong>Bakefile</strong></code></a> ~&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small></p>

## What's in the oven?

<ul>
    <li>A <code>Bakefile</code>, which <strong>looks</strong> and <strong>feels</strong> like the good parts of a <code><strong>Makefile</strong></code>.</li>
    <li>Except, you can write real <code><strong>bash</strong></code> code!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Any and all syntax is accepted — no magic going on here. ;)</li>
<li>Unlike <code><strong>Makefile</strong></code>, you may utilize <code><strong>&nbsp;&nbsp;&nbsp;&nbsp;</strong></code> <strong>[</strong><code> 4 × <a href="https://unicode.org/cldr/utility/character.jsp?a=0020">U+0020</a> <em>a.k.a.</em> “spaces”</code><strong>]</strong> for indentation.</li>
    <li>Environment variables are explicitly passed or whitelisted (<code><strong>--allow</strong></code>), not inherited from the parent shell.</li>
<li>Tasks can be run safely and reliably. Rest assured that scripts are executed from the project root directory.</li>
<li>There are many other benefits to this design, that have yet to be expressed in this document.</li>
</ul>


------------------

### Automate Workflows — Bootstrap Development Environments — Commit The Tasks


I love using `Makefile` for one-off **tasks** in projects.

The problem with doing this is that you can't use familiar bash–isms when doing so, as **GNU Make** doesn't use the familiar **Bash** syntax, nor does it allow for simple ad–hoc use of arbitrary scripting languages (e.g. **Python**).


project seeks to bridge all of these worlds into a single entrypoint — ideal for cross–language repositories

-------------------

## Bootstraping `bake` — &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (for local development workflows)


#### **Various `*`nix Distributions** (Python 3.6+):

The primary installation method of `bake`, today, is via `pip`:

```console
$ pip3 install bake-cli
Collecting bake-cli
…
Successfully installed bake-cli-0.2.0 delegator.py-0.1.1 pexpect-4.7.0 ptyprocess-0.6.0
```


This will always work, but it will not be the default recommendation.

#### MacOS (Previously known as OS X)

Installation of `bake` will (soon) be very easy, with Homebrew. The formula needs a subtle adjustment — if you want to help, [here's the repo](http://github.com/kennethreitz/homebrew--)!

```console
$ brew install kennethreitz/-/bake
==> Installing bake from kennethreitz/-
…
🍺  /usr/local/Cellar/bake/19-09-16: 1,563 files, 16.7MB, built in 11 seconds
```

Homebrew will be the primary installation target of `bake`.

✨🍰✨

## Bootstraping `bake` — &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (for production workflows)

#### Containers! *e.g.* Docker.

You an also run `bake` via Docker! An official image has been made available [on DockerHub](https://cloud.docker.com/u/kennethreitz/repository/docker/kennethreitz/bake):

```console
$ docker run kennethreitz/bake                                                                                                                                                                       Wed Sep 18 10:11:01 2019
No Bakefile found!
Usage:  [OPTIONS] [TASK] [ARGUMENTS]...

 $ bake — the strangely familiar task–runner.

Options:
  -b, --bakefile PATH      The Bakefile to use.
  -l, --list               Lists available tasks (and their dependencies).
  -h, --help               Show this message and exit.
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

- **`Bakefile`** is expected to live at **`/app/Bakefile`**. 
- If you inherit from this image, **`ONBUILD`** directives will automatically copy your application code (build context) into the container, into **`/app`**.

**Bonus Points**: this image is also [available on the GitHub Package Registry](https://github.com/kennethreitz/bake/packages/24444) (beta).

---------------


### Team & Workflow Management

You can use `bake` to bootstrap your team's development environments, ensuring a smooth and optimal workflow & local development experience.

Here's an example, using the `Bakefile` provided above:

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

### Arguments & Parameters: Passing Values In

```console
$ bake utils/argv KEY=VALUES 1 2 3
 + Executing utils/argv:
 |  VALUES: 1 2 3
 + Done.
 ```

### (Optional) Non-Deterministic Confirmation Dialouges

```console
$ bake utils/deploy
   What is 10 times 2?: 7
Aborted.
```

---------------------


### Community / Contrib

- [Visual Studio Code Extension](https://marketplace.visualstudio.com/items?itemName=kennethreitz.bake) — highlights `Bakefile`— adequately.

----------------------

<p>&nbsp;</p>

<p align="center">
    This open source software has been designed, for <strong>you</strong>, with much joy, by the hands of:
</p>

<p>&nbsp;</p>

<p align="center">
        <a href="https://kennethreitz.org/" rel="nofollow"><img src="https://raw.githubusercontent.com/psf/requests/master/ext/kr.png" align="center" style="max-width:100%;"></a>
</p>

<p>&nbsp;</p>

<p align="center">
    <large>☿</large>
</p>
