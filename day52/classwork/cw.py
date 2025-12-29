sentence = "hello world my name is rezi"
string = ""
arr = []
count = 1

for i in sentence:
    if i != " ":
        string += i
        count += 1
    elif count == len(sentence):
        arr.append(string)
    else:
        arr.append(string)
        string = ""
        count += 1
print(arr)


















