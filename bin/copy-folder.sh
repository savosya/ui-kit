#!/bin/bash

echo "Название нового пакета:"
read new_package_name

cp -r tools/templates/_package-template packages/$new_package_name