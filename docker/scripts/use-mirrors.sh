#!/usr/bin/env bash

SOURCES_LIST='/etc/apt/sources.list'


# deb http://snapshot.debian.org/archive/debian/20190910T000000Z buster main
echo 'deb https://mirror.math.princeton.edu/pub/debian buster main' > ${SOURCES_LIST}
# deb http://snapshot.debian.org/archive/debian-security/20190910T000000Z buster/updates main
echo 'deb http://security.debian.org/debian-security buster/updates main' >> ${SOURCES_LIST}
# deb http://snapshot.debian.org/archive/debian/20190910T000000Z buster-updates main
echo 'deb http://deb.debian.org/debian buster-updates main' >> ${SOURCES_LIST}
