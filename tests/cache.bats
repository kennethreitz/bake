#!/usr/bin/env bats

export BAKEFILE=cache.Bakefile

@test "skips clear" {
    bake --clear-skips
}

@test "cache runs" {
    run bake task
    [[ $output != *Skipping* ]]
}

@test "cache skips" {
    run bake task
    [[ $output == *Skipping* ]]
}

@test "skip skips" {
    run bake --no-deps task
    [[ $output != *Skipping* ]]
}
