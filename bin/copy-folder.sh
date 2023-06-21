#!/bin/bash

echo "Enter new package name:"
read new_package_name

cp -r packages/_package-template packages/$new_package_name