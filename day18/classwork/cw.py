#1
num = int(input("enter number: "))
num1 = int(input("enter number: "))
num2 = int(input("enter number: "))

if num == num1 and num1 == num2:
    print("3 of them are equal")
elif num == num1 and num1 != num2:
    print("1 and 2 are equal")
elif num == num2 and num != num1:
    print("1 and 3 are equal")
elif num1 == num2 and num1 != num:
    print("2 and 3 are equal")
else:
    print("non of them are equal")


#2
month = int(input("put number 1-12: "))

if month == 12 or month == 1 or month == 2:
    print("winter")
elif month == 3 or month == 4 or month == 5:
    print("spring")
elif month == 6 or month == 7 or month == 8:
    print("summer")
elif month == 9 or month == 10 or month == 11:
    print("fall")
else:
    print("please put number between 1-12: ")



#3
name = input("enter name")

if name == "admin":
    password = input("please enter admin password: ")
    if password == "adminpassword123":
        print("hello admin")
    else:
        print("you dont have access")
else:
    print("hello user")






















