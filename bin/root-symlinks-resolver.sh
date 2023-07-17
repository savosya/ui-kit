#!/bin/bash

# Заменяет все импорты c @savosya/savosya-myuikit- на @savosya/savosya-myuikit/

SEARCH="@savosya/savosya-myuikit-"
REPLACE="@savosya/savosya-myuikit/"

# Поиск всех файлов с .js расширением в папке build (root-пакет)
FILES=$(find build -type f \( -name "*.js" -o -name "*.ts" \))

for FILE in $FILES; do
  # Записать содержимое файла в переменную
  CONTENTS=$(<"$FILE")

  # Произвести замену
  CONTENTS="${CONTENTS//$SEARCH/$REPLACE}"

  # Записать содержимое с заменой в файл
  echo "$CONTENTS" > "$FILE"
done

echo 'root-symlinks-resolver.sh finished...'
