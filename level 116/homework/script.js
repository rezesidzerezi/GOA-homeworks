/*1)let student = ["Goga", "Chalauri", 19, "Tbilisi", 95];


Destructuring-ის გამოყენებით:
1. ცალკე ცვლადებში შეინახე სახელი, გვარი, ასაკი, ქალაქი და ქულა.
2. გამოიტანე სტუდენტის სრული სახელი.
3. შეამოწმე, არის თუ არა სტუდენტის ქულა 90-ზე მეტი.
4. გამოიტანე წინადადება:
Goga Chalauri is 19 years old and has 95 points.*/

// let student = ["Goga", "Chalauri", 19, "Tbilisi", 95];

// let [name , surname , age , city , points] = student

// console.log(name , surname)

// if(points > 90){
//     console.log("Passed")
// }else[
//     console.log("Failed")
// ]

// console.log(`${name} ${surname} is ${age} years old and has ${points} points`)


/*2)let products = ["Laptop", 2500, "Electronics", 15, true];


Destructuring-ის გამოყენებით:
1. შეინახე პროდუქტის სახელი.
2. გამოტოვე ფასი.
3. შეინახე კატეგორია.
4. გამოტოვე რაოდენობა.
5. შეინახე ბოლო მნიშვნელობა.
6. შეამოწმე, არის თუ არა პროდუქტი ხელმისაწვდომი. */


// let products = ["Laptop", 2500, "Electronics", 15, true];

// let [name ,  , category , , instock] = products

// console.log(name)


/*3)
let exam = ["Nika", 85, "Mathematics", 90, "Physics", 78];


1. შეინახე მოსწავლის სახელი.
2. შეინახე მათემატიკის ქულა და საგნის სახელი.
3. შეინახე ფიზიკის საგნის სახელი და ქულა.
4. გამოთვალე ქულების ჯამი.
5. გამოიტანე, რომელ საგანში მიიღო მოსწავლემ მეტი ქულა. */


// let exam = ["Nika", 85, "Mathematics", 90, "Physics", 78];

// let [name , score] = exam
// let [, , math , scoreM] = exam
// let [ , , , , Physics , scoreP] = exam

// console.log(score + scoreM + scoreP)

// if(scoreM > scoreP){
//     console.log("მოსწავლემ მათემატიკაში მიიღო მეტი ქულა ვიდრე ფიზიკაში")
// }else{
//     console.log("მოსწავლემ ფიზიკაში მიიღო მეტი ქულა ვიდრე მათემატიკაში")
// }


/*4)let students = [
    ["Goga", 19, [90, 85, 95]],
    ["Nika", 20, [75, 88, 80]],
    ["Saba", 18, [100, 95, 90]]
];


1. Destructuring-ის გამოყენებით დაშალე სამივე სტუდენტის ინფორმაცია.
2. თითოეული სტუდენტისთვის ცალკე შეინახე სახელი და ასაკი.
3. თითოეული სტუდენტის ქულების მასივიდან ცალკე შეინახე პირველი და მესამე ქულა.
4. გამოთვალე გოგას სამი ქულის ჯამი.
5. შეამოწმე, აქვს თუ არა რომელიმე სტუდენტს 100 ქულა. */


// let students = [
//     ["Goga", 19, [90, 85, 95]],
//     ["Nika", 20, [75, 88, 80]],
//     ["Saba", 18, [100, 95, 90]]
// ];

// let [person1] = students
// let [, person2] = students
// let [, , person3] = students

// let [name , age] = person1
// let [name2 , age2] = person2
// let [name3 , age3] = person3

// let [ , , [goga1 , , goga3]] = person1
// let [ , , [nika1 , , nika3]] = person2
// let [ , , [saba1 , , saba3]] = person3

// let [ , , [sum1 , sum2 , sum3]] = person1

// let somed1 = person1[2].some(item => item == 100)
// let somed2 = person2[2].some(item => item == 100)
// let somed3 = person3[2].some(item => item == 100)

// console.log(somed1 || somed2 || somed3)


/*5)let company = [
    "TechVision",
    [
        "Development",
        ["Giorgi", "Nika", "Saba"],
        35000
    ],
    [
        "Marketing",
        ["Ana", "Mariam"],
        12000
    ]
];


1. შეინახე კომპანიის სახელი.
2. შეინახე Development დეპარტამენტის სახელი.
3. შეინახე მისი პირველი და მესამე თანამშრომელი.
4. შეინახე Development-ის ბიუჯეტი.
5. შეინახე Marketing-ის სახელი და თანამშრომლების სახელები.
6. გამოთვალე ორივე დეპარტამენტის ბიუჯეტების ჯამი.
7. შეადარე დეპარტამენტების ბიუჯეტები. */


// let company = [
//     "TechVision",
//     [
//         "Development",
//         ["Giorgi", "Nika", "Saba"],
//         35000
//     ],
//     [
//         "Marketing",
//         ["Ana", "Mariam"],
//         12000
//     ]
// ];


// let [coname , [deve , [name1 , , name3] , budget] , [mark , [ma1 , ma2] , budget2]] = company

// console.log(budget + budget2)

// if(budget > budget2){
//     console.log(budget)
// }else{
//     console.log(budget2)
// }


/*6)მოცემულია ობიექტი:
let student = {
    name: "Goga",
    surname: "Chalauri",
    age: 19,
    city: "Tbilisi",
    score: 95
};


Destructuring-ის გამოყენებით:
1. შეინახე ყველა თვისების მნიშვნელობა ცალკეულ ცვლადებში.
2. name შეინახე ცვლადში სახელად studentName.
3. score შეინახე ცვლადში სახელად studentScore.
4. გამოიტანე სრული სახელი და ასაკი.
5. შეამოწმე, არის თუ არა სტუდენტის ქულა 90-ზე მეტი. */


