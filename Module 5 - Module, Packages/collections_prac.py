import collections

# print(collections.__doc__)
# print(dir(collections))

fruits = [1, 2, 3, 4, 5, 1, 2, 3, 3, 1]

print(collections.Counter(fruits))

print(collections.Counter(fruits).most_common(2))

# can be used in making adjacency list in graph
word_dict = collections.defaultdict(list) # value will be in list format
word_dict['Python'].append("Programming Language.")
word_dict['AUST'].append("University")
print(word_dict)