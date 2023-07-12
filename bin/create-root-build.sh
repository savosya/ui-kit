#!/bin/bash

# Создает готовый для публикации root пакет.


set -e
# Отчищаем старый рут пакет и все подпакеты
yarn clean

# Проходимся по каждому пакету в папке packages и запускаем в них команду build
lerna run build --skip-nx-cache --stream

# Подгатавливаем рут пакет: переносим туда package.json и модифицируем его
bin/build.sh

# Создаем index.js для удобного импорта из либы
bin/create-root-exporter-file.sh

# Резолвим симлинки для рутового пакета
bin/root-symlinks-resolver.sh

echo 'Build successfully built.'