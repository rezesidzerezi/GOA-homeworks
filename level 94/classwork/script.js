/*1)შექმენი function expression სახელად checkNumber, რომელსაც გადაეცემა რიცხვი.

ფუნქციამ უნდა დააბრუნოს:

"Positive Even" — დადებითი და ლუწი
"Positive Odd" — დადებითი და კენტი
"Negative Even" — უარყოფითი და ლუწი
"Negative Odd" — უარყოფითი და კენტი
"Zero" — თუ რიცხვი 0-ია , use ternary*/ 


let checkNumber = function(number){
    number > 0 && number % 2 == 0 ? console.log("Positive Even") 
    : number > 0 && number % 2 != 0 ? console.log("Positive Odd") 
    : number < 0 && number % 2 == 0 ? console.log("Negative Even")
    :number < 0 && number % 2 != 0 ? console.log("Negative Odd")
    : console.log("Zero")
}

/*2)შექმენით arrow ფუნქცია რომელსაც გადაეცემა ერთ პარამეტრი name ფუნქციამ
უნდა შეამოწმოს if else ით იწყება თუ არა ეს სახელი "გ" ასოზე , თუ იწყება
დააბრუნე good name სხვა შემთხვევაში დააბრუნე "still good name"*/

let idk = name => {
    if(name.startsWith("g")){
        console.log("good name")
    }else{
        console.log("still good name")
    }
}

idk("rezi")


/*3)შექმენით arrow ფუნქცია რომელსაც გადაეცემა ერთ პარამეტრი num ,
შენი დავალებაა შეამოწმო ეს რიცხვი ლუწია თუ კენტია ,
use ternary and single line block stytax*/ 

let idk2 = num => num % 2 == 0 ? "Even" : "Odd"

idk2(18)

