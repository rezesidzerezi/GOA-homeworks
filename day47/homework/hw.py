# 1) შექმენით სახელებით სავსე სია და ასევე ცარიელი სია: Upper_name = [].  სახელების სიიდან ცარიელ სიაში ჩაამატეთ ყველა ის სახელი რომელიც იწყება დიდი ასოთი,
# გამოიყენეთ for ციკლი და შესაფერისი სიის და სტრინგის ფუნქციები.

names = ["rezi", "gega", "Dachi", "saba", "Alexandre"]

Upper_name = []

for name in names:
    if name[0].upper():
        Upper_name.append(name)

print(Upper_name)

# 2) შექმენით 2 სია - სახელების და გვარების. for ციკლის და ფუნქციების გამოყენებით სახელების სიაში ყველა სახელის ყველა ასო გახადეთ დიდი, 
# ხოლო გვარების სიაში ყველა გვარის თითოეული ასო გახადეთ პატარა, სულ ბოლოს კი გააერთიანეთ სახელების სია გვარის სიასთან და დაპრინტეთ მიღებული შედეგი.


names1 = ["rezi", "gega", "Dachi", "saba", "Alexandre"]
surnames = ["rezesidze", "gabunia", "Arkania", "sagliani" , "Kekoshvili"]

for i in range(len(names)):
    names1[i] = names1[i].upper()

for i in range(len(surnames)):
    surnames[i] = surnames[i].lower()

names1.extend(surnames)

print(names1)

# 3) შექმენით სტრინგებით სავსე სია და ამ სიიდან ამოშალეთ ყველა ის სიტყვა რომელიც არის ან 6-ზე ნაკლები სიგრძეში, ან რომელიც მთავრდება დიდი ასოთი.

words = ["python", "html", "css", "java", "hello world"]

words2 = []

for i in words:
    if len(i) < 6 or i[-1].isupper():
        continue
    else:
        words2.append(i)

print(words2)

# 4) შექმენით float მონაცემთა ტიპის ელემენტებით სავსე სია რომელშიც იქნება 10 float ელემენტი და ამ სიიდან ახალ ცარიელ სიაში ჩაამატეთ ის რიცხვები 
# რომლებიც არიან 10-ზე მეტი და 100-ზე ნაკლები.

numbers = [2.5, 11.3, 99.9, 1.2, 6.7, 5.3, 10.1, 3.3, 9.99, 8.8]

numbers2 = []

for i in numbers:
    if 10 < i < 100:
        numbers2.append(i)

print(numbers2)

# 5) შექმენით 2 სია, პირველი სია იყოს სავსე 5 ცალი ქალაქის სახელებით, და მეორე სიაში მოთავსებული იყოს 10 ქვეყნის სახელი. 
# თქვენი დავალებაა რომ ქვეყნის სახელებში ჩაამატოთ ყველა ქალაქის სახელები ცალ-ცალკე მენულე ინდექსიდან მეოთხე ინდექსის ჩათვლით. 
# გამოიყენეთ for ციკლი და შესაბამისი ფუნქციები.

cities = ["Tbilisi", "Paris", "Berlin", "kutaisi", "Tokyo"]

countries = ["Georgia", "France", "Germany", "Spain", "Japan", "Italy", "USA", "China", "India", "Brazil"]

for i in range(5):
    countries.insert(i, cities[i])

print(countries)

