# codewars 1

# def divisors(integer):
#     nl = []

#     for i in range(2 , integer):
#         if integer % i == 0:
#             nl.append(i)

#     if nl == []:
#         return str(integer) + " is prime"
#     else:
#         return nl

# codewars 2

# def divisors(n):
#     countnum = 0

#     for i in range(1, n+1):
#         if n % i == 0:
#             countnum += 1
#     return countnum

# codewars 3

# def longest(a1, a2):
#     a = a1 + a2
#     b = ''
#     for i in a:
#         if i not in b:
#             b += i
#     return ''.join(sorted(b))

# codewars 4

# def in_asc_order(arr):
#     if len(arr) == 0 or len(arr) == 1:
#         return True
    
#     if arr == sorted(arr):
#         return True
#     else:
#         return False





