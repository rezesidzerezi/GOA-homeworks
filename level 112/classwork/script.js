/*let products = [
    { name: "Laptop", price: 2500, category: "Electronics", inStock: true },
    { name: "Phone", price: 1800, category: "Electronics", inStock: false },
    { name: "Book", price: 40, category: "Education", inStock: true },
    { name: "Headphones", price: 150, category: "Electronics", inStock: true },
    { name: "Notebook", price: 15, category: "Education", inStock: false }
];

1)forEach()-ის გამოყენებით გამოიტანეთ თითოეული პროდუქტის სახელი.

2)გამოიტანეთ თითოეული პროდუქტის სახელი და ფასი შემდეგი ფორმატით:
Laptop - 2500
Phone - 1800
Book - 40

3)გამოიტანეთ იმ პროდუქტების სახელები, რომელთა inStock მნიშვნელობაც true-ია.

4)გამოიტანეთ იმ პროდუქტების სახელები და ფასები, რომელთა ფასი 1000-ზე მეტია.

5)გამოიტანეთ მხოლოდ იმ პროდუქტების სახელები, რომელთა კატეგორიაა "Education".

6)გამოთვალეთ ყველა პროდუქტის ფასების ჯამი.*/ 

// let products = [
//     { name: "Laptop", price: 2500, category: "Electronics", inStock: true },
//     { name: "Phone", price: 1800, category: "Electronics", inStock: false },
//     { name: "Book", price: 40, category: "Education", inStock: true },
//     { name: "Headphones", price: 150, category: "Electronics", inStock: true },
//     { name: "Notebook", price: 15, category: "Education", inStock: false }
// ]

// sum = 0

// products.forEach((item)=>{
//     console.log(item.name)

//     console.log(item.name + " - " + item.price)

//     if(item.inStock){
//         console.log(item.name)
//     }

//     if(item.price > 1000){
//         console.log(item.name + " - " + item.price)
//     }

//     if(item.category === "Education"){
//         console.log(item.name)
//     }

//     sum += item.price

// })

// console.log(sum)


/*2)let students = [
    { name: "Nika", age: 17, score: 92, attendance: 95 },
    { name: "Mariam", age: 19, score: 68, attendance: 80 },
    { name: "Giorgi", age: 18, score: 85, attendance: 90 },
    { name: "Ana", age: 16, score: 45, attendance: 60 },
    { name: "Luka", age: 20, score: 78, attendance: 88 },
    { name: "Saba", age: 17, score: 96, attendance: 98 },
    { name: "Elene", age: 19, score: 55, attendance: 75 },
    { name: "Data", age: 18, score: 89, attendance: 92 }
];

მოთხოვნები:
1. filter() მეთოდის გამოყენებით შექმენი ახალი სია, რომელშიც მოხვდებიან მხოლოდ ის სტუდენტები, რომელთა ქულა 80 ან მეტია და დასწრება 90 ან მეტია.
2. მიღებულ სიაზე გამოიყენე forEach() და თითოეული სტუდენტისთვის კონსოლში გამოიტანე შემდეგი ინფორმაცია:
    - სახელი
    - ასაკი
    - ქულა
    - დასწრება
3. თითოეული სტუდენტისთვის გამოიტანე შეტყობინება შემდეგი ფორმატით:
Nika - Age: 17, Score: 92, Attendance: 95%

4. ბოლოს დაითვალე, რამდენი სტუდენტი მოხვდა გაფილტრულ სიაში*/ 

let students = [
    { name: "Nika", age: 17, score: 92, attendance: 95 },
    { name: "Mariam", age: 19, score: 68, attendance: 80 },
    { name: "Giorgi", age: 18, score: 85, attendance: 90 },
    { name: "Ana", age: 16, score: 45, attendance: 60 },
    { name: "Luka", age: 20, score: 78, attendance: 88 },
    { name: "Saba", age: 17, score: 96, attendance: 98 },
    { name: "Elene", age: 19, score: 55, attendance: 75 },
    { name: "Data", age: 18, score: 89, attendance: 92 }
]

let newstudents = students.filter((item)=>{
    if(item.score >= 80 && item.attendance >= 90){
        return item
    }
})

newstudents.forEach((item)=>{
    console.log(item.name + " - " + item.age + " - " + item.score + " - " + item.attendance)
})

console.log(newstudents.length)












