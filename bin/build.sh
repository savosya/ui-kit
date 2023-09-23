#!/bin/bash

# Создает готовый для публикации root пакет.

set -e

# Читаем флаги (-c=cache | -s=stream)
cache=false
stream=false

# Process command-line options
while getopts ":sc" opt; do
  case ${opt} in
    c )
      cache=true
      ;;
    s )
      stream=true
      ;;
    \? )
      echo "Invalid option: -$OPTARG" >&2
      exit 1
      ;;
  esac
done
shift $((OPTIND -1))

# Отчищаем старый рут пакет и все подпакеты
yarn clean

# Проходимся по каждому пакету в папке packages и запускаем в них команду build

if [ "$cache" = true  ] && [ "$stream" = true  ]; then
  lerna run build --stream
elif [ "$cache" = true ] && [ "$stream" = false ]; then
  lerna run build
elif [ "$cache" = false ] && [ "$stream" = true ]; then
  lerna run build --skip-nx-cache --stream
else
  lerna run build --skip-nx-cache
fi

echo 'Build successfully built.'