#!/usr/bin/env bash

if [ "$(uname)" == Darwin ]; then
    bake:sed() { command sed -l "$@"; }
else
    bake:sed() { command sed -u "$@"; }
fi

# Syntax sugar.
bake:indent() {
    bake:sed "s/^/   /"
}

# ---------------------
# From: https://github.com/heroku/buildpack-stdlib/blob/master/stdlib.sh

bake:step() {
    if [[ "$*" == "-" ]]; then
        read -r output
    else
        output=$*
    fi
    echo -e "\\e[1m\\e[36m=== $output\\e[0m"
    unset output
}

bake:error() {
    if [[ "$*" == "-" ]]; then
        read -r output
    else
        output=$*
    fi
    echo -e "\\e[1m\\e[31m=!= $output\\e[0m"
}

bake:warn() {
    if [[ "$*" == "-" ]]; then
        read -r output
    else
        output=$*
    fi
    echo -e "\\e[1m\\e[33m=!= $output\\e[0m"
}

# bake:eng_join() {
#     for word in ${@}; do
#         echo $word
#     end


# }
