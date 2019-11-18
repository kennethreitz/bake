A Few Terminal Tricks
================================

Viewing the Task Names
--------------------------

Running `bake` on the terminal will bring up all the tasks inside the `Bakefile`.

.. code-block:: bash

    $ bake

It could show you something like this:

.. code-block:: bash

    - task1
    - task2…
        + task2/subtask1.
    - task2/subtask1
    - task3/subtask1
    - task4/subtask1
    - task5/subtask1
    - task6/subtask1
    - task6/subtask2
    - task6…
        + task6/subtask1 & task6/subtask2.


Specifiying Task Levels
-----------------------------

You can also specify the task level up to which you want to see your task list on the terminal. To do this, run:

.. code-block:: bash

    $ bake --levels 2

This should show more nested subtasks (if there are any).

.. code-block:: bash
    - task1
 - task2…
    + task2/subtask1 & task2//subtask2.
 - task2/subtask1
 - task3/subtask1
 - task4/subtask1
 - task5/subtask1
 - task6/subtask1
 - task6/subtask2
 - task6…
    + task6/subtask1 & task6/subtask2.
Note: 1 more tasks are available. Please use $ bake --levels 3 to see more.


Viewing The Tasks as JSON
------------------------------

To view the tasks as JSON upto a specific level, run:

.. code-block:: bash

    $ bake --json --levels 2

The output should look something like this:

.. code-block:: bash

    {
    "tasks": {
        "task1": {
        "depends_on": []
        },
        "task2": {
        "depends_on": [
            "task2/subtask1",
            "task2//subtask2"
        ]
        },
        "task2/subtask1": {
        "depends_on": []

        ....
