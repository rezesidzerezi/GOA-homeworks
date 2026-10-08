/*1)მოცემულია:

let prices = [25, 40, 15, 80, 100, 35];

.map()-ის გამოყენებით შექმენი ახალი სია, სადაც თითოეული ფასი 20-ით გაზრდილი იქნება.

შედეგი:

[45, 60, 35, 100, 120, 55]*/ 

// let prices = [25, 40, 15, 80, 100, 35]

// let newprices = prices.map(price =>{
//     return price + 20
// })

// console.log(newprices)

/*2)let scores = [45, 72, 91, 38, 64, 87];

.map()-ით შექმენი ახალი სია.

თუ ქულა 50-ზე ნაკლებია → დაამატე 10
სხვა შემთხვევაში → ქულა დატოვე უცვლელი

შედეგი უნდა იყოს:

[55, 72, 91, 48, 64, 87]*/ 

// let scores = [45, 72, 91, 38, 64, 87]

// let newscores = scores.map(s =>{
//     if(s < 50){
//         return s + 10
//     }else{
//         return s
//     }
// })

// console.log(newscores)

/*3)let names = ["nika", "ana", "gio", "mariam", "luka"];

.map()-ით შექმენი ახალი სია, სადაც ყველა სახელი იქნება დიდი ასოებით.

["NIKA", "ANA", "GIO", "MARIAM", "LUKA"]*/ 

// let names = ["nika", "ana", "gio", "mariam", "luka"]

// let newnames = names.map(name =>{
//     return name.toUpperCase()
// })

// console.log(newnames)

/*4)let numbers = [2, 5, 7, 10, 12];

.map()-ის გამოყენებით შექმენი ახალი სია, სადაც თითოეული რიცხვი თავის თავზე იქნება გამრავლებული.*/ 

// let numbers = [2, 5, 7, 10, 12]

// let newnum = numbers.map(num =>{
//     return num * num
// })

// console.log(newnum)

/*5)let numbers = [12, 7, 20, 15, 8, 31, 44];

.forEach()-ის გამოყენებით დაბეჭდე მხოლოდ ლუწი რიცხვები.*/ 

// let numbers = [12, 7, 20, 15, 8, 31, 44]

// numbers.forEach(num =>{
//     if(num % 2 == 0){
//         console.log(num)
//     }
// })

/*6)let prices = [100, 250, 80, 450, 120];

.forEach()-ით თითოეული ფასი დაბეჭდე შემდეგ ფორმატში:

Product price: 100
Product price: 250
...*/ 

// let prices = [100, 250, 80, 450, 120]

// prices.forEach(price =>{
//     console.log(`Product price: ${price}`)
// })

/*7)let scores = [95, 67, 42, 81, 55, 30];

.forEach()-ით თითოეულ ქულაზე დაბეჭდე:

95 - Excellent
67 - Good
42 - Failed

წესი შენ თვითონ განსაზღვრე, მაგალითად:

80+ → Excellent
60–79 → Good
50–59 → Average
50-ზე ნაკლები → Failed*/ 

let scores = [95, 67, 42, 81, 55, 30]

scores.forEach(score => {
    if(score >= 80){
        console.log("Excellent")
    }else if(score >= 60 && score <= 79){
        console.log("Good")
    }else if(score >= 50 && score <= 59){
        console.log("Average")
    }else{
        console.log("Failed")
    }
})

/**/ 


