/*1)შექმენით სია და შეიყვანეთ სახელები,
შენი დავალებაა while loop იითაც და do while ითაც
გამოიტანო სიის ისეთ ელემენტები რომლბის სიგრძე ნაკლებია 4 ზე*/

let names = ["gega", "rezi", "dachi"]
let i = 0

while(i < names.length){
    if (names[i].length < 4){
        console.log(names[i])
    }
    i++
}

i = 0

do{
    if (names[i].length < 4){
        console.log(names[i])
}
    i++
}while (i < names.length)

/*2)შექმენი სია სადაც მოათავსებ რიცხვებს , შენი დავალებაა რომ გადაუარო for ით ამ სიას და გააჩერო ლუპი მაშინ როდესაც შეხვდები 50 ზე მაღალ რიცხვს,გამოიტანე მანამ ყველა რიცხვი სანამ ასეთ რიცხვს იპოვი , თუ ასეთ რიცხვს იპოვი break ამდე დააკონსოლე რომ num which is greater than 50 is found + NUM */ 

let numbers = [1,2,3,50,100]

for(i = 0; i < numbers.length; i++){
    if(numbers[i] > 50){
        console.log("num which is greater than 50 is found" + " " + numbers[i])
        break
    }
}
















