# codewars 1

# def break_chocolate(n, m):
#     if n * m == 1 or n * m == 0:
#         return 0
#     return n * m - 1

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

# def over_the_road(address, n):
#     result = 2 * n + 1 - address
#     return result

# codewars 4

# def caffeine_buzz(n):
#     if n % 12 == 0:
#         result = "Coffee"
#     elif n % 3 == 0:
#         result = "Java"
#     else:
#         return "mocha_missing!"

#     if n % 2 == 0:
#         result += "Script"

#     return result

# codewars 5

# def last_survivor(letters, coords):
#     new = list(letters)
#     for i in coords:
#         new.pop(i)
#     return new[0]

# codewars 6

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





