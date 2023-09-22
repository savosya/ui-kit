#!/bin/bash

# Создет index.js и index.d.ts для root пакета.
#
# Пример создаваемого файла (index.js):
# export * from './badge';
# export { default as Badge } from './badge';
# export * from './button';
# export { default as Button } from './button';

set -e

OUTPUT_FILE="./build/index.ts"

PACKAGES=$(ls packages)


for pkg in $PACKAGES; do
  PGK_NAME=$(echo $pkg | sed 's/@.*\///' | tr '/' '-')
  CAMEL_CASE_PKG=$(echo $PGK_NAME | tr '-' ' ' | awk '{ for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) substr($i,2); print }' | tr -d ' ')

  echo $CAMEL_CASE_PKG

  if [ "$PGK_NAME" != "variables" ] && [ "$PGK_NAME" != "utils" ] && [ "$PGK_NAME" != "hooks" ]; then
    echo "export {$CAMEL_CASE_PKG} from './$PGK_NAME';" >> $OUTPUT_FILE
#    echo "export { default as ${CAMEL_CASE_PKG} } from './${PGK_NAME}';" >> $OUTPUT_FILE
  fi
done


#for pkg in $PACKAGES; do
#  PGK_NAME=$(echo $pkg | sed 's/@.*\///' | tr '/' '-')
#
#  if [ "$PGK_NAME" != "variables" ] && [ "$PGK_NAME" != "utils" ] && [ "$PGK_NAME" != "hooks" ]; then
#    if [ -f "packages/$PGK_NAME/src/index.ts" ]; then
#      echo "copy $PGK_NAME"
#      cat "packages/$PGK_NAME/src/index.ts" >> $OUTPUT_FILE
#    fi
#  fi
#done


# Компилирует index.ts с помощью ts и удаляет index.ts
tsc build/index.ts --declaration --declarationDir build --outDir build --forceConsistentCasingInFileNames --module es2020 --target es5 --skipLibCheck --moduleResolution node
rm -rf build/index.ts

echo 'create-root-exporter-file.sh finished... '
