# 2) კომენტარების სახით თავიდან ახსენით რა არის conditional statement, რა დანიშნლება გააჩნიათ და როგორი სახის განცხადებები გვაქვს.

# conditional statement -- არის კოდი რომელიც ასრულებს სხვადასხვა მოქმედებას ანუ if/else იმის მიხედვით თუ რომელი პირობა არის true ან false


# 3) for ციკლის მეშვეობით გამოიტანეთ "hello world" 50-ჯერ.

for i in range(50):
    print("hello world")

# 4) while ციკლის მეშვეობით გამოიტანეთ რიცხვები 3-დან 17-ის ჩათვლით.

i = 3
while i < 18:
    print(i)
    i = i + 1


# 5) მომხმარებელს შემოატანინეთ პაროლი, შემდეგ კი შედეგი შეინახეთ ცვლადში. შექმენით პირობა თუ ის უდრის "1234"-ს დაბეჭდეთ "Password is correct", სხვა შემთხვევაში დაბეჭდეთ "Password is incorrect".

password = input("enter password")
if password == "1234":
    print("Password is correct")
else:
    print("Password is incorrect")


# 6) შექმენით ცვლადი სადაც შეინახავთ მომხმარიბლის მიერ შემოყვანილი ცხოველუს სახეობას. თუ სახეობა უდრის "ძაღლი" დაბეჟდე "woaf! woaf!", სხვა შემთხვევაში "შენ არ გყავს ძაღლი"

animal = input("enter any animal")
if animal == "ძაღლი":
    print("woaf! woaf!")
else:
    print("შენ არ გყავს ძაღლი")
















