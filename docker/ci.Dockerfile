FROM kennethreitz/bake:core

ENV TERM xterm

# -- Install CI deps.
RUN set -ex && \
    apt-get update -qq && \
    apt-get install expect npm docker.io -y -qq >/dev/null && \
    apt-get clean -y -qq && \
    apt-get autoclean -y -qq && \
    curl -fLSs https://circle.ci/cli --retry 3 | bash && \
    npm install -g bats > /dev/null && \
    pip3 install bake-cli --upgrade --quiet > /dev/null && \
    apt remove --autoremove --purge -y curl && \
    apt-get clean -y -qq && \
    apt-get autoclean -y -qq && \
    rm -fr /var/lib/apt/lists/*

# -- Install bats.
RUN set -ex && npm install -g bats > /dev/null

# -- Install latest Bake.
RUN set -ex && \
    pip3 install bake-cli --upgrade --quiet > /dev/null

# -- Really slim down that image.
RUN set -ex && \
    rm -fr /var/lib/apt/lists

ENTRYPOINT [ "bash" ]
