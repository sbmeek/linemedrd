ARG VARIANT="14.17.1-alpine3.13"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}
RUN apt-get update \
  && apt-get -y install --no-install-recommends libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb