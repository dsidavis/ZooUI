#!/bin/bash
echo "Content-type: text/html";
echo "";


DIR=`echo $HTTP_REFERER | sed -e 's|/index.html$||'  | sed -e 's|.*/||' `

BASE_DIR=/var/www/html/ZooUI_files
OUT=${DIR}.out
OUT_DIR=${BASE_DIR}/${DIR}
OUT=${OUT_DIR}/currentResults.js

# cp $OUT ${OUT}.bak

echo "var currentResults = " > ${OUT}
if ! test "$?" ; then
    echo "Problem writing the results to ${OUT}"
fi    
cat >> ${OUT}
echo ";" >> ${OUT}

( cd $BASE_DIR ; git add $OUT ; git commit -m "update") > /dev/null

Rscript -e "source('R/cgi_js.R'); update(\"${OUT_DIR}\")" > /dev/null 2>&1


#echo "dir = $DIR"
echo "Stored results for $DIR in $OUT"

#env


