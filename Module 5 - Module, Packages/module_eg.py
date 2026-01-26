# ----------------- Method 1 ----------------#
# import math_utils as mu
#
#
# print("Hello World!")
#
# for i in range(0, 5):
#     print(i)
#
# print(mu.add(5, 10))

# # ----------------- Method 2 ----------------#
# from math_utils import subtract
# print(subtract(29, 15))


# import utils.hello
#
# utils.hello.say_hello("Rohan")

# from utils import hello # this runs the hello.py file from the utils folder
#
# hello.say_hello("Rahim")

import utils
utils.say_hello("Rohan")

print(__name__) # shows the current status of the file. here it's main as the code is run from here.