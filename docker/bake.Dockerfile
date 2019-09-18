FROM kennethreitz/bake:core

ENV BAKEFILE_PATH /app/Bakefile

# -- Install Shellcheck.
RUN set -ex && \
    apt-get install shellcheck -y -qq && \
    apt-get clean -y -qq && \
    apt-get autoclean -y -qq

# -- Install latest Bake.
RUN set -ex && \
    pip3 install bake-cli --upgrade --quiet > /dev/null

# -- Really slim down that image.
RUN set -ex && \
    rm -fr /var/lib/apt/lists

# -- Copy Bakefile of depending Dockerfiles.
ONBUILD COPY ./Bakefile /app/Bakefile

# -- Copy the application over.
ONBUILD COPY . /app

ENTRYPOINT [ "bake" ]
