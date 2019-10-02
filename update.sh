#!/bin/bash

rm ./js/songdata.js
echo var data = [ >> tmp.json

for i in ./songs/*.json
do
	cat "$i" >> tmp.json
	echo , >> tmp.json
done

cat tmp.json | sed '$ s/.$//' >> ./js/songdata.js

rm tmp.json

echo ]\; >> ./js/songdata.js

cat ./js/songdata_add.js >> ./js/songdata.js
