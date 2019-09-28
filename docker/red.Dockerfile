FROM kennethreitz/bake:core

# -- Install latest Bake.
RUN set -ex && \
    pip3 install bake-cli --upgrade --quiet > /dev/null

# -- Really slim down that image.
RUN set -ex && \
    rm -fr /var/lib/apt/lists

ENTRYPOINT [ "red" ]
