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
