# codewars 1

# def abbrev_name(name):
#     name = name.split()
#     return name[0][0].upper() + "." + name[-1][0].upper()

# codewars 2

# def find_average(numbers):
#     if len(numbers) == 0:
#         return 0
    
#     sum = 0
    
#     for i in numbers:
#         sum += i
    
#     return sum / len(numbers)

# codewars 3

# def reverse_seq(n):
#     array = []
#     for i in range(n,0,-1):
#         array.append(i)
#     return array

# codewars 4

# def double_char(s):
#     string = ""
#     for i in s:
#         string += i * 2
#     return string

# codewars 5

# def set_alarm(employed, vacation):
#     if employed == True and vacation == False:
#         return True
#     else:
#         return False

# codewars 6

# def remove_exclamation_marks(s):
#     new = ""
#     for i in s:
#         if i != "!":
#             new += i
#     return new

# codewars 7

# def quarter_of(month):
#     if 1 <= month <= 3:
#         return 1
#     elif 4 <= month <= 6:
#         return 2
#     elif 7 <= month <= 9:
#         return 3
#     else:
#         return 4

# codewars 8

# def reverse_words(s):
#     l1  = s.split()
#     s = l1[::-1]
#     string = ""
#     for i in s:
#         string += i + " "
#     return string[:-1]

# codewars 9

# def points(games):
#     total = 0
#     for i in games:
#         if i[0] > i[2]:
#             total += 3
#         elif i[0] == i[2]:
#             total += 1
#         else:
#             total += 0
#     return total

# codewars 10

# def get_age(age):
#     return int(age[0]) 

# codewars 11

# def filter_list(l):
#     new = []
#     for i in l:
#         if type(i) == int:
#             new.append(i)
#     return new

# codewars 12

# def invert(lst):
#     list1 = []
#     for i in lst:
#         list1.append(-i)
#     return list1

# codewars 13

# def distinct(seq):
#     new = []
#     for i in seq:
#         if i not in new:
#             new.append(i)
#     return new
