#!/usr/bin/env bats
export BAKEFILE=include.Bakefile

@test "test include first file" {
    run bake --silent included1
    [[ "${lines[0]}" == "Included1" ]]
}

@test "test include second file" {
    run bake --silent included2
    [[ "${lines[0]}" == "Included2" ]]
}

@test "test include of a included file" {
    run bake --silent included3
    [[ "${lines[0]}" == "Included3" ]]
}

@test "test task with dependencies as includes" {
    run bake --silent include
    [[ "${lines[0]}" == "Included1" ]]
    [[ "${lines[1]}" == "Included2" ]]
    [[ "${lines[2]}" == "Included3" ]]
}
