# codewars 1

# def create_phone_number(n):
#     return '(' + str(n[0]) + str(n[1]) + str(n[2]) + ') ' + str(n[3]) + str(n[4]) + str(n[5]) + '-' + str(n[6]) + str(n[7]) + str(n[8]) + str(n[9])

# codewars 2

# def max_tri_sum(numbers):
#     list = []
#     for i in numbers:
#         if i not in list:
#             list.append(i)
#     list.sort()
#     return list[-3] + list[-2] + list[-1]


#codewars 3

# def to_float_array(arr): 
#     filltered = []
#     for i in arr:
#         filltered.append(float(i))
#     return filltered

# codewars 4

# def capitalize(s):
#     first = ""
#     second = ""
#     index = 0
#     result = []
    
#     for i in s:
#         if index % 2 == 0:
#             first += i.upper()
#             second += i.lower()
#         else:
#             first += i.lower()
#             second += i.upper()

#         index += 1
#     result.append(first)
#     result.append(second)
#     return result

# codewars 5

# def adjacent_element_product(array):
#     max_product = array[0] * array[1]

#     i = 1
#     while i < len(array) - 1:
#         product = array[i] * array[i + 1]
#         if product > max_product:
#             max_product = product
#         i += 1
#     return max_product

# codewars 6

# def show_sequence(n):
#     if n<0:
#         return str(n)+ "<0"
#     elif n == 0:
#         return "0=0"
#     st=''
#     jami=0
#     for i in range(n+1):
#         st+=f"{(i)}+"
#         jami+=i

#     return st[0 :- 1]+' = '+str(jami)

# codewars 7

# def solution(digits):
#     max_num = 0

#     for i in range(len(digits) - 4):
#         num = int(digits[i:i+5])
#         if num > max_num:
#             max_num = num

#     return max_num

# codewars 8

# def factorial(n):
#     sum = 1
#     for i in range(1,n+1):
#         sum = sum * i
#     return sum


