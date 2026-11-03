/*1)let student = {
    name: "Giorgi",
    math: 85,
    english: 92,
    physics: 74,
    chemistry: 88,
    history: 60
};

მოთხოვნები:
1. for...in-ის გამოყენებით დაბეჭდე ყველა გასაღები და შესაბამისი მნიშვნელობა.
2. დაითვალე, რამდენ საგანში მიიღო მოსწავლემ 80 ან მეტი ქულა.
3. იპოვე ყველა საგნის ქულების ჯამი.
4. იპოვე ყველაზე დაბალი ქულა და დაბეჭდე მისი შესაბამისი საგნის სახელი.
5. დაითვალე, რამდენ საგანში მიიღო მოსწავლემ 70-ზე ნაკლები ქულა.*/ 

// let student = {
//     name: "Giorgi",
//     math: 85,
//     english: 92,
//     physics: 74,
//     chemistry: 88,
//     history: 60
// }

// let count1 = 0
// let sum = 0
// let lowest = 1000000000
// let lowestsubject = ""
// let count2 = 0

// for(let i in student){
//     console.log(i,student[i])

//     if(typeof student[i] === "number"){
//         if(student[i] >= 80){
//             count1++
//         }

//         sum += student[i]

//         if(student[i] < lowest){
//             lowest = student[i]
//             lowestsubject = i
//         }

//         if(student[i] < 70){
//             count2++
//         }
//     }
// }

// console.log(count1)
// console.log(sum)
// console.log(lowest)
// console.log(lowestsubject)
// console.log(count2)

/*2)let products = {
    laptop: 2500,
    phone: 1800,
    headphones: 250,
    keyboard: 150,
    monitor: 900,
    mouse: 80
};

მოთხოვნები:
1. დაბეჭდე ყველა პროდუქტის სახელი და ფასი.
2. დაითვალე, რამდენი პროდუქტი ღირს 500 ლარზე მეტი.
3. იპოვე ყველა პროდუქტის საერთო ღირებულება.
4. იპოვე ყველაზე ძვირადღირებული პროდუქტი და მისი ფასი.
5. შექმენი ახალი ცარიელი ობიექტი expensiveProducts და for...in-ის გამოყენებით დაამატე მასში მხოლოდ ის პროდუქტები, რომელთა ფასიც 500 ლარზე მეტია.*/ 

// let products = {
//     laptop: 2500,
//     phone: 1800,
//     headphones: 250,
//     keyboard: 150,
//     monitor: 900,
//     mouse: 80
// }

// let count = 0
// let sum = 0
// let highest = 0
// let highestsubject = ""

// let expensiveProducts = {

// }

// for(let i in products){
//     console.log(i,products[i])

//     if(products[i] > 500){
//         count++
//         expensiveProducts[i] = products[i]
//     }

//     sum += products[i]

//     if(products[i] > highest){
//         highest = products[i]
//         highestsubject = i
//     }
// }

// console.log(count)
// console.log(sum)
// console.log(highest)
// console.log(expensiveProducts)

/*3)let user = {
    username: "Goga123",
    age: 19,
    city: "Tbilisi",
    score: 450,
    active: true,
    gamesPlayed: 35
};

მოთხოვნები:
1. დაბეჭდე ყველა გასაღები და მნიშვნელობა.
2. დაითვალე, რამდენი მნიშვნელობაა ტიპით number.
3. დაითვალე, რამდენი გასაღების სახელი შეიცავს 5-ზე მეტ სიმბოლოს.
4. შექმენი ახალი ობიექტი numericInfo, რომელშიც მხოლოდ რიცხვითი მნიშვნელობები მოხვდება.
5. იპოვე ყველა რიცხვითი მნიშვნელობის ჯამი.*/ 

// let user = {
//     username: "Goga123",
//     age: 19,
//     city: "Tbilisi",
//     score: 450,
//     active: true,
//     gamesPlayed: 35
// }

// let count = 0
// let count1 = 0
// let numericInfo = {

// }
// let sum = 0

