def test_confirm(bake_i):
    c = bake_i("kinda-dangerous", fixture="2", block=False)
    c.expect(":", timeout=0.5)
    c.send("N\n")
    c.block()
    assert "Aborted!" in c.err


def test_confirm_secure(bake_i):
    c = bake_i("really-dangerous", fixture="2", block=False)
    c.expect(":", timeout=0.5)
    c.send("4222\n")
    c.block()
    assert "Wrong answer!" in c.err


def test_confirm_dep(bake_i):
    c = bake_i("mostly-harmless", fixture="2", block=False)
    c.expect(":", timeout=0.5)
    c.send("N\n")
    c.block()
    assert "Aborted!" in c.err


def test_confirm_secure(bake_i):
    c = bake_i("mostly-dangerous", fixture="2", block=False)
    c.expect(":", timeout=0.5)
    c.send("4222\n")
    c.block()
    assert "Wrong answer!" in c.err
