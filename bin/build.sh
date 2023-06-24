#!/bin/bash

# копирую package.json в сборку корневого пакета
cp package.json build/package.json

# делаю корневой пакет публичным
yarn json -f build/package.json -I -e "delete this.private" -e "delete this.workspaces"
