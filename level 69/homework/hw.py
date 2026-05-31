# codewars 1

# def spacey(array):
#     new = []
#     string = ""
#     for i in array:
#         string += i
#         new.append(string)
#     return new

# codewars 2

# def cube_odd(arr):
#     result = 0
#     for i in arr:
#         if type(i) != int:
#             return None
        
#         new_i = i ** 3
        
#         if new_i % 2 != 0:
#             result += new_i
            
#     return result

# codewars 3

# def solve(s):
#     upper_count = 0
#     lower_count = 0
#     num_count = 0
#     special_count = 0
#     result = []
#     for i in s:
#         if i.isupper():
#             upper_count += 1
#         elif i.islower():
#             lower_count += 1
#         elif i in "0123456789":
#             num_count += 1
#         else:
#             special_count += 1
#     result.append(upper_count)
#     result.append(lower_count)
#     result.append(num_count)
#     result.append(special_count)
#     return result

# codewars 4

# class List:
#     def remove_(self, integer_list, values_list):
#         new = []
#         for i in integer_list:
#             if i not in values_list:
#                 new.append(i)
#         return new

# codewars 5

# def solution(value):
#     if len(str(value)) == 1:
#         new = "Value is 0000" + str(value)
#     elif len(str(value)) == 2:
#         new = "Value is 000" + str(value)
#     elif len(str(value)) == 3:
#         new = "Value is 00" + str(value)
#     elif len(str(value)) == 4:
#         new = "Value is 0" + str(value)
#     else:
#         new = "Value is " + str(value)
#     return new

# codewars 7

# def last_survivor(letters, coords):
#     new = list(letters)
#     for i in coords:
#         new.pop(i)
#     return new[0]

# codewars 8

# def solve(s):
#     best = 0
#     curent = 0
#     vovel = "aeiou"
#     for i in s:
#         if i in vovel:
#             curent += 1
#             if curent > best:
#                 best = curent
#         else:
#             curent = 0
#     return best

# codewars 10

# def is_nice(arr):
#     if len(arr) == 0:
#         return False
#     for i in arr:
#         if i - 1 not in arr and i + 1 not in arr:
#             return False
#     return True
