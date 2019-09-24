FROM python:3-slim

# Tell Ubuntu to not prompt during apt installs.
ARG DEBIAN_FRONTEND='noninteractive'

# -- Setup mirrors, for faster downloads (main sources can be *very* slow sometimes).
COPY ./docker/scripts/use-mirrors.sh /opt/use-mirrors.sh
RUN set -ex && \
    /opt/use-mirrors.sh && \
    rm -fr /opt/use-mirrors.sh

# -- System dependencies + common utilities.
RUN pip3 install pipenv --quiet --no-cache 2>/dev/null

# -- Home directory.
RUN set -ex && \
    mkdir /app

WORKDIR /app

ENTRYPOINT [ "bash" ]
