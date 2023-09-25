#!/bin/bash


set -e

echo "Название нового пакета:"
read new_package_name

node cli/create-new-package.cjs --componentName="$new_package_name"

echo "Компонент успешно создан."
