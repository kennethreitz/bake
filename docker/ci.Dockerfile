FROM kennethreitz/bake:core

ENV TERM xterm

ARG DEBIAN_FRONTEND='noninteractive'

# -- Install CircleCI CLI.
RUN curl -fLSs https://circle.ci/cli --retry 3 | bash

# -- Install CI deps.
RUN set -ex && \
    apt-get update -qq && \
    apt-get upgrade -y -qq && \
    apt-get install curl && \
    apt-get install expect npm -y -qq >/dev/null && \
    apt-get clean -y -qq && \
    apt-get autoclean -y -qq && \
    npm install -g bats > /dev/null && \
    pip3 install bake-cli --upgrade --quiet > /dev/null && \
    apt remove --autoremove --purge -y curl && \
    rm -fr /var/lib/apt/lists/*

ENTRYPOINT [ "bash" ]
