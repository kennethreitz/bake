FROM ubuntu:19.04

# Tell Ubuntu to not prompt during apt installs.
ENV DEBIAN_FRONTEND 'noninteractive'

# -- Setup mirrors, for faster downloads (main sources can be *very* slow sometimes).
COPY ./docker/scripts/use-mirrors.sh /opt/use-mirrors.sh
RUN set -ex && \
    /opt/use-mirrors.sh && \
    rm -fr /opt/use-mirrors.sh

# -- System dependencies + common utilities.
RUN set -ex && \
    apt-get update -qq && \
    apt-get upgrade -y -qq && \
    apt-get install curl python3 git python3-distutils  -y -qq >/dev/null && \
    apt-get clean -y -qq && \
    apt-get autoclean -y -qq

# -- Install pip.
RUN set -ex && curl -s --retry 3 https://bootstrap.pypa.io/get-pip.py > /tmp/get-pip.py && \
    python3 /tmp/get-pip.py > /dev/null && rm -fr /tmp/get-pip.py

# -- Install hconfig.
RUN set -ex && \
    pip3 install pipenv --quiet --no-cache 2>/dev/null

# -- Clean up.
RUN set -ex && \
    apt-get clean -y -qq && apt-get autoremove -y -qq && apt-get autoclean -y -qq

# -- Home directory.
RUN set -ex && \
    mkdir /app

WORKDIR /app

ENTRYPOINT [ "bash" ]
