#!/usr/bin/env bats
export BAKEFILE=env.Bakefile
export HELLO=WORLD


@test "env cache clear" {
    bake --clear-envs env
}


@test "removal of environment untrusted variables" {
    run bake env
    [[ "${output}" != *HELLO=WORLD* ]]
}


@test "allowance of environment untrusted variables" {
    run bake --allow HELLO
    run bake env
    [[ "${output}" == *"WORLD"* ]]
}
