#!/bin/bash

set -e

OUTPUT_FILE="./build/index.ts"
LERNAROOT="./"

PACKAGES=$(ls packages)


for pkg in $PACKAGES; do
  CLEAN_PKG=$(echo $pkg | sed 's/@.*\///' | tr '/' '-')
  CAMEL_CASE_PKG=$(echo $CLEAN_PKG | tr '-' ' ' | awk '{ for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) substr($i,2); print }' | tr -d ' ')

  if [ "$CLEAN_PKG" != "variables" ]; then
#    echo "export * from './$CLEAN_PKG';" >> $OUTPUT_FILE
    echo "export { default as ${CAMEL_CASE_PKG} } from './${CLEAN_PKG}';" >> $OUTPUT_FILE
  fi
done

tsc build/index.ts --strict

