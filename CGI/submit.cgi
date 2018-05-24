#!/bin/bash
echo "Content-type: text/html";
echo "";


DIR=`echo $HTTP_REFERER | sed -e 's|/ui.html$||'  | sed -e 's|.*/||' `

BASE_DIR=../ZooUI_files
OUT=${DIR}.out
OUT=${BASE_DIR}/${DIR}/currentResults.js

cp $OUT ${OUT}.bak

echo "var currentResults = " > ${OUT}
cat >> ${OUT}
echo ";" >> ${OUT}


#echo "dir = $DIR"
echo "Stored results for $DIR in $OUT"

#env


