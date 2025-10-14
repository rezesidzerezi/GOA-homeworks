# #1)კომენტარის სახით ჩამოწერეთ რომელი მონაცემთა ტიპები ვისწავლეთ და თთეულს გვერდით მიუწერეთ 1 მაგალითი

# string--->"rezi","gega","goga"...
# integer--->1,2,3,4,5,...
# float--->1.2,3.4,1.5,...
# boolean--->True, False
# list--->[1,"rezi"]

# #2)ტერმინალში გამოიტანეთ 1 სტრინგი 1 ინტეჯერი 1 ფლოუთი 1 ბულეანი

print("rezi")
print(1)
print(1.2)
print(True)

# #3)შექმენი 4 ცვლადი snake_case ის გამოყენებით,1 ში შეინახე სტრინგი მეორეში ინტეჯერი მესამეში ბულეანი მეოთხეში ფლოუთი,დაპრინტე თითოეული ამთგანი(გამოიყენე ცვლადის სახელები)
pyton_string = "rezi"
pyton_integer = 1
pyton_float = 1.2
pyton_boolean = True

print(pyton_string)
print(pyton_integer)
print(pyton_float)
print(pyton_boolean)

#4)შექმენი 2 ცვლადი სადაც შეინახავ ინტეჯერ ტიპის მონაცემებს,თქვენი დავალებაა რომ ამ ორ რიცხვზე მოახდინოთ ყველა მათემატიკური მოქმედება რაც ვისწავლეთ

integer = 100

integer1 = 10

