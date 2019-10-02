#!/bin/bash

rm songdata.json
echo { >> tmp.json

for i in ./songs/*.json
do
	cat "$i" >> tmp.json
	echo , >> tmp.json
done

cat tmp.json | sed '$ s/.$//' >> songdata.json

rm tmp.json

echo } >> songdata.json
