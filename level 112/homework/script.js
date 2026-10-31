/*1)let employees = [
    { name: "Giorgi", salary: 2500, department: "IT" },
    { name: "Nino", salary: 1800, department: "HR" },
    { name: "David", salary: 3200, department: "IT" },
    { name: "Maka", salary: 1500, department: "Sales" },
    { name: "Saba", salary: 2800, department: "Sales" }
];


1. გამოიტანეთ ყველა თანამშრომლის სახელი და ხელფასი.
2. გამოიტანეთ მხოლოდ IT განყოფილების თანამშრომლები.
3. გამოიტანეთ იმ თანამშრომლების სახელები, რომელთა ხელფასი 2000-ზე მეტია.
4. დაითვალეთ, რამდენი თანამშრომელია Sales განყოფილებაში.
5. გამოთვალეთ ყველა თანამშრომლის ხელფასების ჯამი.*/ 

// let employees = [
//     { name: "Giorgi", salary: 2500, department: "IT" },
//     { name: "Nino", salary: 1800, department: "HR" },
//     { name: "David", salary: 3200, department: "IT" },
//     { name: "Maka", salary: 1500, department: "Sales" },
//     { name: "Saba", salary: 2800, department: "Sales" }
// ]

// let count = 0
// let sum = 0

// for(let i of employees){
//     console.log(i.name, i.salary)

//     if(i.department === "IT"){
//         console.log(i.name)
//     }

//     if(i.salary > 2000){
//         console.log(i.name)
//     }

//     if(i.department === "Sales"){
//         count++
//     }

//     sum += i.salary
// }

// console.log(count)
// console.log(sum)

/*2)let books = [
    { title: "Harry Potter", price: 35, pages: 320 },
    { title: "The Hobbit", price: 28, pages: 280 },
    { title: "Atomic Habits", price: 45, pages: 250 },
    { title: "The Alchemist", price: 20, pages: 190 },
    { title: "Clean Code", price: 55, pages: 450 }
];


1. გამოიტანეთ ყველა წიგნის სათაური.
2. გამოიტანეთ იმ წიგნების სათაურები, რომელთა ფასი 30-ზე ნაკლებია.
3. გამოიტანეთ იმ წიგნების სათაურები, რომელთა გვერდების რაოდენობა 300-ზე მეტია.
4. დაითვალეთ, რამდენი წიგნია 40-ზე ძვირი.
5. გამოთვალეთ ყველა წიგნის ფასების ჯამი.
6. შექმენით ცარიელი მასივი longBooks და დაამატეთ წიგნები, რომლებსაც 300-ზე მეტი გვერდი აქვთ.*/ 

// let books = [
//     { title: "Harry Potter", price: 35, pages: 320 },
//     { title: "The Hobbit", price: 28, pages: 280 },
//     { title: "Atomic Habits", price: 45, pages: 250 },
//     { title: "The Alchemist", price: 20, pages: 190 },
//     { title: "Clean Code", price: 55, pages: 450 }
// ]

// let count = 0
// let sum = 0
// let longBooks = []


// for(let i of books){
//     console.log(i.title)

//     if(i.price < 30){
//         console.log(i.title)
//     }

//     if(i.pages > 300){
//         console.log(i.title)
//         longBooks.push(i.title)
//     }

//     if(i.price > 40){
//         count++
//     }

//     sum += i.price
// }


// console.log(count)
// console.log(sum)
// console.log(longBooks)


/*3)let players = [
    { name: "Sandro", sport: "Football", goals: 12 },
    { name: "Elene", sport: "Tennis", goals: 8 },
    { name: "Lasha", sport: "Football", goals: 19 },
    { name: "Tako", sport: "Basketball", goals: 15 },
    { name: "Data", sport: "Football", goals: 6 }
];


1. გამოიტანეთ ყველა სპორტსმენის სახელი და სპორტის სახეობა.
2. გამოიტანეთ მხოლოდ ფეხბურთელების სახელები.
3. გამოიტანეთ იმ სპორტსმენების სახელები, რომლებსაც 10-ზე მეტი გოლი აქვთ.
4. დაითვალეთ, რამდენი სპორტსმენი თამაშობს ფეხბურთს.
5. გამოთვალეთ ყველა სპორტსმენის გოლების ჯამი.
6. შექმენით ცარიელი მასივი topPlayers და დაამატეთ მასში სპორტსმენები, რომლებსაც 10 ან მეტი გოლი აქვთ.*/ 