// for(let i in user){
//     console.log(i,user[i])

//     if(typeof user[i] === "number"){
//         count++
//         numericInfo[i] = user[i]
//         sum += user[i]
//     }

//     if(i.length > 5){
//         count1++
//     }
// }

// console.log(count)
// console.log(count1)
// console.log(numericInfo)
// console.log(sum)


/*4)let exam = {
    Nika: 95,
    Ana: 68,
    Giorgi: 82,
    Mariam: 45,
    Luka: 73,
    Saba: 30,
    Elene: 88
};

მოთხოვნები:
1. for...in-ის გამოყენებით დაბეჭდე თითოეული მოსწავლის სახელი და ქულა.
2. თუ მოსწავლის ქულა 70 ან მეტია, დაბეჭდე "ჩააბარა", სხვა შემთხვევაში — "ვერ ჩააბარა".
3. დაითვალე ჩაბარებული და ვერჩაბარებული მოსწავლეების რაოდენობა.
4. იპოვე ყველაზე მაღალი ქულა და იმ მოსწავლის სახელი, რომელმაც ეს ქულა მიიღო.
5. გამოთვალე ყველა მოსწავლის ქულების საშუალო არითმეტიკული.*/ 

// let exam = {
//     Nika: 95,
//     Ana: 68,
//     Giorgi: 82,
//     Mariam: 45,
//     Luka: 73,
//     Saba: 30,
//     Elene: 88
// }

// let countpassed = 0
// let countfailed = 0
// let highestscore = 0
// let nameh = ""

// let values = Object.values(exam)
// let sum = 0

// for(let i in exam){
//     console.log(i,exam[i])
//     sum += exam[i]

//     if(exam[i] >= 70){
//         console.log("ჩააბარა")
//         countpassed++
//     }else{
//         console.log("ვერ ჩააბარა")
//         countfailed++
//     }

//     if(exam[i] > highestscore){
//         highestscore = exam[i]
//         nameh = i
//     }
// }

// console.log(countpassed)
// console.log(countfailed)
// console.log(highestscore)
// console.log(nameh)
// console.log(sum / values.length)


/*5)let student = {
    math: 85,
    english: 92,
    physics: 67,
    chemistry: 78,
    history: 55,
    biology: 90
};

მოთხოვნები:
1. Object.keys()-ის გამოყენებით მიიღე ყველა საგნის სახელი და შეინახე ცალკე მასივში.
2. Object.values()-ის გამოყენებით მიიღე ყველა ქულა და შეინახე სხვა მასივში.
3. დაბეჭდე საგნების რაოდენობა.
4. დაითვალე, რამდენ საგანში მიიღო მოსწავლემ 80 ან მეტი ქულა.
5. გამოთვალე ყველა ქულის ჯამი.
6. იპოვე ყველაზე მაღალი ქულა და დაბეჭდე შესაბამისი საგნის სახელიც.*/ 

// let student = {
//     math: 85,
//     english: 92,
//     physics: 67,
//     chemistry: 78,
//     history: 55,
//     biology: 90
// }

// let keys = Object.keys(student)
// let values = Object.values(student)

// console.log(values.length)

// let count = 0
// let sum = 0
// let highestscore = 0
// let highestsubject = ""

// for(let i in student){
//     if(student[i] >= 80){
//         count++
//     }
//     sum += student[i]

//     if(student[i] > highestscore){
//         highestscore = student[i]
//         highestsubject = i
//     }
// }

// console.log(count)
// console.log(sum)
// console.log(highestscore)
// console.log(highestsubject)

/*6)let employees = {
    Nika: 2500,
    Ana: 3200,
    Luka: 1800,
    Mariam: 4000,
    Saba: 2200,
    Elene: 3500
};

მოთხოვნები:
1. მიიღე თანამშრომლების სახელების მასივი და ხელფასების მასივი.
2. დაბეჭდე თანამშრომლების საერთო რაოდენობა.
3. დაითვალე, რამდენი თანამშრომლის ხელფასია 3000 ლარზე მეტი.
4. გამოთვალე ხელფასების საშუალო არითმეტიკული.
5. იპოვე ყველაზე დაბალი ხელფასი.
6. იპოვე იმ თანამშრომლის სახელი, რომელსაც ყველაზე მაღალი ხელფასი აქვს.*/ 

