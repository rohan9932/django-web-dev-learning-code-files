import random

print(dir(random)) # module as it has not __init__.py file
print(random.randint(0, 100))

# print(random.__doc__)

print(random.uniform(5, 10))

print(random.choice(['a', 'b', 'c', 'd', 'e']))

list_eg = [1, 3, 4, 5, 9]
random.shuffle(list_eg)
print(list_eg)

def gen_pin():
    print(f"Your pin is {random.randint(10000, 99999)}.")
    
gen_pin()