// let players = [
//     { name: "Sandro", sport: "Football", goals: 12 },
//     { name: "Elene", sport: "Tennis", goals: 8 },
//     { name: "Lasha", sport: "Football", goals: 19 },
//     { name: "Tako", sport: "Basketball", goals: 15 },
//     { name: "Data", sport: "Football", goals: 6 }
// ]

// let count = 0
// let sum = 0
// let topPlayers = []

// for(let i of players){
//     console.log(i.name,i.sport)

//     if(i.sport === "Football"){
//         console.log(i.name)
//         count++
//     }

//     if(i.goals >= 10){
//         console.log(i.name)
//         topPlayers.push(i.name)
//     }

//     sum += i.goals
// }

// console.log(count)
// console.log(sum)


/*4)let orders = [
    { id: 101, customer: "Nika", total: 250, status: "delivered" },
    { id: 102, customer: "Ana", total: 80, status: "pending" },
    { id: 103, customer: "Gio", total: 420, status: "delivered" },
    { id: 104, customer: "Mariam", total: 150, status: "cancelled" },
    { id: 105, customer: "Luka", total: 310, status: "pending" }
];


1. გამოიტანეთ ყველა შეკვეთის ნომერი და მომხმარებლის სახელი.
2. გამოიტანეთ მხოლოდ დასრულებული (delivered) შეკვეთები.
3. გამოიტანეთ იმ შეკვეთების ნომრები, რომელთა ღირებულება 200-ზე მეტია.
4. დაითვალეთ, რამდენი შეკვეთაა pending სტატუსით.
5. გამოთვალეთ ყველა შეკვეთის საერთო ღირებულება.
6. შექმენით ცარიელი მასივი expensiveOrders და მასში დაამატეთ შეკვეთები, რომელთა ღირებულება 200-ზე მეტია და სტატუსი delivered არის.*/ 

// let orders = [
//     { id: 101, customer: "Nika", total: 250, status: "delivered" },
//     { id: 102, customer: "Ana", total: 80, status: "pending" },
//     { id: 103, customer: "Gio", total: 420, status: "delivered" },
//     { id: 104, customer: "Mariam", total: 150, status: "cancelled" },
//     { id: 105, customer: "Luka", total: 310, status: "pending" }
// ]

// let count = 0
// let sum = 0
// let expensiveOrders = []

// for(let i of orders){
//     console.log(i.id,i.customer)

//     if(i.status === "delivered"){
//         console.log(i.id)
//     }

//     if(i.total > 200){
//         console.log(i.id)
//     }

//     if(i.status === "pending"){
//         count++
//     }

//     sum += i.total

//     if(i.total > 200 && i.status === "delivered"){
//         expensiveOrders.push(i)
//     }

// }

// console.log(count)
// console.log(sum)
// console.log(expensiveOrders)

/*5)let products = [
    { name: "Laptop", price: 2500, stock: 8, rating: 4.8 },
    { name: "Mouse", price: 80, stock: 25, rating: 4.2 },
    { name: "Keyboard", price: 180, stock: 12, rating: 4.7 },
    { name: "Monitor", price: 900, stock: 0, rating: 4.9 },
    { name: "Headphones", price: 350, stock: 15, rating: 4.6 },
    { name: "Tablet", price: 1200, stock: 5, rating: 3.9 },
    { name: "Webcam", price: 220, stock: 10, rating: 4.5 }
];


მოთხოვნები:
1. filter()-ის გამოყენებით შექმენი ახალი სია, რომელშიც მოხვდებიან პროდუქტები, რომელთა ფასი 200-ზე მეტია, მარაგში მინიმუმ 5 ცალია და რეიტინგი 4.5 ან მეტია.
2. მიღებულ სიაზე გამოიყენე forEach() და გამოიტანე თითოეული პროდუქტის სახელი, ფასი და რეიტინგი.
3. თითოეული პროდუქტისთვის გამოიტანე შეტყობინება შემდეგი ფორმატით:
Laptop costs 2500 GEL, Rating: 4.8


4. ბოლოს გამოიტანე გაფილტრული პროდუქტების რაოდენობა.*/ 

