FROM python:3-slim

# Tell Ubuntu to not prompt during apt installs.
ARG DEBIAN_FRONTEND='noninteractive'

# -- System dependencies + common utilities.
RUN pip3 install pipenv --quiet --no-cache 2>/dev/null

# -- Home directory.
RUN set -ex && \
    mkdir /app

WORKDIR /app

ENTRYPOINT [ "bash" ]
