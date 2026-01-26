import requests
# import json

#request --> API --> Response Cycle
#Instagram e account create kora - POST
#Profile info dekhi - GET
#nijer profile update kori - PUT/PATCH/UPDATE
#post delete korte pari - DELETE

# GET Request
response = requests.get("https://jsonplaceholder.typicode.com/posts") 
#* this url is called api url as we're communicating through this api

# print(response.json())

# final_result = response.text
# print(type(final_result))

# p_json = json.loads(final_result)

# print(type(p_json))

# for item in p_json:
#     print(type(item)) #dict


result_json = response.json() #it internally imports json and converts
print(type(result_json))

print("\n")

# POST request
data = {'userId': 1, 'id': 1, 'title': 'for post test',}
response = requests.post("https://jsonplaceholder.typicode.com/posts", json=data)
print(response)
print(response.json())

# UPDATE request
data_up = {'userId': 1, 'id': 1, 'title': 'for update test',}
response_up = requests.put("https://jsonplaceholder.typicode.com/posts/1", json=data_up)
print(response_up)
print(response_up.json())

# DELETE request 
response_del = requests.delete("https://jsonplaceholder.typicode.com/posts/1")
print(response_del)
print(response_del.json())