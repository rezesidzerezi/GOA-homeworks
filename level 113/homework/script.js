/*1)
let students = [
    { name: "Nika", age: 17, score: 85, active: true },
    { name: "Ana", age: 19, score: 45, active: false },
    { name: "Giorgi", age: 21, score: 92, active: true },
    { name: "Mariam", age: 18, score: 67, active: true },
    { name: "Luka", age: 16, score: 38, active: false },
    { name: "Saba", age: 20, score: 74, active: true }
];


მოთხოვნები:
1. filter()-ის გამოყენებით შექმენი ახალი სია, სადაც მხოლოდ აქტიური სტუდენტები იქნებიან.
2. forEach()-ით გამოიტანე ყველა სტუდენტის სახელი და ქულა.
3. map()-ით შექმენი ახალი სია, სადაც თითოეული ელემენტი იქნება სტუდენტის სახელი და მისი სტატუსი (Passed ან Failed). ჩათვალე, რომ ჩაბარების ზღვარია 50 ქულა.
4. findIndex()-ით იპოვე სტუდენტის ინდექსი, რომლის სახელია "Mariam".
5. some()-ით შეამოწმე, არსებობს თუ არა სტუდენტი, რომელსაც 90-ზე მეტი ქულა აქვს.
6. every()-ით შეამოწმე, ყველა სტუდენტი არის თუ არა 16 წლის ან უფროსი.*/ 

// let students = [
//     { name: "Nika", age: 17, score: 85, active: true },
//     { name: "Ana", age: 19, score: 45, active: false },
//     { name: "Giorgi", age: 21, score: 92, active: true },
//     { name: "Mariam", age: 18, score: 67, active: true },
//     { name: "Luka", age: 16, score: 38, active: false },
//     { name: "Saba", age: 20, score: 74, active: true }
// ]

// let newstudents = students.filter(i=>i.active)

// console.log(newstudents)

// students.forEach(i=>console.log(i.name,i.score))


// let newstudents2 = students.map(i=>{
//     return{
//         name: i.name,
//         status: i.score > 50 ? "passed" : "failed"
//     }
// })

// console.log(newstudents2)

// let newstudents3 = students.findIndex(i=>i.name === "Mariam")

// console.log(newstudents3)

// let newstudents4 = students.some(i => i.score > 90)

// console.log(newstudents4)

// let newstudents5 = students.every(i => i.age >= 16)

// console.log(newstudents5)


/*2)let products = [
    { name: "Laptop", price: 2500, stock: 5, category: "Electronics" },
    { name: "Phone", price: 1800, stock: 0, category: "Electronics" },
    { name: "Book", price: 40, stock: 12, category: "Education" },
    { name: "Headphones", price: 250, stock: 8, category: "Electronics" },
    { name: "Notebook", price: 15, stock: 0, category: "Education" },
    { name: "Monitor", price: 900, stock: 3, category: "Electronics" }
];


მოთხოვნები:
1. filter()-ით მიიღე მხოლოდ ის პროდუქტები, რომლებიც მარაგშია.
2. forEach()-ით გამოიტანე თითოეული პროდუქტის სახელი და ფასი.
3. map()-ით შექმენი ახალი სია, სადაც ყველა პროდუქტის ფასი გაზრდილი იქნება 100 ლარით.
4. findIndex()-ით იპოვე "Headphones"-ის ინდექსი.
5. some()-ით შეამოწმე, არის თუ არა პროდუქტი, რომლის ფასიც 2000 ლარზე მეტია.
6. every()-ით შეამოწმე, ყველა პროდუქტს აქვს თუ არა მარაგში მინიმუმ ერთი ცალი.*/ 

// let products = [
//     { name: "Laptop", price: 2500, stock: 5, category: "Electronics" },
//     { name: "Phone", price: 1800, stock: 0, category: "Electronics" },
//     { name: "Book", price: 40, stock: 12, category: "Education" },
//     { name: "Headphones", price: 250, stock: 8, category: "Electronics" },
//     { name: "Notebook", price: 15, stock: 0, category: "Education" },
//     { name: "Monitor", price: 900, stock: 3, category: "Electronics" }
// ]

// let newp1 = products.filter(i=>i.stock > 0)

// console.log(newp1)

// products.forEach(i=>console.log(i.name,i.price))

// let newp2 = products.map(i=>i.price + 100)

// console.log(newp2)

// let newp3 = products.findIndex(i=>i.name === "Headphones")

// console.log(newp3)

// let newp4 = products.some(i=> i.stock > 0 && i.price > 2000)

// console.log(newp4)

// let newp5 = products.every(i=> i.stock > 0)

// console.log(newp5)

