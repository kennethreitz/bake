timeout() {
    time=$1
    command="/bin/sh -c \"$2\""
    
    expect -c "set echo \"-noecho\"; set timeout $time; spawn -noecho $command; expect timeout { exit 0 } eof { exit 1 }"
    
}
export timeout
