#!/bin/bash

# выхожу, если одна из команд завершилась неудачно
set -e

VALID_VERSION_REGEX="^[0-9]+\.[0-9]+\.[0-9]+$"
CURRENT_ROOT_PACKAGE_VERSION=$(node -p "require('./package.json').version")

# Обновляем версию рут пакета
echo "Новая версия рут пакета (текущая: ${CURRENT_ROOT_PACKAGE_VERSION}):"
while true; do
  read -p "Введите новую версию: " NEW_ROOT_PACKAGE_VERSION
  if [[ $NEW_ROOT_PACKAGE_VERSION =~ $VALID_VERSION_REGEX ]]; then
    break
  else
    echo "Ошибка: Введенный номер версии не соответствует формату x.x.x"
  fi
done

json -I -f package.json -e "this.version=\"${NEW_ROOT_PACKAGE_VERSION}\""

## поднимаю версию во всех подпакетах
lerna version --no-push --no-commit-hooks
## собираю корневой проект
yarn build
## публикую все подпакеты
lerna publish from-package

# публикую корневой проект
npm publish --no-git-tag-version

cd build
npm publish
cd ../

## обновляю версию в корневом пакете, генерирую CHANGELOG.MD, делаю коммит, создаю git-tag
#npm release --release-as $RELEASE_TYPE
## отправляю изменения на github
git push --follow-tags



