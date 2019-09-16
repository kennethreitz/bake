def test_confirm(bake):
    c = bake("kinda-dangerous", fixture="2", block=False)
    c.expect(":", timeout=0.5)
    c.send("N\n")
    c.block()
    assert "Aborted!" in c.out


def test_confirm_secure(bake):
    c = bake("really-dangerous", fixture="2", block=False)
    c.expect(":", timeout=0.5)
    c.send("4222\n")
    c.block()
    assert "Aborted!" in c.out


def test_confirm_dep(bake):
    c = bake("mostly-harmless", fixture="2", block=False)
    c.expect(":", timeout=0.5)
    c.send("N\n")
    c.block()
    assert "Aborted!" in c.out


def test_confirm_secure(bake):
    c = bake("mostly-dangerous", fixture="2", block=False)
    c.expect(":", timeout=0.5)
    c.send("4222\n")
    c.block()
    assert "Aborted!" in c.out
