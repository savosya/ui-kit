#!/bin/bash

# выхожу, если одна из команд завершилась неудачно
set -e

# поднимаю версию во всех подпакетах
lerna version --no-push --no-commit-hooks
# собираю корневой проект
yarn build
# публикую все подпакеты
lerna publish from-package

# публикую корневой проект
#cd build

#npm publish --no-git-tag-version
#npm publish --userconfig "../.npmrc" --tag

options=("patch" "minor" "major")
echo "Новая версия рут пакета: "
select ROOT_OPT in "${options[@]}"
do
    case $ROOT_OPT in
        "patch")break;;
        "minor")break;;
        "major")break;;
        *)echo "Invalid option";;
    esac
done

echo $ROOT_OPT

npm publish build

#cd ../
## обновляю версию в корневом пакете, генерирую CHANGELOG.MD, делаю коммит, создаю git-tag
#npm release --release-as $RELEASE_TYPE
## отправляю изменения на github
#git push --follow-tags



