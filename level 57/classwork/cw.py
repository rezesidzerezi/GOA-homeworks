# codewars 1

# def capitals(word):
#     sia = []
#     for i in range(len(word)):
#         if word[i] == word[i].upper():
#             sia.append(i)
#     return sia

# codewars 2

# def remove_duplicate_words(s):
#     l1 = s.split()
#     string = ""
#     for i in l1:
#         if i not in string:
#             string += i + " "
#     return string[:-1]

# codewars 3

# def vaporcode(s):
#     result = ""
#     for i in s:
#         if i != " ":
#             result += i.upper() + "  "

#     return result[ :- 2]

# codewars 4

# def sort_my_string(s):
#     word1 = ""
#     word2 = " "
#     for i in range(len(s)):
#         if i % 2 == 0:
#             word1 += s[i]
#         else:
#             word2 += s[i]
#     return word1 + word2

# codewars 5

# def find_it(seq):
#     for i in seq:
#         if seq.count(i) % 2 != 0:
#             return i

# codewars 6

# def alphabet_war(fight):
#     power = 0
#     power2 = 0
#     left = "sbpw"
#     right = "zdqm"
#     for i in fight:
#         if i in left:
#             power += left.find(i) + 1
#         elif i in right:
#             power2 += right.find(i) + 1
#     if power > power2:
#         return "Left side wins!"
#     elif power < power2:
#         return "Right side wins!"
#     else:
#         return "Let's fight again!"
