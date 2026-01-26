# used for optimizing memory
def gen():
    yield 1
    yield 2
    yield 3

g = gen()
# print(next(g)) #1 -> goes to next which is 1 and stop
# print(next(g)) #2 -> goest to next which is now 2 and stop
print(list(g)) # iterates and prints all the values in a list