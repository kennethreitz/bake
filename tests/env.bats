export HELLO=WORLD


@test "env cache clear" {
    bake -b env.Bakefile --clear-envs env
}


@test "removal of environment untrusted variables" {
    run bake -b env.Bakefile env
    [[ "${output}" != *HELLO=WORLD* ]]
}


@test "allowance of environment untrusted variables" {
    run bake --allow HELLO
    run bake -b env.Bakefile env
    [[ "${output}" == *"WORLD"* ]]
}