// let products = [
//     { name: "Laptop", price: 2500, stock: 8, rating: 4.8 },
//     { name: "Mouse", price: 80, stock: 25, rating: 4.2 },
//     { name: "Keyboard", price: 180, stock: 12, rating: 4.7 },
//     { name: "Monitor", price: 900, stock: 0, rating: 4.9 },
//     { name: "Headphones", price: 350, stock: 15, rating: 4.6 },
//     { name: "Tablet", price: 1200, stock: 5, rating: 3.9 },
//     { name: "Webcam", price: 220, stock: 10, rating: 4.5 }
// ]

// let newproducts = products.filter(i =>{
//     if(i.price > 200 && i.stock >= 5 && i.rating >= 4.5){
//         return i
//     }
// })

// console.log(newproducts)

// newproducts.forEach(i =>{
//     console.log(i.name,i.price,i.rating)

//     console.log(i.name + " costs " + i.price + " GEL, " + "Rating: " + i.rating)
// })

// console.log(newproducts.length)

/*6)let products = [
    { name: "Laptop", price: 2500, rating: 4.8 },
    { name: "Mouse", price: 80, rating: 3.5 },
    { name: "Keyboard", price: 180, rating: 4.6 },
    { name: "Monitor", price: 900, rating: 4.2 },
    { name: "Headphones", price: 350, rating: 4.9 },
    { name: "Tablet", price: 1200, rating: 3.8 }
];


მოთხოვნები:
1. filter()-ით შეარჩიე პროდუქტები, რომელთა ფასი 100 ლარზე მეტია.
2. forEach()-ით თითოეული შერჩეული პროდუქტის სახელი და ფასი გამოიტანე.
3. Ternary operator-ის გამოყენებით შეამოწმე რეიტინგი: თუ რეიტინგი 4.5 ან მეტია, გამოიტანე "Excellent", სხვა შემთხვევაში — "Good".
4. თითოეული პროდუქტისთვის გამოიტანე სახელი, ფასი და შეფასება.*/ 

// let products = [
//     { name: "Laptop", price: 2500, rating: 4.8 },
//     { name: "Mouse", price: 80, rating: 3.5 },
//     { name: "Keyboard", price: 180, rating: 4.6 },
//     { name: "Monitor", price: 900, rating: 4.2 },
//     { name: "Headphones", price: 350, rating: 4.9 },
//     { name: "Tablet", price: 1200, rating: 3.8 }
// ]

// let newproducts = products.filter(i =>{
//     if(i.price > 100){
//         return i
//     }
// })

// console.log(newproducts)

// newproducts.forEach(i=>{
//     console.log(i.name,i.price)
//     i.rating >= 4.5 ? console.log("Excellent") : console.log("Good")
//     console.log(i.name,i.price,i.rating)
// })

/*7)let students = [
    { name: "Nika", score: 95, attendance: 92 },
    { name: "Mariam", score: 65, attendance: 85 },
    { name: "Giorgi", score: 82, attendance: 70 },
    { name: "Ana", score: 45, attendance: 95 },
    { name: "Luka", score: 90, attendance: 88 },
    { name: "Elene", score: 75, attendance: 96 }
];


მოთხოვნები:
1. filter()-ით შეარჩიე სტუდენტები, რომელთა ქულა 70 ან მეტია.
2. forEach()-ით თითოეული სტუდენტისთვის გამოიტანე სახელი და ქულა.
3. Ternary operator-ით განსაზღვრე შედეგი:
    - თუ ქულა 90 ან მეტია — "Excellent";
    - სხვა შემთხვევაში — "Passed".
4. მეორე ternary operator-ით განსაზღვრე დასწრების სტატუსი:
    - თუ დასწრება 90 ან მეტია — "Good attendance";
    - სხვა შემთხვევაში — "Low attendance".
5. გამოიტანე ყველა ინფორმაცია ერთ შეტყობინებაში.
მაგალითი:
Nika - Score: 95 - Excellent - Good attendance
Giorgi - Score: 82 - Passed - Low attendance*/ 

// let students = [
//     { name: "Nika", score: 95, attendance: 92 },
//     { name: "Mariam", score: 65, attendance: 85 },
//     { name: "Giorgi", score: 82, attendance: 70 },
//     { name: "Ana", score: 45, attendance: 95 },
//     { name: "Luka", score: 90, attendance: 88 },
//     { name: "Elene", score: 75, attendance: 96 }
// ]

// let newstudents = students.filter(i => i.score > 70)

// console.log(newstudents)

// newstudents.forEach(i =>{
//     console.log(i.name,i.score)

//     i.score >= 90 ? console.log("Excellent") : console.log("Passed")

