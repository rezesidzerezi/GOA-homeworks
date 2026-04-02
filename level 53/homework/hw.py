# codewars 1

# def maskify(cc):
#     empty = len(cc) - 4
#     emp = ""
#     for i in cc:
#         emp = emp + i
#     return "#" * empty + str(emp[-4:])


# codewars 2

# def no_boring_zeros(n):
#     if n == 0:
#         return 0
#     new = str(n).rstrip("0")
#     return int(new)


# codewars 3





# codewars 4

# def number(lines):
#     result = []
#     count = 1
#     for i in lines:
#         result.append(str(count) + ": " + i)
#         count += 1
#     return result



# codewars 5

# def distinct(seq):
#     new = []
#     for i in seq:
#         if i not in new:
#             new.append(i)
#     return new


# codewars 6

# def human_years_cat_years_dog_years(human_years):
#     cat = 0
#     dog = 0
#     new_years = []
#     if human_years == 1:
#         cat += 15
#         dog += 15
#     elif human_years == 2:
#         cat += 15 + 9
#         dog += 15 + 9
#     else:
#         cat += 15 + 9 + (human_years - 2) * 4
#         dog += 15 + 9 + (human_years - 2) * 5
#     new_years.append(human_years)
#     new_years.append(cat)
#     new_years.append(dog)
#     return new_years


# codewars 7

# def pig_it(text):
#     words = text.split()
#     result = ""

#     for i in words:
#         if i in "!?.,":
#             result += i
#         else:
#             result += i[1:] + i[0] + "ay"
#         result += " "

#     return result[:-1]