// let employees = {
//     Nika: 2500,
//     Ana: 3200,
//     Luka: 1800,
//     Mariam: 4000,
//     Saba: 2200,
//     Elene: 3500
// }

// let keys = Object.keys(employees)
// let values = Object.values(employees)

// console.log(keys.length)

// let count = 0
// let sum = 0
// let avarage = 0
// let lowest = employees.Nika
// let highestscore = 0
// let highestscorename = ""


// for(let i in employees){
//     if(employees[i] > 3000){
//         count++ 
//     }

//     sum += employees[i]
//     avarage += sum / values.length

//     if(employees[i] < lowest){
//         lowest = employees[i]
//     }

//     if(employees[i] > highestscore){
//         highestscore = employees[i]
//         highestscorename = i
//     }
// }

// console.log(count)
// console.log(avarage)
// console.log(lowest)
// console.log(highestscorename)

/*7)let user = {
    username: "Shadow123",
    age: 21,
    city: "Tbilisi",
    score: 750,
    active: true,
    gamesPlayed: 45,
    premium: false
};

მოთხოვნები:
1. Object.keys()-ით მიიღე ყველა გასაღები.
2. Object.values()-ით მიიღე ყველა მნიშვნელობა.
3. დაითვალე, რამდენი გასაღების სახელი შეიცავს 5-ზე მეტ სიმბოლოს.
4. დაითვალე, რამდენი მნიშვნელობაა ტიპით number.
5. დაითვალე, რამდენი მნიშვნელობაა ტიპით boolean.
6. შექმენი ახალი ობიექტი numberInfo, რომელშიც მხოლოდ რიცხვითი მნიშვნელობები მოხვდება.*/ 

// let user = {
//     username: "Shadow123",
//     age: 21,
//     city: "Tbilisi",
//     score: 750,
//     active: true,
//     gamesPlayed: 45,
//     premium: false
// }

// let keys = Object.keys(user)
// let value = Object.values(user)

// let count1 = 0
// let count2 = 0
// let count3 = 0

// let numberInfo = {

// }

// for(let i in user){
//     if(i.length > 5){
//         count1++
//     }

//     if(typeof user[i] === "number"){
//         count2++
//         numberInfo[i] = user[i]
//     }

//     if(typeof user[i] === "boolean"){
//         count3++
//     }
// }

// console.log(count1)
// console.log(count2)
// console.log(count3)
// console.log(numberInfo)


/*8)let company = {
    marketing: 12000,
    development: 35000,
    design: 9000,
    support: 7000,
    sales: 18000,
    research: 15000
};

მოთხოვნები:
1. მიიღე განყოფილებების სახელების მასივი და ბიუჯეტების მასივი.
2. გამოთვალე კომპანიის მთლიანი ბიუჯეტი.
3. დაითვალე, რამდენ განყოფილებას აქვს 15000 ლარი ან მეტი.
4. იპოვე ყველაზე დიდი ბიუჯეტის მქონე განყოფილება.
5. იპოვე ყველაზე პატარა ბიუჯეტის მქონე განყოფილება.*/ 

// let company = {
//     marketing: 12000,
//     development: 35000,
//     design: 9000,
//     support: 7000,
//     sales: 18000,
//     research: 15000
// }

// let sum = 0
// let count = 0
// let max = 0
// let maxname = ""

// let min = 0
// let minname = ""

// for(let i in company){
//     console.log(i,company[i])

//     sum += company[i]

//     if(company[i] >= 15000){
//         count++
//     }

//     if(company[i] > max){
//         max = company[i]
//         maxname = i
//     }

//     if(company[i] < min){
//         min = company[i]
//         minname = i
//     }
// }

// console.log(sum)
// console.log(count)
// console.log(maxname)
// console.log(minname)


















