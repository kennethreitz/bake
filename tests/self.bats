#!/usr/bin/env bats
export BAKEFILE=self.Bakefile

@test "test echo" {
    run bake --silent echo
    [[ "${lines[0]}" == "42." ]]
}

@test "test subshell echo" {
    run bake --silent also-echo
    [[ "${lines[0]}" == "42." ]]
}
