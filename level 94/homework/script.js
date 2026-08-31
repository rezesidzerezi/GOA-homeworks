/*2)რიცხვის შემოწმება — Arrow Function

შექმენი checkNumber single-line Arrow Function-ის სახით.

ფუნქციამ მიიღოს რიცხვი და დააბრუნოს:

"Positive" — თუ რიცხვი დადებითია
"Negative" — თუ უარყოფითია
"Zero" — თუ 0-ია*/ 

let checkNumber = number => number > 0 ? console.log("Positive") : number < 0 ? console.log("Negative") : console.log("Zero")

checkNumber(1)

/*3)შექმენი getGrade ფუნქცია Function Expression-ის გამოყენებით.

მიიღოს score და დააბრუნოს:

90–100 → "A"
80–89 → "B"
70–79 → "C"
60–69 → "D"
0–59 → "F"

თუ ქულა 0-ზე ნაკლებია ან 100-ზე მეტია → "Invalid score".*/ 

let getGrade = function(score){
    if(score >= 90 && score <= 100){
        console.log("A")
    }else if(score >= 80 && score <= 89){
        console.log("B")
    }else if(score >= 70 && score <= 79){
        console.log("C")
    }else if(score >= 60 && score <= 69){
        console.log("D")
    }else if(score >= 0 && score <= 59){
        console.log("F")
    }else{
        console.log("Invalid score")
    }
}

getGrade(100)

/*4)შექმენი checkWord multi-line Arrow Function-ის გამოყენებით.

ფუნქციამ მიიღოს სიტყვა და:

გადაიყვანოს lowercase-ში
შეამოწმოს იწყება თუ არა "a"-თი
თუ იწყება → დააბრუნოს "Starts with A"
წინააღმდეგ შემთხვევაში → "Does not start with A"*/ 

let checkWord = word => {
    word.toLowerCase()
    if(word.startsWith("a")){
        console.log("Starts with A")
    }else{
        console.log("Does not start with A")
    }
}

checkWord("rezi")

/*5)შექმენი analyzeNumbers Function Expression-ის გამოყენებით.

ფუნქციამ მიიღოს 3 რიცხვი და დააბრუნოს ყველაზე დიდი რიცხვი.

მაგალითად:

analyzeNumbers(15, 42, 27) //42*/ 

let analyzeNumbers = function(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        console.log(num1)
    }else if(num2 > num1 && num2 > num3){
        console.log(num2)
    }else{
        console.log(num3)
    }
}

analyzeNumbers(15,42,27)

/*6)შექმენი analyzeText multi-line Arrow Function.

ფუნქციამ მიიღოს ტექსტი და დაკონსოლოს:

ტექსტის სიგრძე
uppercase ფორმა
იწყება თუ არა "Hello"-თი*/ 

let analyzeText = text =>{
    console.log(text.length)
    console.log(text.toUpperCase())
    console.log(text.startswith("Hello"))
}

/*7)მიიღოს:

price, discount

წესები:

თუ discount ≥ 50 → "Discount too high"
თუ discount < 0 → "Invalid discount"
სხვა შემთხვევაში გამოითვალოს საბოლოო ფასი.*/ 

let shop = function(price,discount){
    if(discount >= 50){
        console.log("Discount too high")
    }else if(discount < 0){
        console.log("Invalid discount")
    }else{
        console.log(price - discount)
    }
}

shop(100,20)

/*8)შექმენი validatePassword multi-line Arrow Function-ის გამოყენებით.

ფუნქციამ მიიღოს პაროლი და შეამოწმოს:

სიგრძე მინიმუმ 8 სიმბოლოა?
შეიცავს თუ არა "@" სიმბოლოს?(მოიძიეთ საჭირო მეთოდი)
იწყება თუ არა დიდი ასოთი?

დააბრუნოს:

"Strong password" — თუ სამივე პირობა სრულდება
"Weak password" — სხვა შემთხვევაში*/ 


let validatePassword = password =>{
    if(password.length >= 8 && password.includes("@") && password[0] === password[0].toUpperCase()){
        return "Strong password"
    }else{
        return "Weak password"
    }
}

/*9)შექმენი validateUser multi-line Arrow Function-ის სახით.

მიიღოს:

username, age, password

შეამოწმოს:

username ცარიელი არ არის
age არის 18 ან მეტი
password-ის სიგრძე მინიმუმ 8-ია

თუ ყველაფერი სწორია:

"User is valid"

თუ რომელიმე პირობა არ შესრულდა:

"User is invalid"*/ 

let validateUser = (username, age, password) =>{
    if(username != "" && age >= 18 && password.length >= 8){
        console.log("User is valid")
    }else{
        console.log("User is invalid")
    }
}


