@test "python" {
    run bake --silent -b python.Bakefile python
    [[ "${lines[0]}" == "not bash" ]]
}
