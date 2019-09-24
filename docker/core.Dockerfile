FROM python:3-slim-buster

# Tell Ubuntu to not prompt during apt installs.
ARG DEBIAN_FRONTEND='noninteractive'

# -- Setup mirrors, for faster downloads (main sources can be *very* slow sometimes).
COPY ./docker/scripts/use-mirrors.sh /opt/use-mirrors.sh
RUN set -ex && \
    /opt/use-mirrors.sh && \
    rm -fr /opt/use-mirrors.sh

# -- System dependencies + common utilities.
RUN set -ex && \
    apt-get update -qq && \
    apt-get upgrade -y -qq && \
    apt-get install curl git -y -qq --no-install-recommends >/dev/null && \
    apt-get clean -y -qq && \
    apt-get autoclean -y -qq

# -- Install Pipenv.
RUN set -ex && \
    pip3 install pipenv --quiet --no-cache 2>/dev/null

# -- Home directory.
RUN set -ex && \
    mkdir /app

WORKDIR /app

ENTRYPOINT [ "bash" ]
