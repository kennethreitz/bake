#!/usr/bin/env bats
export BAKEFILE=python.Bakefile
@test "python" {
    run bake --silent python
    [[ "${lines[0]}" == "not bash" ]]
}
