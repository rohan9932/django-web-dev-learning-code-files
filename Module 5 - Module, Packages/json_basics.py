from datetime import datetime
import json

#* Json stands for JavaScript object notation. but it supports in almost all programming languages. It came for communicating
#* between languages.

# standard json format
# there can be either list, either dict or nested list/dict or mix is standard json format
# student = '{"name": "Rohan", "results": [3.78, 3.96],}'
# abc = '[1, 2, 3]'

student = {
    "name": "Rohan",
    "results": [3.78, 3.96],
    "vorti hoise": datetime.now(),
}

t_student = str(student) #Invalid Json as datetime is not list, dict or str format

print(t_student)
# ? to get rid of this type of situation we use json module

json_student = {
    "name": "Rohan",
    "results": [3.78, 3.96],
    "vorti hoise": datetime.now().strftime("%B %m, %Y"),
}

# j_student = json.dumps(student) # We are now bound to format as it will give error if the object isn't json supported
j_student = json.dumps(json_student) # serialization -> python obj to json
print(j_student)

p_student = json.loads(j_student) # loads the json and converts to python object (deserialization)
print(type(p_student))