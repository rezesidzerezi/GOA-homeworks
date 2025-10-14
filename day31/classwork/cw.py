# 1)შექმენით სია -->  ["ina" , "givi" , "nika" , "daviti" , "ia" , "lizi"] , თქვენი დავალებაა რომ პირველი 2 ელემენტი ჩაანაცვლოთ შემდეგი სიით --> ["irina" , "milana" , "kira", "mate"] //////////////// და ასევე სიის ბოლო ორი ელემენტი შეანაცვლე შემდეგი სიით --> ["gia" , "emzari" , "xvicha"] ამის შემდეგ დაპრინტეთ საბოლოო სია


list = ["ina" , "givi" , "nika" , "daviti" , "ia" , "lizi"]

list[:2] = ["irina" , "milana" , "kira", "mate"]

list[-2:] = ["gia" , "emzari" , "xvicha"]

print(list)

# 2)შექმენით ცვლადი და მომხმარებელს შემოატანინეთ რიცხვი,თუ რიცხვი ლუწია დაუპრინტეთ "EVEN" შემდეგ შეამოწმეთ თუ რიცხცვი არის კენტი დაუპრინტეთ "Odd"

number = int(input("შეიყვანეთ რიცხვი: "))

if number % 2 == 0:
    print("number is even")
else:
    print("number is odd")