// let student = {
//     name: "Goga",
//     surname: "Chalauri",
//     age: 19,
//     city: "Tbilisi",
//     score: 95
// };

// let {name : studentName, surname , age , city , score : studentScore} = student

// console.log(studentName , age)

// if(studentScore > 90){
//     console.log("მეტია 90-ზე")
// }else[
//     console.log("ნაკლებია 90-ზე")
// ]


/*7)let product = {
    title: "Gaming Laptop",
    price: 2500,
    category: "Electronics",
    stock: 12,
    available: true
};


1. Destructuring-ით შეინახე ყველა მნიშვნელობა.
2. title შეინახე ცვლადში productName.
3. stock შეინახე ცვლადში quantity.
4. გამოიტანე პროდუქტის სახელი და ფასი.
5. თუ პროდუქტი ხელმისაწვდომია, გამოიტანე "Product is available", სხვა შემთხვევაში "Out of stock". */

// let product = {
//     title: "Gaming Laptop",
//     price: 2500,
//     category: "Electronics",
//     stock: 12,
//     available: true
// };

// let {title : productName , price , category , stock : quantity, available} = product

// console.log(productName , price)

// if(available){
//     console.log("Product is available")
// }else{
//     console.log("Out of stock")
// }


/*8)let employee = {
    firstName: "Nika",
    lastName: "Beridze",
    position: "Developer",
    salary: 3500,
    experience: 4
};


1. დაშალე ობიექტი Destructuring-ის გამოყენებით.
2. firstName შეინახე name ცვლადში.
3. lastName შეინახე surname ცვლადში.
4. position შეინახე jobTitle ცვლადში.
5. გამოიტანე თანამშრომლის სრული სახელი და თანამდებობა.
6. შეამოწმე, აქვს თუ არა თანამშრომელს 3 წელზე მეტი გამოცდილება.*/


// let employee = {
//     firstName: "Nika",
//     lastName: "Beridze",
//     position: "Developer",
//     salary: 3500,
//     experience: 4
// };

// let {firstName: name, lastName : surname, position : jobTitle , salary , experience} = employee

// console.log(name , jobTitle )

// if(experience > 3){
//     console.log("აქვს 3 წელზე მეტი გამოცდილება")
// }else{
//     console.log("არ აქვს 3 წელზე მეტი გამოცდილება")
// }


/*9)let car = {
    brand: "BMW",
    model: "M5",
    year: 2023,
    color: "Black",
    price: 85000,
    isElectric: false
};


1. შეინახე ყველა მნიშვნელობა ცვლადებში.
2. brand შეინახე carBrand ცვლადში.
3. model შეინახე carModel ცვლადში.
4. year შეინახე productionYear ცვლადში.
5. გამოიტანე მანქანის სრული დასახელება.
6. შეამოწმე, გამოშვებულია თუ არა მანქანა 2020 წლის შემდეგ.
7. შეამოწმე, არის თუ არა მანქანა ელექტრო. */


// let car = {
//     brand: "BMW",
//     model: "M5",
//     year: 2023,
//     color: "Black",
//     price: 85000,
//     isElectric: false
// };

// let {brand : carBrand, model : carModel , year : productionYear , color , price , isElectric} = car

// console.log(carBrand)
// if(productionYear > 2020){
//     console.log("გამოშვებულია 2020 წლის შემდეგ")
// }else{
//     console.log("არ არის გამოშვებულია 2020 წლის შემდეგ")
// }

// if(isElectric == true){
//     console.log("ელექტროა")
// }else{
//     console.log("არ არის ელექტრო")
// }


/*10)let company = {
    name: "TechVision",
    employees: 45,
    income: 120000,
    expenses: 75000,
    founded: 2018,
    country: "Georgia",
    isActive: true
};


Destructuring-ის გამოყენებით:
1. შეინახე ყველა მნიშვნელობა ცალკეულ ცვლადებში.
2. name შეცვალე companyName-ით.
3. employees შეცვალე employeeCount-ით.
4. income შეცვალე totalIncome-ით.
5. expenses შეცვალე totalExpenses-ით.
6. გამოთვალე კომპანიის მოგება (შემოსავალი მინუს ხარჯები).
7. შეამოწმე, არის თუ არა მოგება 50000-ზე მეტი.
8. შეამოწმე, დაარსებულია თუ არა კომპანია 2020 წლამდე.
9. შეამოწმე, აქტიურია თუ არა კომპანია.
10. გამოიტანე კომპანიის სრული ფინანსური ანგარიში. */


// let company = {
//     name: "TechVision",
//     employees: 45,
//     income: 120000,
//     expenses: 75000,
//     founded: 2018,
//     country: "Georgia",
//     isActive: true
// };

// let {name : companyName, employees : employeeCount , income : totalIncome, expenses : totalExpenses, founded , country , isActive} = company

// console.log(totalIncome - totalExpenses)
// console.log(totalIncome > 5000 ? "მოგება მეტია 5000-ზე" : "მოგება არ არის მეტი 5000-ზე")
// console.log(founded < 2020 ? "დაარსებულია 2020 წლამდე" : "არ არის დაარსებული 2020 წლამდე")
// console.log(isActive == true ? "აქტიურია" : "არ არის აქტიური")
// console.log(totalExpenses)



