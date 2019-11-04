#!/usr/bin/env bats
export BAKEFILE=ordering.Bakefile

@test "dependencies are resolved correctly" {
    run bake
    [[ "${status}" -eq 0 ]]
    [[ "${lines[0]}" == *"build…"* ]]
    [[ "${lines[1]}" == *"fetch/consul, fetch/s6-overlay, fetch, & build/stage."* ]]
}
