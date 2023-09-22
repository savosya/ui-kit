#!/bin/bash

# Дает доступ к запуску скриптов.

chmod +x \
  bin/copy-folder.sh \
  bin/prepare-root-package-json.sh \
  bin/create-root-exporter-file.sh \
  bin/root-symlinks-resolver.sh \
  bin/create-root-build.sh

echo 'Successfully prepared.'