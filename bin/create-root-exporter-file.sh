#!/bin/bash

set -e

OUTPUT_FILE="./build/index.ts"
LERNAROOT="./"

PACKAGES=$(ls packages)


for pkg in $PACKAGES; do
  CLEAN_PKG=$(echo $pkg | sed 's/@.*\///' | tr '/' '-')

  if [ "$CLEAN_PKG" != "variables" ]; then
    echo "export * from './$CLEAN_PKG';" >> $OUTPUT_FILE
  fi
done

tsc build/index.ts --strict

