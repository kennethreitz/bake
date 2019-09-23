#!/usr/bin/env bats

@test "bake --h" {
    run bake -b basics.Bakefile --help
    [ "${lines[0]}" = "Usage:  [OPTIONS] [TASK] [ARGUMENTS]..." ]
}

@test "bake --help" {
    run bake -b basics.Bakefile --help
    [ "${lines[0]}" = "Usage:  [OPTIONS] [TASK] [ARGUMENTS]..." ]
}

@test "bake --json" {
    run bake -b basics.Bakefile --json
    [ "${#lines[@]}" -eq 23 ]
}

@test "bake --json --levels 0" {
    run bake -b basics.Bakefile --json --levels 0
    [ "${#lines[@]}" -eq 3 ]
}

@test "bake --levels 0" {
    run bake -b basics.Bakefile --levels 0
    [ "${lines[0]}" = "" ]
}

@test "bake --levels 1" {
    run bake -b basics.Bakefile --levels 1
    [ "${#lines[@]}" -eq 4 ]
}

@test "bake --levels 2" {
    run bake -b basics.Bakefile --levels 3
    [ "${#lines[@]}" -eq 10 ]
}

@test "bake --levels 3" {
    run bake -b basics.Bakefile --levels 3
    [ "${#lines[@]}" -eq 10 ]
}

@test "bake --levels 4" {
    run bake -b basics.Bakefile --levels 4
    [ "${#lines[@]}" -eq 10 ]
}


@test "bake fails on 'exit 1'" {
    run bake -b basics.Bakefile fail
    [ "${status}" -eq 1 ]
}

@test "bake fails on sub–task 'exit 1'" {
    run bake -b basics.Bakefile deps/fail
    [ "${status}" -eq 1 ]
}

@test "bake runs tasks" {
    run bake -b basics.Bakefile echo
    [ "${status}" -eq 0 ]
}

@test "bake runs sub-tasks" {
    run bake -b basics.Bakefile echo/dep
    [ "${status}" -eq 0 ]
}

@test "bake --no-deps" {
    run bake -b basics.Bakefile deps/fail --no-deps
    [ "${status}" -eq 0 ]
}