//     i.attendance >= 90 ? console.log("Good attendance") : console.log("Low attendance")

//     console.log(`${i.name} - Score: ${i.score} - ${i.score >= 90 ? "Excellent" : "Passed"} - ${i.attendance >= 90 ?"Good attendance" : "Low attendance"}`)
// })

/*8)let employees = [
    { name: "Nika", department: "IT", salary: 3500, experience: 4 },
    { name: "Ana", department: "HR", salary: 2200, experience: 2 },
    { name: "Giorgi", department: "IT", salary: 2800, experience: 5 },
    { name: "Mariam", department: "Finance", salary: 4000, experience: 6 },
    { name: "Luka", department: "IT", salary: 4200, experience: 1 },
    { name: "Elene", department: "HR", salary: 3000, experience: 4 }
];


მოთხოვნები:
1. filter()-ით შეარჩიე IT დეპარტამენტის თანამშრომლები, რომელთა ხელფასი 2500 ლარზე მეტია.
2. forEach()-ით გამოიტანე თითოეული შერჩეული თანამშრომლის ინფორმაცია.
3. Ternary operator-ით განსაზღვრე ბონუსის სტატუსი:
    - თუ გამოცდილება 3 ან მეტი წელია — "Bonus eligible";
    - სხვა შემთხვევაში — "No bonus".
4. if/else-ის გამოყენებით დამატებით შეამოწმე ხელფასი:
    - თუ ხელფასი 4000 ან მეტია, გამოიტანე "High salary";
    - სხვა შემთხვევაში — "Regular salary".
მაგალითი:
Nika - Salary: 3500 - Bonus eligible - Regular salary
Luka - Salary: 4200 - No bonus - High salary*/ 

// let employees = [
//     { name: "Nika", department: "IT", salary: 3500, experience: 4 },
//     { name: "Ana", department: "HR", salary: 2200, experience: 2 },
//     { name: "Giorgi", department: "IT", salary: 2800, experience: 5 },
//     { name: "Mariam", department: "Finance", salary: 4000, experience: 6 },
//     { name: "Luka", department: "IT", salary: 4200, experience: 1 },
//     { name: "Elene", department: "HR", salary: 3000, experience: 4 }
// ]

// let newemployees = employees.filter(i =>{
//     if(i.department === "IT" && i.salary > 2500){
//         return i
//     }
// })

// newemployees.forEach(i =>{
//     console.log(i)
//     i.experience >= 3 ? console.log("Bonus eligible") : console.log("No bonus")

//     if(i.salary >= 4000){
//         console.log("High salary")
//     }else{
//         console.log("Regular salary")
//     }

//     console.log(`${i.name} - Salary: ${i.salary} - ${i.experience >= 3 ? "Bonus eligible" : "No bonus"} - ${i.salary >= 4000 ? "High salary" : "Regular salary"}`)
// })


/*9)let characters = [
    { name: "Shadow", level: 15, health: 85, damage: 70 },
    { name: "Blaze", level: 8, health: 95, damage: 45 },
    { name: "Storm", level: 20, health: 60, damage: 90 },
    { name: "Frost", level: 12, health: 80, damage: 65 },
    { name: "Titan", level: 25, health: 100, damage: 55 },
    { name: "Raven", level: 18, health: 40, damage: 85 }
];


მოთხოვნები:
1. filter()-ით შეარჩიე პერსონაჟები, რომელთა დონე მინიმუმ 10-ია და ზიანი 60 ან მეტია.
2. forEach()-ით გამოიტანე თითოეული შერჩეული პერსონაჟის ინფორმაცია.
3. Ternary operator-ით განსაზღვრე ჯანმრთელობის სტატუსი:
    - თუ ჯანმრთელობა 70 ან მეტია — "Healthy";
    - სხვა შემთხვევაში — "Weak".
4. მეორე ternary operator-ით განსაზღვრე ძალის სტატუსი:
    - თუ ზიანი 80 ან მეტია — "Powerful";
    - სხვა შემთხვევაში — "Normal".
5. თუ პერსონაჟის ჯანმრთელობა 50-ზე ნაკლებია, if/else-ის გამოყენებით გამოიტანე "Warning: Low health!", სხვა შემთხვევაში — "Health is stable".
მაგალითი:
Shadow - Healthy - Normal - Health is stable
Storm - Weak - Powerful - Health is stable*/ 

