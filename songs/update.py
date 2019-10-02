import os

path = os.getcwd()

with os.scandir(path) as entryList:
    for entry in entryList:
        if entry.is_file():
            print(entry.name)

