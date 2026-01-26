import functools # for reduce method
# lambda function -> unnamed func, it's function comprehension

#default
def square(x):
    return x ** 2

print(square(5))

#lambda
#syntax: lambda parameters: action
sq = lambda x: x ** 2
print(sq(4))

add = lambda x, y: x + y
print(add(1, 2))

nums = [("Rohan", 90), ("Raiyan", 93), ("Afia", 91)]
"""Here key takes a func on which's basis it will sort. so we are passing a custom lambda func according we wanna sort."""
sorted_nums = sorted(nums, key= lambda x: x[1])
print(sorted_nums)

#-------map(), fileter(), reduce()------------#
#map(ki korte chacchi (a function or lambda func), kar upor korte chacchi)
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
sq_numbers = list(map(lambda x: x**2, numbers))
print(sq_numbers)

#filter()
#here map will apply the condition and place T or F. But filter will filter the elements according the condition
even = list(filter(lambda x: x%2==0, numbers))
print(even)

#reduce()
#it traverses each element on the list and shrinks it according the function passed as argument
sum = functools.reduce(lambda x,y: x+y, numbers)
print(sum)