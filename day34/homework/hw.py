# 1) შექმენით სია სადაც შეინახავთ სხვადასხვა ქალაქების სახელებს.  
# for loop ით დაბეჭდეთ მხოლოდ ის ქალაქები, რომელთა სახელის სიგრძე მეტია 6-ზე.

cities = ["თბილისი", "ბათუმი", "ქუთაისი", "რუსთავი"]

for i in range(len(cities)):
   if len(cities[i]) > 6:
      print(cities[i])


# 2) შექმენით სია სხვადასხვა სიტყვებით.
# -> for loop-ით დაბეჭდეთ მხოლოდ ის სიტყვები, რომელთა სიგრძე ზუსტად იყოფა 15-ზე.

words = ["programming", "100000000000000", "222"]

for i in range(len(words)):
   if len(words[i]) % 15 == 0:
      print(words[i])

# 3) შექმენით სია რიცხვებით.
# -> გამოიყენეთ for loop რათა დათვალოთ რამდენი რიცხვია სიაში.
# -> არ გამოიყენოთ len() — დაითვალეთ ხელით.


numbers = [1, 2, 3, 4, 5, 6]

count = 0

for i in range(6):
   count += 1
   print(count)


# 4) შექმენით სია სხვადასხვა სიტყვებით.
# -> for loop-ით დაბეჭდეთ მხოლოდ ის სიტყვები, რომელთა სიგრძე ზუსტად 5 სიმბოლოა.


words = ["rezi", "gega", "dachi", "goga", "nika", "luka"]

for i in range(len(words)):
   if len(words[i]) == 5:
      print(words[i])

# 5) მომხმარებელს შემოატანინე წინადადება.  
# -> გაიგე რამდენი სიმბოლოა წინადადებაში.  
# -> for ციკლით დათვალე რამდენი აso "a" ან "A" არის ტექსტში.

user = input("enter any sentence: ")

num = 0

for i in range(len(user)):
   num += 1
   print(num)


a = 0

for i in range(len(user)):
   if user[i] == 'a' or user[i] == 'A':
      a += 1
      print(a)
