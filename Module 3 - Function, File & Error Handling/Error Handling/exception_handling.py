# Error vs Exception
#Error -> Usually Errors in compile time
#Exception -> Usually Errors in runtime

#we are controlling error here
try: # jei code e exception thakte pare
    a = int(input("Enter a number: "))
    b = int(input("Enter another number: "))

    print(f"The division is {a / b}.")
except ValueError as ve:  #catch
    print(ve)
except ZeroDivisionError:
    print("Vai b r value to 0 hoina.")
except Exception as e:
    print(e)
else: #goes in this block if no exception is triggered
    print("No exception was raised.")

finally: #will run always
    print("Finally.")

def check_file(filename):
    if not filename.endswith(".txt"):
        raise ValueError("File name must end in .txt") #will raise custom error

check_file("hello.png")

