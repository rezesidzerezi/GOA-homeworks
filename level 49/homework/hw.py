# Disemvowel Trolls 1

# def disemvowel(s):
#     vovel = "aeiouAEIOU"
#     new = ""
#     for i in s:
#         if i not in vovel:
#             new += i
#     return new




# Highest and Lowest 2

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





# Regex validate PIN code 3

# def validate_pin(pin):
#     if len(pin) != 4 and len(pin) != 6:
#         return False

#     for i in pin:
#         if i < '0' or i > '9':
#             return False

#     return True




# shortest word 4

# def find_short(s):
#     s = s.split()
#     min = s[0]
#     for i in s:
#         if len(i) < len(min):
#             min = i
#     return len(min)




# Friend or Foe? 5

# def friend(x):
#     new = []
#     for i in x:
#         if len(i) == 4:
#             new.append(i)
#     return new