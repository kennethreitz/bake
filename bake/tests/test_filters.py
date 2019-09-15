def test_confirm(bake):
    c = bake("kinda-dangerous", fixture="2", block=False)
    # c.expect("?", "Y")
    # c.block()
    assert "kenneth" in c.out


def test_confirm_secure(bake):
    c = bake("kinda-dangerous", fixture="2", block=False)
    c.expect
