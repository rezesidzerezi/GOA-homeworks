# codewars 1

# def solution(number):
#     if number <= 0:
#         return 0

#     total = 0
#     for i in range(number):
#         if i % 3 == 0 or i % 5 == 0:
#             total += i

#     return total

# codewars 2

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

# codewasrs 3

# def high_and_low(numbers):
#     numbers = numbers.split()
#     highest = int(numbers[0])
#     lowest = int(numbers[0])
#     for i in numbers:
#         if int(i) > highest:
#             highest = int(i)
#         elif int(i) < lowest:
#             lowest = int(i)
#     return str(highest) + " " + str(lowest)

# codewars 4

# def find_short(s):
#     s = s.split()
#     min = s[0]
#     for i in s:
#         if len(i) < len(min):
#             min = i
#     return len(min)

# codewars 5




# codewars 6





# codewars 7

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


# codewars 8

# def calculator(txt):
#     count = 0
#     new = txt.split()
#     if new[1] == "*":
#         count += len(new[0]) * len(new[2])
#     elif new[1] == "+":
#         count += len(new[0]) + len(new[2])
#     elif new[1] == "-":
#         count += len(new[0]) - len(new[2])
#     elif new[1] == "//":
#         count += len(new[0]) // len(new[2])
#     return "." * count
