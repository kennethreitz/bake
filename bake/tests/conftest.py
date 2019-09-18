import os

os.environ["PYTHONUNBUFFERED"] = "1"
os.environ.pop("BAKEFILE_PATH", "")

import pytest
import delegator


@pytest.fixture
def bake():
    def run(*args, fixture="default", assert_ok=True, block=True):
        bakefile = os.path.join(
            os.path.dirname(__file__), "fixtures", f"{fixture}.Bakefile"
        )
        cmd = " ".join(["bake", "-b", bakefile] + list(args))
        print(f"$ {cmd}")

        c = delegator.run(cmd, block=block)

        if block and assert_ok:
            assert c.return_code == 0

        if block:

            print(c.out)
            print(c.err)

        return c

    return run


@pytest.fixture
def bake_i():
    def run(*args, fixture="default", assert_ok=True, block=True):
        bakefile = os.path.join(
            os.path.dirname(__file__), "fixtures", f"{fixture}.Bakefile"
        )
        cmd = " ".join(["bake", "-i", "-b", bakefile] + list(args))
        print(f"$ {cmd}")

        c = delegator.run(cmd, block=block)

        if block and assert_ok:
            assert c.return_code == 0

        if block:

            print(c.out)
            print(c.err)

        return c

    return run
