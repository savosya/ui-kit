#!/bin/bash

set -e

OUTPUT_FILE="./build/index.ts"
LERNAROOT="./"

PACKAGES=$(ls packages)


for pkg in $PACKAGES; do
  # Use sed to remove the package scope and replace slashes with dashes
  CLEAN_PKG=$(echo $pkg | sed 's/@.*\///' | tr '/' '-')
  echo "export * from './$CLEAN_PKG';" >> $OUTPUT_FILE
done

tsc build/index.ts --strict

