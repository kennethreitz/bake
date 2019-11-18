.. Bake documentation master file, created by
   sphinx-quickstart on Fri Nov 15 16:18:46 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

**Bake**: The s☿rangely familiar workflow utility 🍳
=================================================

**Bake** helps you write task automation scripts like **GNU Make** but instead of fiddling with GNU Make's complicated rules and syntax, you get to do it in pure **Bash**. Just like Make's **Makefile** and **make** command, Bake has **Bakefile** and **bake** command.

In a typical project workflow, the `Bakefile` most often resides in the same directory as the other source files for the project. You can have many different `Bakefiles` on your machine at any one time. In fact, if you have a large project, you may choose to manage it using separate `Bakefiles` for different parts of the project. The combination of `bake` command, `Bakefile` and the familiar bash syntax provides a very powerful tool for managing projects and automating repetitive tasks. It can not only be used to control the compilation of source code, but also to prepare manual pages and to install the application into a target directory.


What's in the oven? 📦
------------------------

* A **Bakefile**, which looks and feels like the good parts of a **Makefile**.
* Except, you can write real `bash` code! (Any and all syntax is accepted — no magic going on here.)
* Unlike **Makefile**, you may utilize **[ 4 × U+0020 a.k.a. “spaces”]** for indentation.
* Environment variables are explicitly passed or whitelisted (--allow), not inherited from the parent shell.
* Tasks can be run safely and reliably. Rest assured that scripts are executed from the project root directory.
* There are many other benefits to this design, that have yet to be expressed in this document.

Table of Contents 📕
--------------------------
.. toctree::
    :maxdepth: 3
    :glob:

    files/installation
    files/basic_usage
    files/terminal_tricks


Indices & Tables ⚙️
----------------------

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
