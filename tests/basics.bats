#!/usr/bin/env bats

export BAKEFILE=basics.Bakefile

@test "bake --h" {
    run bake --help
    [ "${lines[0]}" = "Usage:  [OPTIONS] [TASK] [ARGUMENTS]..." ]
}

@test "bake --help" {
    run bake --help
    [ "${lines[0]}" = "Usage:  [OPTIONS] [TASK] [ARGUMENTS]..." ]
}

@test "bake --json" {
    run bake --json
    [ "${#lines[@]}" -eq 23 ]
}

@test "bake --json --levels 0" {
    run bake --json --levels 0
    [ "${#lines[@]}" -eq 3 ]
}

@test "bake --levels 0" {
    run bake --levels 0
    [ "${lines[0]}" = "" ]
}

@test "bake --levels 1" {
    run bake --levels 1
    [ "${#lines[@]}" -eq 4 ]
}

@test "bake --levels 2" {
    run bake --levels 3
    [ "${#lines[@]}" -eq 10 ]
}

@test "bake --levels 3" {
    run bake --levels 3
    [ "${#lines[@]}" -eq 10 ]
}

@test "bake --levels 4" {
    run bake --levels 4
    [ "${#lines[@]}" -eq 10 ]
}


@test "bake fails on 'exit 1'" {
    run bake fail
    [ "${status}" -eq 1 ]
}

@test "bake fails on sub–task 'exit 1'" {
    run bake deps/fail
    [ "${status}" -eq 1 ]
}

@test "bake runs tasks" {
    run bake -b basics.Bakefile echo
    [ "${status}" -eq 0 ]
}

@test "bake runs sub-tasks" {
    run bake echo/dep
    [ "${status}" -eq 0 ]
}

@test "bake --no-deps" {
    run bake deps/fail --no-deps
    [ "${status}" -eq 0 ]
}