// let characters = [
//     { name: "Shadow", level: 15, health: 85, damage: 70 },
//     { name: "Blaze", level: 8, health: 95, damage: 45 },
//     { name: "Storm", level: 20, health: 60, damage: 90 },
//     { name: "Frost", level: 12, health: 80, damage: 65 },
//     { name: "Titan", level: 25, health: 100, damage: 55 },
//     { name: "Raven", level: 18, health: 40, damage: 85 }
// ]

// let newcharacters = characters.filter(i=>{
//     if(i.level >= 10 && i.damage >= 60){
//         return i
//     }
// })

// newcharacters.forEach(i=>{
//     console.log(i)

//     i.health >= 70 ? console.log("Healthy") : console.log("Weak")

//     i.damage >= 80 ? console.log("Powerful") : console.log("Normal")

//     if(i.health >= 50){
//         console.log("Warning: Low health!")
//     }else{
//         console.log("Health is stable")
//     }

//     console.log(`${i.name} - ${i.health >= 70 ? "Healthy" : "Weak"} - ${i.damage >= 80 ? "Powerful" : "Normal"} - ${i.health >= 50 ? "Warning: Low health!" : "Health is stable"}`)
// })

/*10)let athletes = [
    { name: "Nika", sport: "Swimming", age: 21, medals: 5, score: 92 },
    { name: "Mariam", sport: "Tennis", age: 19, medals: 3, score: 85 },
    { name: "Giorgi", sport: "Swimming", age: 24, medals: 7, score: 88 },
    { name: "Ana", sport: "Running", age: 17, medals: 2, score: 95 },
    { name: "Luka", sport: "Tennis", age: 22, medals: 6, score: 78 },
    { name: "Elene", sport: "Swimming", age: 20, medals: 4, score: 96 },
    { name: "Saba", sport: "Running", age: 25, medals: 8, score: 82 },
    { name: "Data", sport: "Tennis", age: 23, medals: 5, score: 91 }
];


მოთხოვნები:
1. filter()-ით შეარჩიე სპორტსმენები, რომლებიც ცურვაში ("Swimming") მონაწილეობენ და აქვთ მინიმუმ 4 მედალი.
2. forEach()-ით გამოიტანე თითოეული შერჩეული სპორტსმენის სახელი, ასაკი, მედლების რაოდენობა და ქულა.
3. Ternary operator-ით განსაზღვრე შედეგი:
    - თუ ქულა 90 ან მეტია — "Excellent";
    - თუ ქულა 80 ან მეტია — "Good";
    - სხვა შემთხვევაში — "Needs improvement".
    ამისთვის გამოიყენე ჩაშენებული ternary operator.
4. if/else-ით შეამოწმე, აქვს თუ არა სპორტსმენს 5 ან მეტი მედალი. შესაბამისი შეტყობინება გამოიტანე.
5. forEach()-ის შიგნით ცვლადში დააგროვე ყველა გაფილტრული სპორტსმენის ქულების ჯამი.
6. ბოლოს გამოიტანე:
    - გაფილტრული სპორტსმენების რაოდენობა;
    - მათი ქულების ჯამი.*/ 

// let athletes = [
//     { name: "Nika", sport: "Swimming", age: 21, medals: 5, score: 92 },
//     { name: "Mariam", sport: "Tennis", age: 19, medals: 3, score: 85 },
//     { name: "Giorgi", sport: "Swimming", age: 24, medals: 7, score: 88 },
//     { name: "Ana", sport: "Running", age: 17, medals: 2, score: 95 },
//     { name: "Luka", sport: "Tennis", age: 22, medals: 6, score: 78 },
//     { name: "Elene", sport: "Swimming", age: 20, medals: 4, score: 96 },
//     { name: "Saba", sport: "Running", age: 25, medals: 8, score: 82 },
//     { name: "Data", sport: "Tennis", age: 23, medals: 5, score: 91 }
// ]

// let newathletes = athletes.filter(i=>{
//     if(i.sport === "Swimming" && i.medals >= 4){
//         return i 
//     }
// })

// let sum = 0

// newathletes.forEach(i=>{
//     console.log(i)

//     i.score >= 90 ? console.log("Excellent") : i.score >= 80 ? console.log("Good") : console.log("Needs improvement")

//     if(i.medals >= 5){
//         console.log("More than 5 medals")
//     }else{
//         console.log("Less than 5 medals")
//     }

//     sum += i.score
// })

// console.log(sum)
// console.log(newathletes.length)












