#!/bin/bash

# Билд для публикации каждого пакета в папке packages.
# Так же публикует root пакет.

# выхожу, если одна из команд завершилась неудачно
set -e

# Читаем флаги (-f = forcePublishAll)
force=false

# Process command-line options
while getopts ":f" opt; do
  case ${opt} in
    f )
      force=true
      ;;
    \? )
      echo "Invalid option: -$OPTARG" >&2
      exit 1
      ;;
  esac
done
shift $((OPTIND -1))



# беру текущую git ветку и кладу ее значение в current_branch
current_branch=$(git rev-parse --abbrev-ref HEAD)

# если текущая ветка != main, выходим т.к. публиковать можно только с main ветки
if [ "$current_branch" != "main" ]; then
    echo "Error: Current branch is not 'main'. Exiting script."
    exit 1
fi

# поднимаю версию во всех подпакетах (если есть изменения)
if [ "$force" = true ]; then
  lerna version --force-publish --no-push --no-commit-hooks --no-git-tag-version
else
  lerna version --no-push --no-commit-hooks --no-git-tag-version
fi

# сборка всех пакетов
yarn build

# commit new tag (получаю новую версию рут пакета)
NEW_ROOT_PACKAGE_VERSION=$(node -p "require('./packages/root/package.json').version")

#сборка всех пакетов
yarn build

# Commit new tag. Создаю тег для гита (тег = версия рут пакета)
git commit -a -m "Publish root package: v${NEW_ROOT_PACKAGE_VERSION}"

# публикую все пакеты, включая рут (если есть изменения)
lerna publish from-package --no-push --no-commit-hooks


# обновляю версию в корневом пакете, генерирую CHANGELOG.MD, делаю коммит, создаю git-tag
# npm release --release-as $RELEASE_TYPE
git tag -a "v${NEW_ROOT_PACKAGE_VERSION}" -m "v${NEW_ROOT_PACKAGE_VERSION}" && git push --tags && git push origin main

