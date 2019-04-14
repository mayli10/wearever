import json
import os

def readJSON(filepath):
        with open(filepath, 'r') as fp:
                print("COMES HERE")
                data = json.load(fp)
                return (json.dumps(data))


