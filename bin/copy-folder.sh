#!/bin/bash

echo "Enter new package name:"
read new_package_name

cp -r tools/templates/_package-template packages/$new_package_name