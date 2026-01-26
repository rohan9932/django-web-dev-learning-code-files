def say_hello(name):
    print(f"Hello, {name}!")
    
# print(__name__) # it will be the module name here utils.hello as it will be called 

if __name__ == "__main__":
    print("This portion is run when the hello.py is run directly.")