#!/bin/bash

echo "Название нового пакета:"
read new_package_name

cp -r tools/templates/_package-template packages/$new_package_name

echo "Компонент ${new_package_name} создан. Для завершения его настройки нужно:
  1. В package.json изменить поле name и добавить description. (Так же поправить скрипт test)
  2. Если ${new_package_name} имеет зависимость от других компонентов, то их нужно указать
     в поле references в tsconfig.json, например: "references": [{ "path": "../button" }]
"