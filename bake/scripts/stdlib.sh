#!/usr/bin/env bash

# ----------
# - Colors -
# ----------

function bake_fg_color {
    BLACK="\033[0;30m"
    BLACK_BOLD="\033[1;30m"
    WHITE="\033[0;37m"
    WHITE_BOLD="\033[1;37m"
    RED="\033[0;31m"
    RED_BOLD="\033[1;31m"
    GREEN="\033[0;32m"
    GREEN_BOLD="\033[1;32m"
    YELLOW="\033[0;33m"
    YELLOW_BOLD="\033[1;33m"
    BLUE="\033[0;34m"
    BLUE_BOLD="\033[1;34m"
    PURPLE="\033[0;35m"
    PURPLE_BOLD="\033[1;35m"
    CYAN="\033[0;36m"
    CYAN_BOLD="\033[1;36m"
    NO_COLOR="\033[0m"
    
    CHOSEN_COLOR="${1}"
    ARGV_INPUT="${2}"
    
    COLOR="${!CHOSEN_COLOR}"
    
    if [ -z "$ARGV_INPUT" ]; then
        read -r INPUT
    else
        INPUT="$ARGV_INPUT"
    fi
    echo -e "${COLOR}${INPUT}${NO_COLOR}"
}

function bake_black {
    bake_fg_color 'BLACK' "$1"
}

function bake_white {
    bake_fg_color 'WHITE' "$1"
}

function bake_red {
    bake_fg_color 'RED' "$1"
}

function bake_green {
    bake_fg_color 'GREEN' "$1"
}

function bake_yellow {
    bake_fg_color 'YELLOW' "$1"
}

function bake_blue {
    bake_fg_color 'BLUE' "$1"
}

function bake_purple {
    bake_fg_color 'PURPLE' "$1"
}

function bake_cyan {
    bake_fg_color 'CYAN' "$1"
}

function red {
    bake_fg_color 'RED' "$1"
}

# ----------
# - Indent -
# ----------

function bake_indent {
    PIPE_CHAR="$1"
    
    if [ -z "$PIPE_CHAR" ]; then
        PIPE_CHAR="|"
    fi
    
    read -r INPUT
    echo "$INPUT" | sed >&2 "s/^/ ${PIPE_CHAR}  /"
    # echo 'hi'
}
