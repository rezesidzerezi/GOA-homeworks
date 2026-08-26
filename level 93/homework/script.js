/*1)შექმენი ფუნქცია calculatePrice(price, quantity).

price — პროდუქტის ფასი
quantity — რაოდენობა
ფუნქციამ უნდა დააბრუნოს საბოლოო ფასი.
თუ quantity არ გადაეცა, default მნიშვნელობა იყოს 1.
ფუნქცია გამოიძახე მინიმუმ 3 სხვადასხვა არგუმენტით.*/ 

function calculatePrice(price, quantity = 1){
    console.log(price * quantity)
}

calculatePrice(100, 3)
calculatePrice(100)
calculatePrice(300, 6)

/*2)შექმენი ფუნქცია getResult(name, score).

ფუნქციამ უნდა დააბრუნოს:

თუ ქულა 90 ან მეტია → "name: Excellent"
თუ 70–89 → "name: Good"
თუ 50–69 → "name: Passed"
თუ 50-ზე ნაკლებია → "name: Failed"

score თუ არ გადაეცა, default მნიშვნელობა იყოს 0.

გამოიძახეთ ფუნქცია სხვადასხვა არგუმენტებით*/ 

function getResult(name, score = 0){
    if (score >= 90){
        console.log(`${name} Excellent`)
    }else if (score >= 70 && score <= 89){
        console.log(`${name} Good`)
    }else if (score >= 50 && score <= 69){
        console.log(`${name} Passed`)
    }else if (score < 50){
        console.log(`${name} Failed`)
    }
}

getResult("rezi", 80)
getResult("gega", 70)
getResult("dachi", 90)

/*3)შექმენი ფუნქცია:

calculateShipping(price, shipping = 10)

წესი:

თუ პროდუქტის ფასი 100 ან მეტია → მიწოდება უფასოა.
სხვა შემთხვევაში დაემატოს shipping.
ფუნქციამ უნდა დააბრუნოს საბოლოო თანხა.

გამოიძახე სხვადასხვა სიტუაციაში, მათ შორის საკუთარი shipping მნიშვნელობის გადაცემით.*/ 

function calculateShipping(price, shipping = 10){
    if (price >= 100){
        console.log(price)
    }else{
        console.log(price + shipping)
    }
}

calculateShipping(300,50)
calculateShipping(100)
calculateShipping(1000,100)

/*4)შექმენი ფუნქცია:

checkAge(name, age = 18)

ფუნქციამ უნდა დააბრუნოს:

18 ან მეტი → "name is adult"
18-ზე ნაკლები → "name is minor"

შემდეგ გამოიძახე ფუნქცია მინიმუმ 4-ჯერ.*/ 

function checkAge(name, age = 18){
    if (age >= 18){
        console.log(`${name} is adult`)
    }else{
        console.log(`${name} is minor`)
    }
}

checkAge("rezi" , 15)
checkAge("dachi" , 14)
checkAge("saba" , 17)
checkAge("alex" , 12)

/*5)შექმენი ფუნქცია:

addPoints(score, points = 10)

ფუნქციამ უნდა:

მიიღოს არსებული ქულა.
დაამატოს points.
დააბრუნოს ახალი ქულა.*/ 

function addPoints(score, points = 10){
    console.log(score , points)
}

addPoints(30,32)
addPoints(70)
addPoints(900,82)

/*6)შექმენი ფუნქცია:

createMessage(name, message = "Hello")

ფუნქციამ უნდა დააბრუნოს:

Hello, Goga!

ან თუ სხვა message გადაეცა:

Welcome, Goga!*/ 

function createMessage(name, message = "Hello"){
    if (message === "Hello"){
        console.log(`Hello, ${name}!`)
    }else{
        console.log(`Welcome, ${name}!`)
    }
}

createMessage("rezi", "goodbye")


/*7)შექმენი ფუნქცია:

calculateDiscount(price, discount = 10)

ფუნქციამ უნდა გამოითვალოს ფასდაკლების შემდეგ დარჩენილი თანხა.*/ 

function calculateDiscount(price, discount = 10){
    console.log(price - discount)
}

calculateDiscount(50)
calculateDiscount(20)
calculateDiscount(200)


