#!/usr/bin/env bats

declare -a COLORS=('white', 'red', 'green', 'blue', 'cyan', 'purple', 'magenta')

@test "$(red red) --help" {
    run red --help
    [ "${lines[0]}" = "Usage: red [OPTIONS] [S]" ]
}

@test "$(red red) \${s}" {
    run red test
    [[ "${lines[0]}" == *"test"* ]]
}

@test "echo \${s} | $(red red)" {
    output=$(echo test | red)
    [[ "$output" == *"test"* ]]
}


@test "$(red red) --fg \${COLOR}" {
    for COLOR in "${COLORS[@]}"; do
        output=$(echo test | red --fg ${COLOR} )
        [[ "$output" == *"test"* ]]
    done
}

@test "$(red red) --fg \${COLOR} --bold" {
    for COLOR in "${COLORS[@]}"; do
        output=$(echo test | red --fg ${COLOR} --bold)
        [[ "$output" == *"test"* ]]
    done
}

@test "$(red red) --bg \${COLOR}" {
    for COLOR in "${COLORS[@]}"; do
        output=$(echo test | red --bg ${COLOR} )
        [[ "$output" == *"test"* ]]
    done
}

@test "$(red red) --bg \${COLOR} --bold" {
    for COLOR in "${COLORS[@]}"; do
        output=$(echo test | red --bg ${COLOR} --bold)
        [[ "$output" == *"test"* ]]
    done
}


@test "$(red notred --fg blue) \${s}" {
    run notred test
    [[ "${lines[0]}" == "test" ]]
}

@test "$(red red) \${s} | $(red notred --fg blue)" {
    output=$(red test | notred)
    [[ "$output" == *"test"* ]]
}

@test "which $(red red)" {
    run which red
    [ "${status}" -eq 0 ]
}

@test "which $(red notred --fg blue)" {
    run which notred
    [ "${status}" -eq 0 ]
}

@test "which $(red bake_indent --fg cyan)" {
    run which bake_indent
    [ "${status}" -eq 0 ]
}

@test "which $(red bake_step --fg cyan)" {
    run which bake_step
    [ "${status}" -eq 0 ]
}

@test "$(red bake_step --fg cyan) \${s}" {
    run bake_step --no-color 'Step 1'
    [[ "${lines[0]}" == " + Step 1: " ]]
}


@test "$(red bake_step --fg cyan) --help" {
    run bake_step --help
    [ "${lines[0]}" = "Usage: bake_step [OPTIONS] [S]" ]
}

@test "$(red bake_indent --fg cyan) --help" {
    run bake_indent --help
    [ "${lines[0]}" = "Usage: bake_indent [OPTIONS]" ]
}
