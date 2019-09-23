
@test "skips clear" {
    bake -b cache.Bakefile --clear-skips
}

@test "cache runs" {
    run bake -b cache.Bakefile task
    [[ $output != *Skipping* ]]
}

@test "cache skips" {
    run bake -b cache.Bakefile task
    [[ $output == *Skipping* ]]
}

@test "skip skips" {
    run bake -b cache.Bakefile --no-deps task
    [[ $output != *Skipping* ]]
}
