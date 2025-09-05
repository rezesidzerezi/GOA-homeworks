# 1) მომხმარებელს შემოაყვანიეთ რაიმე რიცხვი(მთელი/ათწილადი); შეამოწმეთ ეს რიცხვი - 
# --> თუ დადებითია დაპრინტეთ 'ეს რიცხვი დადებითი რიცხვია'
# --> თუ უარყოფითია დაპრინტეთ 'ეს რიცხვი უარყოფითი რიცხვია'
# --> თუ ნულია დაპრინტეთ 'ეს რიცხვი ნულია'

num1 = float(input("type number: "))

if num1 > 0:
    print("this number is positive")
elif num1 < 0:
    print("this number is negative")
else:
    print("this number is zero")

# 2) მომხმარებელს შემოაყვანიეთ თავისი ასაკი:
# 0–12 წლის ასაკი --> დაპრინტეთ 'ბავშვი ხარ'
# 13-19 წლის ასაკი --> დაპრინტეთ 'მოზარდი/თინეიჯერი ხარ'
# 20-64 წლის ასაკი --> დაპრინტეთ 'ზრდასრული ხართ'
# 65-120 წლის ასაკი --> დაპრინტეთ 'ხანში შესული ხართ'
# 120 და ზემოთ --> დაპრინტეთ 'გურუ ან ჯადოქარი'
# თუ შემოყვანილი ასაკი უარყოფითია --> დაპრინტეთ 'არასწორი ინფო'
age = int(input("enter your age: "))

if age < 0:
    print("invaild")
elif 0 <= age <= 12:
    print("you are child")
elif 13 <= age <= 19:
    print("teenager")
elif 20 <= age <= 64:
    print("you are adult")
elif 65 <= age <=120:
    print("you are elderly")
else:
    print("you are guru or witch")

# 3) დაწერეთ "password guesser" პროგრამა, შექმენით რაიმე ცვლადი და მასში შეინახეთ ის პაროლი რომელსაც ყველგან იყენებთ ;)
# მომხმარებელს მოთხოვეთ გამოიცნოს თქვენი პაროლი
# აღნიშნეთ ცდების რაოდენობა
# გამოიყენეთ while loop, მანამ ატრიალეთ სანამ მომხმარებელი პაროლს არ გამოიცნობს ან დაწერს --> 'nah strong password'
# ბოლოს აჩვენეთ(დაუპრინტეთ) რამდენი ცდა დაჭირდა პაროლის გამოსაცნობად
correct_password = "1111"
tries = 0
while True:
    guess = input("Guess the password (or type nah strong password): ")
    tries += 1

    if guess == correct_password:
        print(f"Congratulations! pasword is correct. number of tries: {tries}")
        break
    elif guess == "nah strong password":
            print(f"you failed. number of tries {tries}")
            break
    else: 
        print("wrong password try again")

# 4) მომხმარებელს შემოატანიეთ სამი რიცხვი(მთელი/ათწილადი) და ამ სამი რიცხვთაგან დაბეჭდეთ უდიდესი
num = int(input("type any number: "))
num2 = int(input("type any number: "))
num3 = int(input("type any number: "))

print(f"the largest number is: ,{max(num,num2,num3)}")

# 5) შემოატანიეთ მომხმარებელს რიცხვი 1-დან 7-ჩათვლით
# თუ 1 --> დაპრინტეთ 'ორშაბათი'
# თუ 2 --> დაპრინტეთ 'სამშაბათი'
# თუ 3 --> დაპრინტეთ 'ოთხშაბათი'
# თუ 4 --> დაპრინტეთ 'ხუთშაბათი'
# თუ 5 --> დაპრინტეთ 'პარასკევი' 
# თუ 6 --> დაპრინტეთ 'შაბათი'
# თუ 7 --> დაპრინტეთ 'კვირა' 
# სხვა დანარჩენი --> 'არ ვიცი ეგ რა დღეა'

day = int(input("type a number between 1 and 7: "))

if day == 1:
    print("monday")
elif day == 2:
    print("tuesday")
elif day == 3:
    print("wednesday")
elif day == 4:
    print("thursday")
elif day == 5:
    print("friday")
elif day == 6:
    print("saturdey")
elif day == 7:
    print("sunday")
else:
    print("i dont know what day is it")