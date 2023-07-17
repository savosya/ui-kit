#!/bin/bash

# Создет index.js и index.d.ts для root пакета.
#
# Пример создаваемого файла (index.js):
# export { default as Button } from './button';
# export { default as Select } from './select';

set -e

OUTPUT_FILE="./build/index.ts"
LERNAROOT="./"

PACKAGES=$(ls packages)


for pkg in $PACKAGES; do
  CLEAN_PKG=$(echo $pkg | sed 's/@.*\///' | tr '/' '-')
  CAMEL_CASE_PKG=$(echo $CLEAN_PKG | tr '-' ' ' | awk '{ for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) substr($i,2); print }' | tr -d ' ')

  if [ "$CLEAN_PKG" != "variables" ] && [ "$CLEAN_PKG" != "utils" ] && [ "$CLEAN_PKG" != "hooks" ]; then
    echo "export * from './$CLEAN_PKG';" >> $OUTPUT_FILE
#    echo "export { default as ${CAMEL_CASE_PKG} } from './${CLEAN_PKG}';" >> $OUTPUT_FILE
  fi
done

# Компилирует index.ts с помощью ts и удаляет index.ts
tsc build/index.ts --declaration --declarationDir build --outDir build --forceConsistentCasingInFileNames --module es2020 --target es5 --skipLibCheck --moduleResolution node
rm -rf build/index.ts

echo 'create-root-exporter-file.sh finished... '
