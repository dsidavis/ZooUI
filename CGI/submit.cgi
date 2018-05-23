#!/bin/bash
echo "Content-type: text/html";
echo "";

DIR=`echo $HTTP_REFERER | sed -e 's|/ui.html$||'  | sed -e 's|.*/||' `

echo "var currentResults = " > ${DIR}.out
cat >> ${DIR}.out
echo ";" >> ${DIR}.out


#echo "dir = $DIR"
echo "Stored results for $DIR"

env


