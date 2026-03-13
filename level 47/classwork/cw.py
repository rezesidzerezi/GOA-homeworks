# codewars 1

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

# codewars 2

# def get_middle(s):
#     if len(s) % 2 == 0:
#         return (s[(len(s)//2) - 1]) + (s[(len(s)//2)])
#     else:
#         return (s[(len(s)//2)])


# codewars 3

# def descending_order(num):
#     l1 = []
#     b = ""
#     for i in str(num):
#         l1.append(int(i))
    
#     while l1:
#         b += str(max(l1))
#         l1.remove(max(l1))
#     return int(b)

# codewars 4

# def is_isogram(string):
#     string = string.lower()

#     for i in string:
#         if string.count(i) > 1:
#             return False
#     return True