print(integer + integer1)
print(integer - integer1)
print(integer * integer1)
print(integer / integer1)
print(integer % integer1)
print(integer ** integer1)
print(integer // integer1)








#5)შექმენი ორი ცვლადი შეინახე ორივეში სტრინგებიდ და შეკრიბე ეს ორი სტრინგი,ასევე კომენტარის სახით დაწერე რა ეწოდება ამ მოქმედებას(სტრინგების შეერთებას)

# სტრინგების დამატებას კონკატინაცია ეწოდება

string = "rezi"
string1 = "nika"

print(string+string1)



# #6)კომენტარის სახით ახსენით თითოეული რას აკეთებს და მოიყვანე თითო მაგალით --> % , // , 

# //--->ეს ნიშნავს რამდენჯერ მოთავსდება ერთი რიცხვი მეორეში მაგ:
print(100//10)

# %--->ეს გვიჩვენებს რამდენი ნაშთი რჩება 

print(101%10)



#7)მომხმარებელს შემოატანინე ორი რიცხვიდ ა მოახდინე აბსოლიტურად ყველა ამთემატიკური მოქმედება ამ ორ რიცხვზე --> + - * / //  %

first_number = int(input("type any number: "))
second_number = int(input("type any number: "))


print(first_number + second_number)
print(first_number - second_number)
print(first_number * second_number)
print(first_number / second_number)
print(first_number // second_number)
print(first_number % second_number)
print(first_number ** second_number)








#Bouns
# ქვემოთ მოცემულ მაგალითებს გვერდით მიუწერეთ პასუხები(დააკომენტარეთ ყველა და კომენტარებად გქონდეთ მაგალითები:
# 15 / 3 = 5
# 20 / 4 = 5
# 15 // 10 = 1
# 10 // 7 = 1
# 4 * 3 = 12
# 40 * 3 = 120
# 120 * 3 = 360
# 4 ** 3 = 64
# 10 ** 3 = 1000
# 10 % 7 = 3
# 3 % 2 = 1






#8)კომენტარის სახით ახსენით თთოეული რას აკეთებს --> str() , int() , float(),მოიყვანე თითო მაგალითი სამივე მათგანზე

# str()--->გადაყავს ნებისმიერი რამ string-ად
print(str(10))
# int()--->გადაყავს float an stringi რომელიც რიცხვია integer-ად
print(int("10"))
# float()--->გადაყავს integer an stringi რომელიც რიცხვია float-ად
print(float(10))

#9)შექმენი 4 ცვლადი სადაც შეინახავ განსხვავებული ტიპის მონაცემებს,შენი დავალებაა რომ დაბეჭდო მათი ტიპები,გამოიყენე ნასწავლი ფუნქცია რომელიც იგებდა ფრჩხილებში გადაცემული ელემენტის ტიპს

string = "rezi"
integer = 10
float1 = 2.3
boolian = True

print(type(string))
print(type(integer))
print(type(float1))
print(type(boolian))




#10)მომხმარებელს შემოატანინე ორი რიცხვი,შენი დავალეაბაა ამ ორ რიცხვზე მოახდინოთ შედარების ოპერაციები(გამოიყენე ყველა შედარების ოპერატორი რაც ვისწავლეთ),

user = int(input("type any number: "))
user2 = int(input("type any number: "))

print(user > user2)
print(user < user2)
print(user == user2)
print(user >= user2)
print(user <= user2)



#11)კომენტარის სახით ახსენით რომელი ლოგიკური ოპერატორები ვისწავლეთ და რომლის გამოყენების დროს რა ხდება,მოიყვანე თითო მაგალითი 

# and--->ანიიჭებს მნიშვნელობას False თუ ერთი არის False
# მაგ:False and False--->False    False and True--->False   True and True--->True


# or--->ანიიჭებს მნიშვნელობას True თუ ერთი არის True
# მაგ:False or False--->False    False or True--->True   True or True--->True






#12)გვერდით მიუწერეთ პასუხები წერტილების მაგივრად
# True and True -- True      |   True or True -- True
# True and False -- False     |   True or False -- True
# False and True -- False     |   False or True -- True
# False and False -- False    |   False or False -- False



#13)გვერდით მიუწერეთ საბოლოო პასუხი წერტილების მაგივრად

# 5 == 10 and 10 <= 10 -- False  |   True or "giorgi" == "giorgi" -- True

# True and False -- False        |   10 < 2 or "lasha" == "beqa" -- False

# 10 > 3 and 5 == 3 -- False     |   2 >= 3 or 40 < 2 -- False

# True and 200 <= 200 -- True    |   4 == 3 or 50 > 300 -- False






#14)ტერმინალში გამოიტანეთ თქვენი რიცხვები 5 იდან 200 მდე for loop

for i in range(5,200):
    print(i)



#15)ტერმინალში გამოიტანეთ რიცვები 100 დან 150 მდე 5 ის სტეპის გამოტოვებით for loop


for i in range(100,150,5):
    print(i)





#16)ტერმინალში გამოიტანეთ თქვენი სახელი 10 ჯერ for loop

name = "rezi"
for i in range(10):
    print(name)


#17)ტერმინალში გამოიტანეთ თქვენი რიცხვები 10 იდან 50 მდე while loop

i = 10
while i <50:
    print(i)
    i += 1



#18)ტერმინალში გამოიტანეთ რიცვები 50 დან 150 მდე 10 ის სტეპის გამოტოვებით while loop

i = 50
while i <150:
    print(i)
    i += 10




#19)ტერმინალში გამოიტანეთ თქვენი სახელი 10 ჯერ while loop


name1 = "rezi"
i = 0
while i <10:
    print(name1)
    i += 1









# Lists
#20) შექმენი ცვლადი სადაც შეინახავ სიას ,ამ სიაში მოათავსე 5 სტრინგ ტიპის მონაცემი და for loop ის დახმარებით გამოიტანე ყველა სიის ელემენტი

list = ["rezi","nika","goga","natela","gegi"]

for i in range(5):
    print(list[i])







#21) შექმენი ცვლადი სადაც შეინახავ სიას ,ამ სიაში მოათავსე 5 სტრინგ ტიპის მონაცემი დაwhile loop ის დახმარებით გამოიტანე ყველა სიის ელემენტი 

list = ["rezi","nika","goga","natela","gegi"]
i = 0
while i <=4:
    print(list[i])
    i += 1




#22)შექმენი სია --> ["გოგა" , "ირაკლი" , "საბა" , "გიორგი" , "ირმა" , "იამზე"],შენი დავალებაა ამ სიიდან გამოიტანო  საბა და იამზე როგორც დადებით ასევე უარყოფითი ინდექსების გამოყენებით


list2 = ["გოგა" , "ირაკლი" , "საბა" , "გიორგი" , "ირმა" , "იამზე"]

print(list2[2],list2[-4])
print(list2[5],list2[-1])




#23)შექმენი ცვლადი სადაც შეინახავ სტრინგს --> 'ჰიდროელექტროსადგური" , შენი დავალებაა რომ გამოიტანო მესამე და მერვე ინდექსზე მდგომი ასოები ტერმინალში

string2 = "ჰიდროელექტროსადგური"
print(string2[3],string2[8])



#24)შექმენი ცვლადი სადაც მომხმარებელს შემოატანინებ რიცხვს , შემდეგ --> თუ მომხმარებლის მიერ შემოტანილი რიცცხვი არის 0 ზე მეტი დაუპრინტე -->"more than 0" , თუ მომხმარებლის მიერ შემოტანილი რიცხვი არის 0 ზე ნაკლები დაუპრინტე --> "Less than 0",სხვა შემთხვევაშიდ აუპრინტე --> "Equal 0"

num = int(input("type any number:" ))

if num > 0:
    print("more than 0")
elif num < 0:
    print("Less than 0")
else:
    print("Equal 0")







#25)შექმენი ცვლადი სადაც შეინახავ სტადამიანების სახელებს(6 ცალი) სიას-->შემდეგ შეამოწმეთ --> თუ ამ სიაში მესამე ინდექსზე მდგომი ელემენტი არის "lasha" -->დაუპრინტე --> "You choose lasha" , თუ სიაში მყოფი ბოლო ინდექსზე მდგომი ელემენტი არის "giorgi" მაშინ დაუპრინტე -->"you choose giorgi" , სხვა შემთხვევაში დაუპრინტე --> "you choose other name"



list = ["rezi","nika","goga","natela","gegi","dachi"]

if list[3] == "lasha":
    print("You choose lasha")
elif list[-1] == "giorgi":
    print("you choose giorgi")
else:
    print("you choose other name")








# 26)
# შექმენი ცვლადი სადაც შეინახავ პაროლს
# მომხმარებელს შემოატანინე პაროლი
# სანამ პირობა არის ჭეშმარიტი(True)
# თუ მომხმარებლის პაროლი დაემთხვა შენს პაროლს:
# დაპრინტე --> გამოიცანი
# break
# სხვა შემთხვევაში:
# თავიდან გაუმეორე რომ შემოიყვანოს პაროლი

password = "rezi"
user_password = input("type password: ")

while True:
    if user_password == password:
        print("გამოიცანი")
        break
    else:
        print("გაიმეორე")
        user_password = input("type password: ")








#27)შექმენი ცვლადი და შეინახე სტრინგი --> "ჰიდროელექტროსადგური" , შენი დავალებაა რომ ტერმინალში გამოიტანო სადგური ,გამოიყენე slicing, ასევე კიდევ გამოიტანე ელექტროსადგური აქაც გამოიყენე სლაისინგი


list3 = "ჰიდროელექტროსადგური"
print(list3[-7:])
print(list3[-14:])







#28)შექმენი ცვლადი და შეინახე სია --> ["გოგა" , "ირაკლი" , "საბა" , "გიორგი" , "ირმა" , "იამზე" , "სანი" , "თენგო" , "ლიზი" , "ნუცა" , "ქეთებვანი"] , შენი დავალებაა რომ ტერმინალში გამოიტანო ყველა სახელი საბადან სანიმდე,ასევე გამოიტანე სახელები გოგადან ირმა მდე გამოიყენე Slicing


names = ["გოგა" , "ირაკლი" , "საბა" , "გიორგი" , "ირმა" , "იამზე" , "სანი" , "თენგო" , "ლიზი" , "ნუცა" , "ქეთებვანი"]

print(names[2:6])
print(names[:4])









#29)შექმენი სია სადაც შეინახავთ ინტეჯერებს,შენი დავალებაა შეამოწმო,თუ სიაში მყოფი მენულე ინდეწსზე მდგომი ელემენტი მეტია სიაში მყოფ ბოლო ინდექსზე მდგომ ელემენტზე და(and) ასევე სიის პირველი ელემენტი მეტია 0 ზე დაუპრინტე --> good , თუ სიის პირველი ელემენტი მეტია სიის ბოლო ელემენტზე და(and) სიის ნოლო ელემენტი ნაკლებია 0 ზე დაუპრინტე --> bad , სხვა შემთხვევაში დაუპრინტე -->"get out"


integer = [1,2,3,4,5,6,7,8,9,10]

if integer[0] > integer[-1] and integer[0] > 0:
    print("good")
elif integer[0] > integer[-1] and integer[-1] < 0:
    print("bad")
else:
    print("get out")








#30)შმომხმარებელს შემოატანინე ათწილადი,შემდეგ შეადარე,თუ მომხმარებლის მიერ შემოტანილი რიცხვი არის 10 ზე მეტი და 30 ზე ნაკლები მაინ დაუპრინტე -->You entered number between 10 and 30, თუ მომხმარებლის მიერ შემოტანილი რიცხვი არის 10 ზე ნაკლები და 0 ზე მეტი მაშნ დაუპრინტე --> You choose number between 0 and 10 , თუ მომხმარებლის მიერ შემოტანილი რიცხვი არის 0 ზე ნაკლები მაშინ დაუპრინტე you choose negative number , სხვა შემთხვევაში დაუპრინტე -->you choose zero(0)


float2 = float(input("type any float"))
if float2 > 10 and float2 < 30:
    print("You entered number between 10 and 30")
elif float2 < 10 and float2 > 0:
    print(" You choose number between 0 and 10")
elif float2 < 0:
    print("you choose negative number")
else:
    print("you choose zero(0)")







#31)შექმენი სია სადაც შეინახავ სტრინგებს(ადამიანის სახელებს,რაც გინდათ და რამდენიც გინდათ),შემდეგ შეადარეთ თუ ამ სიაში მყოფი მე0 ინდექსზე მდგომი ელემენტი არის 'luka' ან(or) არის "saba" დაუპრინტე -->You choose luka or saba, თუ ამ სიაში მყოფი ბოლო ინდექსზე მყოფი ელემენტი არის "irma" ან(or) "iamze" მაშინ დაუპრინტე --> You choose irma or iamze,სხვა შემთხვევაში დაუპტინტე --> You choose other name



names = ["გოგა" , "ირაკლი" , "საბა" , "გიორგი" , "ირმა" , "იამზე" , "სანი" , "თენგო" , "ლიზი" , "ნუცა" , "ქეთებვანი"]

if names[0] == "luka" or names[0] == "saba":
    print("You choose luka or saba")
elif names[-1] == "irma" or names[-1] == "iamze":
    print("You choose irma or iamze")
else:
    print("You choose other name")














