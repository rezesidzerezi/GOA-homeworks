# codewars 1

# def get_middle(s):
#     if len(s) % 2 == 0:
#         return (s[(len(s)//2) - 1]) + (s[(len(s)//2)])
#     else:
#         return (s[(len(s)//2)])

# codewars 2

# def is_anagram(test, original):
#     test = test.lower()
#     original = original.lower()
#     li = list(test)
#     li2 = list(original)
#     li2.sort()
#     li.sort()
#     if li2 == li:
#         return True
#     else:
#         return False

# codewars 3

# def maskify(cc):
#     empty = len(cc) - 4
#     emp = ""
#     for i in cc:
#         emp = emp + i
#     return "#" * empty + str(emp[-4:])


# codewars 4

# def check_exam(arr1,arr2):
#     count = 0
#     for i in range(4):
#         if arr2[i] != "":
#             if arr1[i] == arr2[i]:
#                 count += 4
#             else:
#                 count -= 1
#     if count < 0:
#         return 0
#     return count

# codewars 5

# def create_phone_number(n):
#     return '(' + str(n[0]) + str(n[1]) + str(n[2]) + ') ' + str(n[3]) + str(n[4]) + str(n[5]) + '-' + str(n[6]) + str(n[7]) + str(n[8]) + str(n[9])

#codewars 6

# def get_count(sentence):
#     count = 0
#     vovel = "aeiou"
#     for i in sentence:
#         if i in vovel:
#             count += 1
#     return count
