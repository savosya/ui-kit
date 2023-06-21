#!/bin/bash

#CONCURRENCY=${BUILD_CONCURRENCY:=10}

## собираю все подпакеты с компонентами
#lerna exec --concurrency $CONCURRENCY \
#    -- $(pwd)/bin/rollup.sh

# копирую package.json в сборку корневого пакета
cp package.json build/package.json

# делаю корневой пакет публичным
yarn json -f build/package.json -I -e "delete this.private" -e "delete this.workspaces"