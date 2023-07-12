#!/bin/bash

SEARCH="@savosya/savosya-myuikit-"
REPLACE="@savosya/savosya-myuikit/"

FILES=$(find build -type f -name "*.js")

for FILE in $FILES; do
  # Read the contents of the file into a variable
  CONTENTS=$(<"$FILE")

  # Replace the import statements in the variable
  CONTENTS="${CONTENTS//$SEARCH/$REPLACE}"

  # Write the modified contents back to the file
  echo "$CONTENTS" > "$FILE"
done