# 1) შექმენით რიცხვებით სავსე სია და ახალ სიაში ჩააგდეთ ყველა რიცხვი გამრავლებული 2-ზე. დაპრინტეთ ახალი სია.

num = [1,2,3,4,5,6,7,8,9,10]

new_num = []

for i in num:
    double_num = i * 2
    new_num.append(double_num)
print(new_num)




# 2) შექმენით სახელებით სავსე სია, მომხმარებელს შემოატანინეთ რაიმე რიცხვი, და ამ რიცხვის ინდექსზე ჩაამატეთ სახელი "ნიკა" თქვენს სიაში.

names = ["rezi", "dachi", "gega", "luka"]

user = int(input("type any number"))

names.insert(user, "ნიკა")

print(names)


# 3) შექმენით string წინადადების ცვლადი, ამ წინადადებიდან დაპრინტეთ მხოლოდ ხმოვანი ასოები.

sentence = "გამარჯობა მე ვარ რეზი"

letters = "აეიოუ"

for i in sentence:
    if i in letters:
        print(i)


# 4) შექმენით სტრინგებით სავსე სია, წაშალეთ ის სტრინგ მონაცემთა ტიპის ელემენტები რომლებიც არიან 4-ზე მეტი სიგრძეში ან დგანან კენტ ინდექსზე. გამოიყენეთ remove() ფუნქცია.

my_list = ["rezi", "dachi", "gega", "luka"]
for i in range(len(my_list)-1, -1, -1):
    if len(my_list[i]) > 4 or i % 2 != 0:
        my_list.remove(my_list[i])
print(my_list)


# 5) შექმენით რიცხვებით სავსე სია, გამოითვალეთ რიცხვების საშუალო არითმეტიკული - რიცხვების ჯამი გაყოფილი რიცხვების რაოდენობაზე.

numbers = [1,2,3,4,5,6,7,8,9,10]

total = 0
for number in numbers:
    total += number

count = len(numbers)

არითმეტიკული = total / count

print(არითმეტიკული)