/*3)let characters = [
    { name: "Shadow", health: 85, level: 10, alive: true },
    { name: "Dragon", health: 0, level: 15, alive: false },
    { name: "Knight", health: 60, level: 7, alive: true },
    { name: "Wizard", health: 100, level: 20, alive: true },
    { name: "Hunter", health: 25, level: 5, alive: true },
    { name: "Ghost", health: 0, level: 12, alive: false }
];


მოთხოვნები:
1. filter()-ით შექმენი ახალი სია, სადაც მხოლოდ ცოცხალი პერსონაჟები იქნებიან.
2. forEach()-ით გამოიტანე თითოეული პერსონაჟის სახელი და Health.
3. map()-ით შექმენი ახალი სია, სადაც თითოეულ პერსონაჟს ექნება სახელი და ახალი Health, რომელიც იქნება არსებული Health + 20.
4. findIndex()-ით იპოვე "Wizard" პერსონაჟის ინდექსი.
5. some()-ით შეამოწმე, არსებობს თუ არა პერსონაჟი, რომლის Level 18-ზე მეტია.
6. every()-ით შეამოწმე, ყველა პერსონაჟი ცოცხალია თუ არა.*/ 

// let characters = [
//     { name: "Shadow", health: 85, level: 10, alive: true },
//     { name: "Dragon", health: 0, level: 15, alive: false },
//     { name: "Knight", health: 60, level: 7, alive: true },
//     { name: "Wizard", health: 100, level: 20, alive: true },
//     { name: "Hunter", health: 25, level: 5, alive: true },
//     { name: "Ghost", health: 0, level: 12, alive: false }
// ]

// let new1 = characters.filter(i=>i.alive === true)

// console.log(new1)

// characters.forEach(i=>console.log(i.name,i.health))

// let new2 = characters.map(i=>{
//     return{
//         name : i.name,
//         Health : i.health + 20
//     }
// })

// console.log(new2)

// let new3 = characters.findIndex(i=> i.name === "Wizard")

// console.log(new3)

// let new4 = characters.some(i=> i.level > 18 && i.alive === true)

// console.log(new4)

// let new5 = characters.every(i=>i.alive === true)

// console.log(new5)

/*4)let employees = [
    { name: "Gio", salary: 2500, experience: 3, department: "IT" },
    { name: "Nino", salary: 1800, experience: 1, department: "HR" },
    { name: "Luka", salary: 3200, experience: 5, department: "IT" },
    { name: "Ana", salary: 2100, experience: 2, department: "Marketing" },
    { name: "Saba", salary: 4000, experience: 7, department: "IT" },
    { name: "Mariam", salary: 1500, experience: 1, department: "HR" }
];


მოთხოვნები:
1. filter()-ით მიიღე მხოლოდ IT დეპარტამენტის თანამშრომლები.
2. forEach()-ით გამოიტანე თითოეული თანამშრომლის სახელი და ხელფასი.
3. map()-ით შექმენი ახალი სია, სადაც თითოეულ თანამშრომელს ექნება სახელი და გამოცდილების მიხედვით დამატებული ბონუსი:
    - თუ გამოცდილება 5 ან მეტია, ბონუსი არის 500.
    - სხვა შემთხვევაში ბონუსი არის 200.
4. findIndex()-ით იპოვე თანამშრომელი, რომლის ხელფასი 4000-ია.
5. some()-ით შეამოწმე, არსებობს თუ არა თანამშრომელი, რომელსაც 6 წელზე მეტი გამოცდილება აქვს.
6. every()-ით შეამოწმე, ყველა თანამშრომლის ხელფასი 1000-ზე მეტია თუ არა.*/ 

// let employees = [
//     { name: "Gio", salary: 2500, experience: 3, department: "IT" },
//     { name: "Nino", salary: 1800, experience: 1, department: "HR" },
//     { name: "Luka", salary: 3200, experience: 5, department: "IT" },
//     { name: "Ana", salary: 2100, experience: 2, department: "Marketing" },
//     { name: "Saba", salary: 4000, experience: 7, department: "IT" },
//     { name: "Mariam", salary: 1500, experience: 1, department: "HR" }
// ]

// let new1 = employees.filter(i=>i.department === "IT")

// console.log(new1)

// employees.forEach(i=>console.log(i.name,i.salary))

// let new2 = employees.map(i=>{
//     if(i.experience >= 5){
//         return{
//             name : i.name,
//             salary : i.salary + 500
//         }
//     }else{
//         return{
//             name : i.name,
//             salary : i.salary + 200
//         }
//     }
// })

// console.log(new2)

// let new3 = employees.findIndex(i=> i.salary == 4000)

// console.log(new3)

// let new4 = employees.some(i=>i.experience > 6)

// console.log(new4)

// let new5 = employees.every(i=>i.salary > 1000)

// console.log(new5)




