# 1)შექმენი ფუნქცია, რომელსაც აქვს ერთი პარამეტრი —name.
# ფუნქციამ უნდა დააბრუნოს ტექსტი:
# გამარჯობა, [სახელი]!
# ფუნქცია გამოიძახე სხვადასხვა არგუმენტით მინიმუმ 3-ჯერ.

def greet(name):
    return "გამარჯობა," + name

print(greet("რეზი"))
print(greet("საბა"))
print(greet("დაჩი"))

# 2)შექმენი ფუნქცია, რომელსაც აქვს ორი პარამეტრი — num1 და num2.
# ფუნქციამ უნდა დააბრუნოს მათი ჯამი.
# გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით


def sum_of_numbers(num1,num2):
    return num1 + num2 

print(sum_of_numbers(10,1))
print(sum_of_numbers(1,7))
print(sum_of_numbers(-1,1))


# 3)შექმენი ფუნქცია ერთი პარამეტრით num.
# ფუნქციამ უნდა დააბრუნოს (return) გადაცემული რიცხვის კვადრატი.
# გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით


def square_of_numbers(num):
    return num ** 2

print(square_of_numbers(2))
print(square_of_numbers(3))
print(square_of_numbers(5))



# 4)შექმენი ფუნქცია ერთი პარამეტრით — age.
# თუ ასაკი არის 18 ან მეტი, დააბრუნოს:
# სრულწლოვანი ხარ
# სხვა შემთხვევაში:
# არ ხარ სრულწლოვანი

def age_check(age):
    if age >= 18:
        return "სრულწლოვანი ხარ"
    else:
        return "არ ხარ სრულწლოვანი"

print(age_check(18))
print(age_check(50))
print(age_check(16))


# 5)შექმენი ფუნქცია ერთი პარამეტრით — (string).
# ფუნქციამ უნდა დაბეჭდოს ტექსტის სიმბოლოების რაოდენობა.
# გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით


def words_length(string):
    return len(string)

print(words_length("my name is rezi"))
print(words_length("im 14 years old"))
print(words_length("im 180cm"))


# 6)შექმენი ფუნქცია ორი პარამეტრით num1 და nuk2.
# ფუნქციამ უნდა დააბრუნოს მათი ნამრავლი.
# გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით

def product_of_numbers(num1,num2):
    return num1 * num2

print(product_of_numbers(67,1))
print(product_of_numbers(5,2))
print(product_of_numbers(10,19))


# 7)შექმენი ფუნქცია ერთი პარამეტრით — score.
# თუ ქულა ≥ 90 → დააბრუნოს "შესანიშნავი ქულა"
# თუ ქულა >= 70 და ნაკლებია ან <=89 → დააბრუნოს "კარგი ქულა"
# თუ ქულა >= 50 და <= 69 → დააბრუნოს "დამაკმაყოფილებელი ქულა"
# სხვა შემთხვევაში დააბრუნოს "ჩაჭრილი"
# გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით

def score_of_test(score):
    if score >= 90:
        return "შესანიშნავი ქულა"
    elif score >= 70 and score <= 89:
        return "კარგი ქულა"
    elif score >= 50 and score <= 69:
        return "დამაკმაყოფილებელი ქულა"
    else:
        return "ჩაჭრილი"

print(score_of_test(10))
print(score_of_test(100))
print(score_of_test(67))


# 8)შექმენი ფუნქცია ერთი პარამეტრით — number.
# ფუნქციამ უნდა დააბრუნოს, ლუწია თუ კენტი.
# გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით

def odd_or_even(number):
    if number % 2 == 0:
        return "ლუწია"
    else:
        return "კენტია"

print(odd_or_even(100))
print(odd_or_even(67))
print(odd_or_even(28))


# 9)შექმენი ფუნქცია ერთი პარამეტრით — name
# ფუნქციამ უნდა დააბრუნოს მხოლოდ პირველი ასო.
# მაგალითად:
# „Giorgi“ → G
# გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით

def first_letter(name):
    return name[0]

print(first_letter("rezi"))
print(first_letter("dachi"))
print(first_letter("saba"))


# 10)შექმენი ფუნქცია სამი num1 num2 num3.
# ფუნქციამ უნდა დააბრუნოს ამ სამი რიცხვის საშუალო არითმეტიკული.
# გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით

def sum(num1,num2,num3):
    return (num1 + num2 + num3) / 3

print(sum(10,10,10))
print(sum(9,8,10))
print(sum(3,6,7))



# 11)შექმენი ფუნქცია ერთი პარამეტრით —password.
# თუ პაროლი უდრის "python123" → დააბრუნოს  "წვდომა დაშვებულია"
# სხვა შემთხვევაში → "არასწორი პაროლი"
# გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით


def guess_password(password):
    if password == "python123":
        return "წვდომა დაშვებულია"
    else:
        return "არასწორი პაროლი"

print(guess_password("python123"))
print(guess_password("password123"))
print(guess_password("123456789"))


# 12)შექმენი ფუნქცია ერთი პარამეტრით — text.
# ფუნქციამ უნდა დააბრუნოს ეს ტექსტი მთლიანად დიდი ასოებით.
# გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით


def text_in_caps(text):
    return text.upper()

print(text_in_caps("rezi"))
print(text_in_caps("hello"))
print(text_in_caps("python"))










