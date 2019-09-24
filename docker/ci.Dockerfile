FROM kennethreitz/bake:core

ENV TERM xterm

# -- Install CI deps.
RUN set -ex && \
    apt-get update -qq && \
    apt-get install expect npm docker.io libxml-perl --no-install-recommends -y -qq >/dev/null && \
    apt-get clean -y -qq && \
    apt-get autoclean -y -qq && \
    apt-get clean -y -qq && \
    apt-get autoclean -y -qq && \
    # -- Really slim down that image.
    rm -fr /var/lib/apt/lists/*

# -- Copy in tap2junit plugin.
COPY ./docker/scripts/tap2xml /usr/local/bin/tap2xml

# -- Install latest Bake.
RUN set -ex && \
    pip3 install bake-cli --upgrade --quiet > /dev/null

# -- Install BATS.
RUN set -ex && npm install -g bats > /dev/null

ENTRYPOINT [ "bash" ]
