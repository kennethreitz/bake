FROM kennethreitz/bake:core

ENV TERM xterm

# -- Install CI deps.
RUN set -ex && \
    apt-get update -qq && \
    apt-get upgrade -y -qq && \
    apt-get install expect npm -y -qq >/dev/null && \
    apt-get clean -y -qq && \
    apt-get autoclean -y -qq

# -- Install bats.
RUN set -ex && npm install -g bats > /dev/null

# -- Install latest Bake.
RUN set -ex && \
    pip3 install bake-cli --upgrade --quiet > /dev/null

# -- Really slim down that image.
RUN set -ex && \
    rm -fr /var/lib/apt/lists

ENTRYPOINT [ "bash" ]
