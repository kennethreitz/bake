#!/usr/bin/env bats
export BAKEFILE=args.Bakefile

@test "arguments don't work (set -u)" {
    run bake argv
    [ "${status}" -eq 1 ]
}

@test "arguments do work [argv]" {
    run bake --silent argv 1 2 KEY=VALUE 3
    [[ "${lines[0]}" == *"1 2 3"* ]]
}


@test "arguments do work [environ]" {
    run bake --silent argv 1 2 KEY=VALUE 3
    [[ "${lines[1]}" == *"VALUE"* ]]
}
