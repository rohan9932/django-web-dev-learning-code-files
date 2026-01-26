x = 10 #global var

def func():
    y = 50 #local var
    x = 200 # this overrides the global x in this scope
    print(x) # the changes of x are in this scope only

func()
print(x)

#But when we wanna change global x
y = 50
def changeY():
    global y #access the global var y though it's not recommended
    y = 70
    print(y)
changeY()
print(y)

# LEGB
# L = Local, E = Enclosing, G = Global, B = Built in scope

a = "global" #global
def outer():
    a = "enclosing" #enclosing var
    #here only the inner() scope as we declared global a it can change the global var.
    #but in the outer() the a is enclosing wrt. inner(). So it can't be changed.
    def inner():
        #global a
        nonlocal a #changes enclosing var
        a = "inner" #local var
        print(a)
    inner()
    print(a)

outer()
print(a)

#In short, local -> enclosing -> global -> built in scopes
# global var --> changes global var in local scope (not enclosing var)
# nonlocal var --> changes enclosing var in local scope (not global var)