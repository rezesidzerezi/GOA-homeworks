# 2) შექმენით სიტყვებით სავსე სია, თუ სიტყვის ყველა ასო არის პატარა და პირველი ასო არის g, მაშინ ახალ სიაში ჩაამატეთ სახელი "Goga", 
# თუ სიტყვის ყველა ასო არის დიდი ან იწყება ასო N-თი, მაშინ სიაში ჩაამატეთ სახელი "Nika", სხვა შემთხვევაში სიაში ჩაამატეთ სიტყვა "ლიდერი". 
# დაპრინტეთ მიღებული სია.

words = ["basketball", "geaorgia", "BALL", "rezi"]

new_list = []

for i in words:
    if i == i.lower() and i[0] == "g":
        new_list.append("Goga")
    elif i == i.upper() or i[0] == "N":
        new_list.append("Nika")
    else:
        new_list.append("ლიდერი")

print(new_list)


# 3)  შექმენით რიცხვებით სავსე სია, თუ რიცხვი არის ლუწი ან დგას ლუწ ინდექსზე, ჩაამატეთ მისი კვადრატი ახალ სიაში -
# გამოიყენეთ შესაბამისი მათემატიკური ოპერატორი, ხოლო თუ რიცხვი არის კენტი ან დგას კენტ ინდექსზე, ახალ სიაში ჩაამატეთ 2-ჯერ დიდი რიცხვი. 
# გამოიყენეთ while ციკლი.

numbers = [1,2,3,4,5,6,7,8,9,10]

new_list = []

i = 0

while i < len(numbers):
    if numbers[i] % 2 == 0 or i % 2 == 0:
        new_list.append(numbers[i] ** 2)
    else:
        new_list.append(numbers[i] * 2)
    i += 1

print(new_list)

# 4) შექმენით სიტყვებით სავსე სია, თუ სიტყვის სიგრძე არის 6-ზე მეტი ან მისი ყველა ასო არის დიდი, ამ სიტყვის ყველა ასო გახადეთ პატარა და ჩაამატეთ ახალ სიაში. 
# ყველა სხვა შემთხვევაში ახალ სიაში ჩაამატეთ შეუცვლელი სიტყვა ოღონდ გადაბმულად ორჯერ, მაგალითად თუ მოცემული იქნება სიტყვა "Nika", ჩაამატეთ "NikaNika".
# გამოიყენეთ while ციკლი.

words2 = ["computer", "pyton", "css", "html", "java", "teqnology"]

new_words = []

i = 0

while i < len(words2):
    word = words2[i]
    if len(word) > 6 or word == word.upper():
        new_words.append(word.lower())
    else:
        new_words.append(word + word)
    i += 1

print(new_words)

# 5) მოცემული გაქვთ სტრინგის ცვლადი: numbers = "0123456789", ამ სტრინგიდან ახალ სიაში ჩაამატეთ ყველა ის რიცხვი რომელიც დგას ამ სტრინგის 
# ლუწ ინდექსზე ან არის 7-ზე მეტი, სიაში ეს რიცხვები იყოს როგორც integer ტიპის მონაცემები და არა სტრინგები. დაწერეთ ორივე ხერხით, 
# for ციკლით და while ციკლით.

numbers = "0123456789"

new_list = []

for i in range(len(numbers)):
    num = int(numbers[i])
    if i % 2 == 0 or num > 7:
        new_list.append(num)

print(new_list)





numbers = "0123456789"

new_list = []

i = 0

while i < len(numbers):
    num = int(numbers[i])
    if i % 2 == 0 or num > 7:
        new_list.append(num)
    i += 1

print(new_list)