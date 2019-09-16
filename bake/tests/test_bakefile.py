def test_echo(bake):
    c = bake("echo", fixture="1")
    assert "kenneth" in c.out


def test_first_level_dep(bake):
    c = bake("needs-echo", fixture="1")
    assert "kenneth" in c.out


def test_second_level_dep(bake):
    c = bake("needs-needs", fixture="1")
    assert "kenneth" in c.out


def test_python_invocation(bake):
    c = bake("python", fixture="1")
    assert "wow" in c.out
