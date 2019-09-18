def test_echo(bake):
    c = bake("echo", fixture="1")
    assert "kenneth" in c.err


def test_first_level_dep(bake):
    c = bake("needs-echo", fixture="1")
    assert "kenneth" in c.err


def test_second_level_dep(bake):
    c = bake("needs-needs", fixture="1")
    assert "kenneth" in c.err


def test_python_invocation(bake):
    c = bake("python", fixture="1")
    assert "wow" in c.err