/*8)შექმენი ფუნქცია:

convertTemperature(value, type = "C")

თუ type არის "C" → Celsius გადააკეთე Fahrenheit-ში.

ფორმულა:

F = C * 9 / 5 + 32

თუ type არის "F" → Fahrenheit გადააკეთე Celsius-ში.

ფორმულა:

C = (F - 32) * 5 / 9*/ 

function convertTemperature(value, type = "C"){
    if (type === "C"){
        return value * 9 / 5 + 32
    }else{
        return (value - 32) * 5 / 9
    }
}

convertTemperature(36)
convertTemperature(38)
convertTemperature(42)

/*9)შექმენი ფუნქცია calculateSalary(salary, bonus = 0).

ფუნქციამ უნდა:

მიიღოს ხელფასი;
თუ ბონუსი არ გადაეცა, ბონუსი იყოს 0;
თუ ხელფასი 1000-ზე ნაკლებია, ბონუსი დაუმატოს ორმაგად;
სხვა შემთხვევაში ჩვეულებრივ დაუმატოს;
დააბრუნოს საბოლოო ხელფასი.

მაგალითად:

calculateSalary(800, 100)  // 1000
calculateSalary(1500, 200) // 1700
calculateSalary(900)       // 900*/

function calculateSalary(salary, bonus = 0){
    if (bonus === 0){
        console.log(salary)
    }else if(salary < 1000){
        console.log(salary + bonus * 2)
    }else{
        console.log(salary + bonus)
    }
}

calculateSalary(800, 100)
calculateSalary(1500, 200)
calculateSalary(900)

/*10)შექმენი ფუნქცია:

checkExam(name, score = 0)

ფუნქციამ დააბრუნოს:

90–100 → "name: Excellent"
75–89 → "name: Very Good"
60–74 → "name: Good"
50–59 → "name: Passed"
0–49 → "name: Failed"

თუ ქულა არ გადაეცა, ჩაითვალოს 0. შეასრულეთ switch ით -- hint --> switch(true){...}*/ 

function checkExam(name, score = 0){
    switch (true){
        case score >= 90 && score <= 100:
            console.log(`${name} Excellent`)
            break
        case score >= 75 && score <= 89:
            console.log(`${name} Very Good`)
            break
        case score >= 60 && score <= 89:
            console.log(`${name} Good`)
            break
        case score >= 50 && score <= 59:
            console.log(`${name} Passed`)
            break
        case score >= 0 && score <= 49:
            console.log(`${name} Failed`)
            break
    }
}

checkExam("dachi", 100)
checkExam("gega", 50)
checkExam("rezi", 0)

/*11)შექმენი ფუნქცია:

ticketPrice(age, price = 50)

წესები:

5 წლამდე → უფასო
5–12 → ფასის 50%
13–59 → სრული ფასი
60 და ზემოთ → ფასის 30%

მაგალითად:

ticketPrice(4, 50)   // 0
ticketPrice(10, 50)  // 25
ticketPrice(25, 50)  // 50
ticketPrice(65, 50)  // 15
ticketPrice(20)      // 50*/ 

function ticketPrice(age, price = 50){
    if (age < 5){
        return 0
    }else if(age >= 5 && age <= 12){
        return price * 0.5
    }else if(age >= 13 && age <= 59){
        return price
    }else{
        return price * 0.15
    }
}

ticketPrice(80)
ticketPrice(20)
ticketPrice(15)

/*12)შექმენი ფუნქცია:

analyzeNumber(number, limit = 100)

ფუნქციამ უნდა დააბრუნოს:

თუ რიცხვი უარყოფითია → "Negative"
თუ 0-ია → "Zero"
თუ დადებითია და limit-ზე ნაკლებია → "Small positive"
თუ limit-ზე მეტია → "Large positive"

შეასრულეთ ternary ით*/ 

function analyzeNumber(number, limit = 100){
    number < 0 ? console.log("Negative") : number == 0 ? console.log("Zero") : number > 0 && number < limit ? console.log("Small positive") : console.log("Large positive")
}

analyzeNumber(100)
analyzeNumber(10)
analyzeNumber(0)
