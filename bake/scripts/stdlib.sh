#!/usr/bin/env bash

if [ "$(uname)" == Darwin ]; then
    bashf-sed() { command sed -l "$@"; }
else
    bashf-sed() { command sed -u "$@"; }
fi

# Syntax sugar.
bashf-indent() {
    bashf-sed "s/^/    /"
}

# ---------------------
# From: https://github.com/heroku/buildpack-stdlib/blob/master/stdlib.sh

# Buildpack Steps.
puts_step() {
    if [[ "$*" == "-" ]]; then
        read -r output
    else
        output=$*
    fi
    echo -e "\\e[1m\\e[36m=== $output\\e[0m"
    unset output
}

# Buildpack Error.
puts_error() {
    if [[ "$*" == "-" ]]; then
        read -r output
    else
        output=$*
    fi
    echo -e "\\e[1m\\e[31m=!= $output\\e[0m"
}

# Buildpack Warning.
puts_warn() {
    if [[ "$*" == "-" ]]; then
        read -r output
    else
        output=$*
    fi
    echo -e "\\e[1m\\e[33m=!= $output\\e[0m"
}
