@test "arguments don't work (set -u)" {
    run bake -b args.Bakefile argv
    [ "${status}" -eq 1 ]
}

@test "arguments do work [argv]" {
    run bake --silent -b args.Bakefile argv 1 2 KEY=VALUE 3
    [[ "${lines[0]}" == *"1 2 3"* ]]
}


@test "arguments do work [environ]" {
    run bake --silent -b args.Bakefile argv 1 2 KEY=VALUE 3
    [[ "${lines[1]}" == *"VALUE"* ]]
}
