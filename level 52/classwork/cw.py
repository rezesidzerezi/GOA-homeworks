# codewars 1

# def to_camel_case(text):
#     word = ""
#     words = []
    
#     for i in text:
#         if i == "-" or i == "_":
#             words.append(word)
#             word = ""
#         else:
#             word += i

#     words.append(word)
    
#     result = ""
    
#     for i in words[1:]:
#         result += i.capitalize()
    
#     return words[0] + result

# codewars 2

# def multi_table(number):
#     string = ""
    
#     for i in range(1,11):
#         string += str(i) + " * " + str(number) + " = " + str(i * number) + "\n"
#     return string[:-1]


# codewars 3

# def to_csv_text(array):
#     str1 = ""
#     for listt in array:
#         for i in listt:
#             str1 += str(i) + ","
#         str1 = str1[:-1] + "\n"
#     return str1[:-1]

# codewars 4

# def first_non_consecutive(arr):
#     number = arr[0]
#     for i in range(len(arr)):
#         if arr[i] != arr[-1]:
#             if arr[i] + 1 != arr[i+1]:
#                 return arr[i + 1]


# codewars 5

# def add_length(str_):
#     new = []
#     new_str = str_.split()
#     for i in new_str:
#         new.append(i + " " + str(len(i)))
#     return new


# codewars 6

# def square_or_square_root(arr):
#     new = []
#     for i in arr:
#         if i ** 0.5 == int(i ** 0.5):
#             new.append(i ** 0.5)
#         else:
#             new.append(i**2)
#     return new


