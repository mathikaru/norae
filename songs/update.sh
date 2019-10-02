rm filenames.txt
ls | grep -v -e "filenames.txt" -e "update.sh" -e "format.json" > filenames.txt
