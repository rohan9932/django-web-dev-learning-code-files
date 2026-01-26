#---------------Built in Functions---------------#
#return funcs
a = input("Enter your name: ") #returns the name which we inputted in console
print(f"Your name is {a}") #just prints, not returns anything

#-------------User defined Functions--------------#
def multiplication(a, b): #parameters -> formal parameters
    return a * b

result = multiplication(1, 2) #arguments -> actual parameters
print(result)

#===========Args & Kwargs===========#
def demonstrate_args(*args):
    print(args) # a tuple

demonstrate_args(1, 2, 3, 4, 5)

def addition(*args):
    return sum(args)

add = addition(1, 2, 3, 4, 5)
print(add)


def demonstrate_keyword(f_name, l_name, age):
    print(f"Hi I am {f_name} {l_name}, I am {age} years old.")

demonstrate_keyword(age= 21, f_name="Rohan", l_name="Rahim") #keyword arguments


def demonstrate_kwargs(**kwargs):
    print(kwargs) #stored as a dictionary

demonstrate_kwargs(a = 5, b = 10, c = 15, d = 25)

def details(**kwargs):
    print(f"Hello this is {kwargs['f_name']} {kwargs['l_name']}. I'm {kwargs['age']} years old and currently living in {kwargs['city']}")

details(f_name="Rohan", l_name="Rahim", city="Dhaka", age= 21)


#==============Default Parameter============#
def my_name(f_name, l_name = "Rahim"): # here l_name is a default parameter
    print(f"{f_name} {l_name}.")

my_name(f_name="Rohan")
my_name(f_name="Rahim", l_name="Khan") # "Khan" overrides "Rahim"

def pass_func():
    pass # passes not gives error for blank here

pass_func()