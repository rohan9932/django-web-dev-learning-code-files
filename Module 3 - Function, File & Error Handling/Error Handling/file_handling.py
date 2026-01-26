import os
import pathlib
# temp_file = open("xyz.txt", "a") # args: file_path, opening_mode
#
# # content = temp_file.read()
# # print(content)
#
# temp_file.write("\nOnce upon a time there was a person.")
#
# temp_file.close()

#We could do also like this
with open("xyz.txt", "r") as f: #relative path -> used in almost all the cases
    print(f) #file details
    print(f.read())

lines = ["\nHello, My name is Rohan.\n", "Currently studying CSE at AUST.\n"]
with open("xyz.txt", "a") as f:
    f.writelines(lines) #writing all the strings in list

if os.path.exists("hello.txt"):
    print("File exists.")
else:
    print("File doesn't exist.")

file_path = pathlib.Path("xyz.txt")
if file_path.exists():
    print("File exists.")
print(os.path.abspath("xyz.txt"))
print(os.path.getsize("xyz.txt")) # in bytes