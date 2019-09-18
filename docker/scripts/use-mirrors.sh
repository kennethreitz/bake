#!/usr/bin/env bash

SOURCES_LIST='/etc/apt/sources.list'
PREVIOUS_SOURCES=$(cat $SOURCES_LIST)

perl -pe '/(http|https):\/\/(.*?)(\/|$)/ && s/$2/mirror.math.princeton.edu\/pub\//g' <<< "$PREVIOUS_SOURCES" > "$SOURCES_LIST"
