/*3)let student = {
    name: "Nika",
    age: 17,
    grade: 11,
    scores: [90, 85, 95]
};


დავალება:
1. Object Destructuring-ის გამოყენებით შეინახეთ name, age და scores ცვლადებში.
2. Array Destructuring-ის გამოყენებით scores მასივიდან შეინახეთ სამივე ქულა ცალკე ცვლადში.
3. კონსოლში გამოიტანეთ მოსწავლის სახელი, ასაკი და თითოეული ქულა.
4. გამოიტანეთ ქულების ჯამი.*/ 


// let student = {
//     name: "Nika",
//     age: 17,
//     grade: 11,
//     scores: [90, 85, 95]
// }

// let {name , age , scores} = student

// let [num1 , num2 , num3] = scores

// console.log(name,age,scores)

// console.log(num1 + num2 + num3)

/*4)let character = {
    username: "Shadow",
    level: 15,
    stats: [100, 80, 45],
    weapons: ["Sword", "Bow", "Dagger"]
};


დავალება:
1. Object Destructuring-ით მიიღეთ username, level, stats და weapons.
2. Array Destructuring-ით stats მასივიდან მიიღეთ:
    - health
    - energy
    - damage
3. Array Destructuring-ით weapons მასივიდან მიიღეთ პირველი ორი იარაღი.
4. გამოიტანეთ პერსონაჟის სრული ინფორმაცია.
5. თუ health 50-ზე ნაკლებია, გამოიტანეთ "Low Health!", სხვა შემთხვევაში "Character is Ready!".*/ 

// let character = {
//     username: "Shadow",
//     level: 15,
//     stats: [100, 80, 45],
//     weapons: ["Sword", "Bow", "Dagger"]
// }

// let {username , level , stats , weapons} = character

// let [health , energy , damage] = stats

// let [weapon1 , weapon2] = weapons

// console.log(username, level, stats, weapons)

// if(health > 50){
//     console.log("Low Health!")
// }else{
//     console.log("Character is Ready!")
// }

/*5)let product = {
    title: "Gaming Laptop",
    price: 2500,
    specifications: ["16GB RAM", "512GB SSD", "RTX 4060"],
    colors: ["Black", "White", "Gray"]
};


დავალება:
1. Object Destructuring-ით მიიღეთ title, price, specifications და colors.
2. specifications მასივიდან ცალკე ცვლადებში შეინახეთ სამივე მახასიათებელი.
3. colors მასივიდან შეინახეთ პირველი და მესამე ფერი.
4. კონსოლში გამოიტანეთ პროდუქტის სრული ინფორმაცია.
5. თუ ფასი 2000-ზე მეტია, გამოიტანეთ "Expensive Product", სხვა შემთხვევაში "Affordable Product".*/ 

// let product = {
//     title: "Gaming Laptop",
//     price: 2500,
//     specifications: ["16GB RAM", "512GB SSD", "RTX 4060"],
//     colors: ["Black", "White", "Gray"]
// }

// let {title, price, specifications, colors} = product

// let [ram, ssd, stx] = specifications

// let [c1, , c3] = colors

// console.log(title,price,specifications,colors)

// if(price > 2000){
//     console.log("Expensive Product")
// }else{
//     console.log("Affordable Product")
// }

/*6)let school = {
    schoolName: "Future Academy",
    location: "Tbilisi",
    students: [
        ["Nika", 16, 90],
        ["Ana", 17, 95],
        ["Gio", 15, 75]
    ],
    subjects: ["Math", "English", "Programming"]
};


დავალება:
1. Object Destructuring-ით მიიღეთ schoolName, location, students და subjects.
2. Array Destructuring-ით subjects მასივიდან შეინახეთ სამივე საგანი ცალკე ცვლადში.
3. students მასივიდან Array Destructuring-ის გამოყენებით მიიღეთ პირველი მოსწავლის სახელი, ასაკი და ქულა.
4. იგივე გააკეთეთ მეორე მოსწავლისთვის.
5. გამოიტანეთ სკოლის სახელი, მდებარეობა და ორივე მოსწავლის ინფორმაცია.
6. შეამოწმეთ, აქვს თუ არა პირველ მოსწავლეს 80-ზე მეტი ქულა.*/ 

// let school = {
//     schoolName: "Future Academy",
//     location: "Tbilisi",
//     students: [
//         ["Nika", 16, 90],
//         ["Ana", 17, 95],
//         ["Gio", 15, 75]
//     ],
//     subjects: ["Math", "English", "Programming"]
// }


// let {schoolName , location , students , subjects} = school

// let [sub1 , sub2 , sub3] = subjects

// let [student1 , stundent2] = students


// console.log(schoolName , location)
// console.log(student1)
// console.log(stundent2)

// let [name , age , score] = student1

// console.log(score > 80 ? true : false)


/*7)let company = {
    name: "TechVision",
    address: "Tbilisi",
    employees: [
        {
            fullName: "Giorgi",
            position: "Developer",
            details: [25, 3000, "Frontend"]
        },
        {
            fullName: "Nika",
            position: "Designer",
            details: [23, 2500, "UI/UX"]
        },
        {
            fullName: "Ana",
            position: "Manager",
            details: [28, 4000, "Management"]
        }
    ],
    departments: ["Development", "Design", "Management"]
};


დავალება:
1. Object Destructuring-ით მიიღეთ კომპანიის სახელი, მისამართი, თანამშრომლები და დეპარტამენტები.
2. Array Destructuring-ით მიიღეთ სამივე დეპარტამენტის სახელი.
3. პირველი თანამშრომლის ობიექტიდან Object Destructuring-ით მიიღეთ fullName, position და details.
4. details მასივიდან Array Destructuring-ით მიიღეთ ასაკი, ხელფასი და სპეციალიზაცია.
5. იგივე გააკეთეთ მეორე თანამშრომლისთვის.
6. გამოიტანეთ ორივე თანამშრომლის სრული ინფორმაცია.
7. შეამოწმეთ, რომელი თანამშრომლის ხელფასია მეტი.
8. თუ რომელიმე თანამშრომლის ხელფასი 3000-ზე მეტია, გამოიტანეთ მისი სახელი და "High Salary".*/ 

// let company = {
//     name: "TechVision",
//     address: "Tbilisi",
//     employees: [
//         {
//             fullName: "Giorgi",
//             position: "Developer",
//             details: [25, 3000, "Frontend"]
//         },
//         {
//             fullName2: "Nika",
//             position2: "Designer",
//             details2: [23, 2500, "UI/UX"]
//         },
//         {
//             fullName3: "Ana",
//             position3: "Manager",
//             details3: [28, 4000, "Management"]
//         }
//     ],
//     departments: ["Development", "Design", "Management"]
// };


// let {name , address , employees , departments} = company

// let [dep1 , dep2 , dep3] = departments

// let [employe1 , employe2 , employe3] = employees

// let {fullName , position , details} = employe1

// let [age , salary , specification] = details

// let {fullName2 , position2 , details2} = employe2

// let [age2 , salary2, specification2] = details2

// console.log(employe1 , employe2)

// console.log(salary > salary2 ? "employee1 has more salary": "employee2 has more salary")

// console.log(salary > 3000 ? fullName + " High Salary" : fullName + " Low Salary")

// console.log(salary2 > 3000 ? fullName2 + " High Salary" : fullName2 + " Low Salary")








