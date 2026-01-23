# 1) შექმენით რიცხვებით სავსე სია, ამ სიიდან იპოვეთ და დაპრინტეთ მეორე ყველაზე დიდი რიცხვი, გამოიყენეთ for ციკლი.

numbers = [1,2,3,4,5,6,7,8,9,10]

biggest = numbers[0]

second_biggest = 0

for i in numbers:
    if i > biggest:
        second_biggest = biggest
        biggest = i

print(second_biggest)

# 2) მომხმარებელს შემოატანინეთ წინადადება და დაითვალეთ თუ ამ წინადადებაში რამდენი სიტყვის სიგრძე არის 4-ზე მეტი,
# დაპრინტეთ ასეთი სიტყვების რაოდენობა, მაგალითად 4. გამოიყენეთ while ციკლი.

user = input("type sentence: ")

count = 0
words_length = 0
i = 0

while i < len(user):
    if user[i] != " ":
        words_length += 1
    elif user[i] == " " and words_length > 4:
        count += 1
        words_length = 0
    i += 1

print(count)

# 3) მომხმარებელს შემოატანინეთ სიტყვა და გაიგეთ ეს სიტყვა არის თუ არა პალინდრომი - ანუ ეს სიტყვა წინიდანაც და უკნიდანაც თუ ზუსტად იგივენაირად იკითხება.
# თუ კი მაშინ დაპრინტეთ True, თუ არა დაპრინტეთ False, გამოიყენეთ for ციკლი, არ გამოიყენოთ slicing - [::-1].

user2 = input("type any word: ")

word = ""

for i in user2:
    word = i + word

print(word == user2)

# 4) შექმენით არეული რიცხვებით სავსე გრძელი სია და 2 ცარიელი სია, ერთ სიაში ჩააგდეთ ყველა ის რიცხვი რომელიც არის ლუწი და დგას კენტ ინდექსზე,
# ხოლო მეორე სიაში ჩააგდეთ ყველა ის რიცხვი რომელიც არის ლუწი და დგას კენტ ინდექსზე, გამოიყენეთ for ციკლი.

numbers = [1,5,4,7,8,2,3,9,10]

list1 = []
list2 = []

for i in numbers:
    if i % 2 == 0 and numbers.index(i) % 2 == 1:
        list1.append(i)
    elif i % 2 == 1 and numbers.index(i) % 2 == 0:
        list2.append(i)

print(list1)
print(list2)

# 5) შექმენით ყველანაირი მონაცემთა ტიპების ელემენტებით სავსე სია, ამოშალეთ ყველა დუპლიკატები - ყველაფერი რაც მეორდება 2-ზე მეტჯერ,
# გამოიყენეთ remove() ფუნქცია და while ციკლი.

everything = [3, 1.1, 1.1, True, "rezi", "rezi", False]

i = 0

while i < len(everything):
    if everything.count(everything[i]) > 1:
        everything.remove(everything[i])
    else:
        i += 1

print(everything)

# 6)  მომხმარებელს შემოატანინეთ წინადადება და დაპრინტეთ ამ წინადადებაში მყოფი ყველაზე გრძელი სიტყვა, გამოიყენეთ while ციკლი, არ გამოიყენოთ max() ფუნქცია.
