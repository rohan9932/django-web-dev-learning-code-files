class Car:
    newVar = "static variable" #Class variable -> shared across all classes
    def __init__(self, company, model, year): #constructor
        self.company = company #attribute / Instance Variable
        self.model = model
        self.year = year

    def make(self): #method
        print(f"Making {self.year} {self.company} {self.model}.")

car1 = Car('Ford', 'Mustang', 1999)
car1.make()

# car1.newAtt = "Hello" #Bad practice
# print(car1.newAtt)
print(Car.newVar)


#__init()__ : Dunder Method, Constructor
# Constructor types: 1. Default, 2. Parameterized, 3. Default Value constructor

#-------------Python doesn't have any access modifier-------------------#
class BankAccount:
    bank_name = "BRAC Bank PLC"

    @classmethod
    def change_bank_name(cls, new_name):
        cls.bank_name = new_name


    @staticmethod #independant method which doesn't depend on class/object -> to keep code organized in a class
    def validate_bank_account(bank_account):
        if bank_account % 2 == 0:
            return "Valid"
        else:
            return "Invalid"


    #=======Constructor Overloading========#
    def __init__(self): # default
        self._balance = 0

    def __init__(self, username): #Parameterized
        self.username = username
        self._balance = 0 # Not logically private but by convention it's considered private


    @property #Getter
    def balance(self): #it's not accessible like method. became a property
        return self._balance

    @balance.setter #Setter
    def balance(self, new_balance):
        self._balance = new_balance


    def deposit(self, amount):
        self._balance += amount
        print(f"{amount} added to {self.username}'s balance.")

    def check_balance(self):
        print(f"{self.username}'s balance is {self._balance}.")



user1 = BankAccount("Rohan")
user1.check_balance()
user1.deposit(500)
user1.check_balance()
user1.deposit(1500)
user1.check_balance()
user2 = BankAccount("XYZ")

# BankAccount.bank_name = "City Bank PLC" #changes name of the class variable so changes name across all the object
# user1.bank_name = "Dutch Bangla Bank PLC" #changes name of only user1 object
# print(user2.bank_name)

BankAccount.change_bank_name("Prime Bank PLC")

print(BankAccount.validate_bank_account(100))

print(user1.balance)
user2.balance = 50000
print(user2.balance)