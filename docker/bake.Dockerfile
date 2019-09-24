FROM kennethreitz/bake:core

ENV BAKEFILE_PATH /app/Bakefile

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
