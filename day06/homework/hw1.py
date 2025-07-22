#1)მომხმარებელს შემოატანინეთ ორი რიცხვი,შეადარეთ ეს ორი რიცხვი ერთმანეთს(გამოიყენეთ შედარების ოპერატორები(>, <, ==)
num1 = input("type any number: ")
num2 = input("type any number: ")
print(num1 > num2)
print(num1 < num2)
print(num1 == num2)

#2)შექმენით 5 ცვლადი,3 ცვლადში შეინახეთ რიცხვები რომლებიც იქნებაინ სტრინგის ტიპის,დანარჩენ 2 ცვლადში შეინახეთ ჩვეულებრიბი ინტეჯერები,შენი დავალებაა იპოვო ამ ხუთი რიცხვის ნამრავლი,შემდეგ ეს ნამრავლი გაყავი რიცხვების რაოდენობაზე და დაპრინტე საბოლოო შედეგი,გამოიყენე შეაბამისი ფუნქცია რომ გადააქციო სტრინგი რიცხვები ინტეჯერად
num3 = int("50")
num4 = int("112")
num5 = int("14")
num6 = (1222)
num7 = (3)
print((num3 * num4 * num5 * num6 * num7)/5)

#3)მომხმარებელს შემოატანინეთ სამი სტრინგ ტიპის მნიშვნელობა ასევე შემოატანინეთ ერთი ინტეჯერი,თქენი დავალებაა მომხმარებლის მიერ შემოყვანილ სამ სტრინგზე მოახდინოთ კონკატინაცია და შეინახოთ ცალკე ცვლადში ეს სამი გადაბმული სტრინგი,კონკატინაციის შემდეგ კი გაამრავლეთეს ეს მთლიანი სტრინგი მომხმარებლის მიერ შემოყვანილ რიცხვზე
string1 = input("type any name: ")
string2 = input("type any name: ")
string3 = input("type any name: ")
age = input("whats your age: ")
name = string1 + string2 + string3 
print(name * age)

#4)კომენტარის სახით ახსენით თუ რომელი ლოგიკური ოპერატორები ვისწავლეთ და რომელი ოპერატორის დროს რას უფრო ენიჭება უპირატესობა(True , False) და რატომ
#ჩვენ ვისწავლეთ logical operatons and,or 
#and  თუ ლოგიკურ ოპერაციაში არის ერთი მაინც false მაშინ იქნება false მაგ:თუ არის folse da true პასუხი იქნება false
#or  თუ ლოგიკურ ოპერაციაში არის ერთი მაინც true მაშინ პასუხი იქნება true მაგ:false da true პასუხი იქნება true

#5)გვერდით მიუწერეთ რას გამოიტანს შემეგი ოპერაციები
 #    (and)                                                   (or)
#True and True -- True რადგან ორივე True არის     |   True or True -- True რადგან ორივე არის True          
#True and False -- False რადგან ერთი არის false    |   True or False -- True რადგან ერთი არის True
#False and True -- False რადგან ერთი არის false    |   False or True -- True რადგან ერთი არის True
#False and False -- False რადგან ორივე არის false   |   False or False -- False რადგან ორივე არის False

#6)მოიყვანე მაგალითები and და or ოპერატორებზე,დაპრინტე და გაუშვით ტერმინალში და ნახეთ შედეგი
print(True and True)
print(True and False)
print(False and True)
print(False and False)
print(True or True)
print(True or False)
print(False or True)
print(False or False)

#7)შექმენი 4 ცვლადი სადაც შეინახავთ სხვადასხვა მონაცემთა ტიპებს და შენი დავალებაა რომ გაიგო ამ ცვლადებში შენახული მონაცემების ტიპები(გამოიყენეთ შესაბამისი ფუნქცია)
Name = type("rezi")
age1 = type(14)
height = type(1.70)
boolean = type(True and False)
print(Name)
print(age1)
print(height)
print(boolean)

#8)მომხმარებელს შემოატანინე 3 მნიშნველობა,ერთის ტიპი იყოს float ერთის integer ერთის string და დაპრინტეთ ისინი(გამოიყენეთ შესაბამისი ფუნქციები რომ შემოყვანილ მნიშვნელობებს ქონდეთ შესაბამისი ტიპი(note:მომხმარებელს რომ შემოყავს მნიშვნელობა თავიდან ყოველთვის არის სტრინგი),თუ ფლოათს  შემოიყვანს მომხმარებელი გახადეთ ინფუთი ბულეან ტიპის თუ ინტეჯერს შემოიყვანს გახადეთ ინფუთი ინტეჯერ ტიპის
NAme = str(input("whats your name?: "))
Age = int(input("whats your age?: "))
height1 = float(input("whats your height?: "))
print(NAme)
print(Age)
print(height1)








