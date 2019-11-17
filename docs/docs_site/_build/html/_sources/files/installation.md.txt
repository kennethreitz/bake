Installation
================

For Local Development
----------------------

-------------------------------------------
Various *nix Distributions (Python 3.6+)
-------------------------------------------


The primary installation method of `bake` , today, is via `pip` :

.. code-block:: bash

    $ pip3 install bake-cli


This will always work, but it will not be the default recommendation.

------------------------------------
MacOS (Previously known as OS X)
------------------------------------

Installation of bake will (soon) be very easy, with Homebrew. The formula needs a subtle adjustment — if you want to help, `here's the repo! <http://github.com/kennethreitz/homebrew-->`_

.. code-block:: bash

    $ brew install kennethreitz/-/bake



For Production Environment
---------------------------
You an also run `bake` via Docker! An official image has been made available on `DockerHub. <https://cloud.docker.com/u/kennethreitz/repository/docker/kennethreitz/bake:>`_


.. code-block:: bash

    $ docker run kennethreitz/bake

* Bakefile is expected to live at `/app/Bakefile`.
If you inherit from this image, ONBUILD directives will automatically copy your application code (build context) into the container, into /app.

* Bonus Points: this image is also available on the `GitHub Package Registry <https://github.com/kennethreitz/bake/packages/24444>`_ (beta).
