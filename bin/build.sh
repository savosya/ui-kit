#!/bin/bash

# Создает готовый для публикации root пакет.

set -e

# Отчищаем старый рут пакет и все подпакеты
yarn clean

# Проходимся по каждому пакету в папке packages и запускаем в них команду build
lerna run build --skip-nx-cache --stream

echo 'Build successfully built.'