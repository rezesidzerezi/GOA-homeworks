# codewars 1

# def count_positives_sum_negatives(arr):
#     if arr == []:
#         return arr
#     filteredlist = []
#     count = 0
#     sum = 0
#     for i in arr:
#         if i > 0:
#             count += 1
#         else:
#             sum += i
#     filteredlist.append(count)
#     filteredlist.append(sum)
#     return filteredlist


# codewars 2

# def count_sheep(n):
#     string = ""
#     for i in range(1,n + 1):
#             string += str(i) + " sheep..."
#     return string


# codewars 3

# def century(year):
#     return (year - 1) // 100 + 1

# codewars 4

# def likes(names):
#     if len(names) == 0:
#         return "no one likes this"
#     elif len(names) == 1:
#         return names[0] + " likes this"
#     elif len(names) == 2:
#         return names[0] + " and " + names[1] + " like this"
#     elif len(names) == 3:
#         return names[0] + ", " + names[1] + " and " + names[2] + " like this"
#     else:
#         return names[0] + ", " + names[1] + " and " + str(len(names) - 2) + " others like this"

# codewars 5

# def friend(x):
#     new = []
#     for i in x:
#         if len(i) == 4:
#             new.append(i)
#     return new

# codewars 6

# def abbrev_name(name):
#     name = name.split()
#     return name[0][0].upper() + "." + name[-1][0].upper()



