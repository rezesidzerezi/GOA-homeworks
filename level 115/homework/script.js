/* 1)შექმენი Factory Function createCharacter, რომელსაც გადაეცემა სამი პარამეტრი:
- name — პერსონაჟის სახელი
- health — სიცოცხლის რაოდენობა
- damage — დარტყმის ძალა
Factory Function-მა უნდა დააბრუნოს ობიექტი შემდეგი თვისებებითა და მეთოდებით:
1. name
2. health
3. damage
4. attack(target) — უნდა შეამციროს მოწინააღმდეგის სიცოცხლე საკუთარი damage-ის მიხედვით.
    - თუ მოწინააღმდეგის სიცოცხლე 0 ან ნაკლებია, გამოიტანოს შეტყობინება "Target is already defeated!".
    - თუ მოწინააღმდეგის სიცოცხლე დადებითია, შეუმციროს სიცოცხლე.
5. heal(amount) — უნდა აღადგინოს პერსონაჟის სიცოცხლე.
    - სიცოცხლე არ უნდა გახდეს 100-ზე მეტი.
6. getStatus() — დააბრუნოს პერსონაჟის ინფორმაცია სახელითა და სიცოცხლით.
შექმენი 3 პერსონაჟი და მოახდინე მათ შორის რამდენიმე შეტევა. */

// function createCharacter(name , health , damage){
//     return {
//         name,
//         health,
//         damage,
//         attack(target){
//             if(this.health <= 0){
//                 return "Target is already defeated!"
//             }else{
//                 target -= this.damage
//                 return target.health
//             }
//         },

//         heal(amount){
//             if(this.health + amount <= 100){
//                 this.health += amount
//             }
//         },

//         getStatus(){
//             return "Name: " + this.name + " Health: " + this.health
//         }
//     }
// }

// let p1 = createCharacter("gega" , 80 , 20)

// let p2 = createCharacter("gio" , 90 , 30)

// let p3 = createCharacter("dachi" , 0 , 0)

// console.log(p1.attack(p2))
// console.log(p2.attack(p3))
// console.log(p3.attack(p1))

/*2)შექმენი Factory Function createBankAccount, რომელსაც გადაეცემა:
- owner — ანგარიშის მფლობელი
- balance — საწყისი თანხა
- pin — ანგარიშის PIN კოდი
დაბრუნებულ ობიექტს უნდა ჰქონდეს:
1. owner
2. deposit(amount) — თანხის დამატება.
    - თანხა უნდა იყოს დადებითი.
3. withdraw(amount, enteredPin) — თანხის გამოტანა.
    - ჯერ უნდა შემოწმდეს PIN კოდი.
    - თუ PIN არასწორია, გამოიტანოს "Incorrect PIN!".
    - თუ თანხა ბალანსზე მეტია, გამოიტანოს "Not enough money!".
    - სხვა შემთხვევაში შეამციროს ბალანსი.
4. getBalance() — დააბრუნოს მიმდინარე ბალანსი.
5. changePin(oldPin, newPin) — PIN-ის შეცვლა.
    - ძველი PIN უნდა ემთხვეოდეს არსებულს.
    - ახალი PIN უნდა შედგებოდეს ზუსტად 4 სიმბოლოსგან.
შექმენი ორი საბანკო ანგარიში და შეამოწმე ყველა მეთოდი.*/


// function createBankAccount(owner , balance , pin){
//     return { 
//         owner,
//         balance,
//         pin,
//         owner1(){
//             return this.owner
//         },
//         deposit(amount){
//             if(amount > 0){
//                this.balance += amount
//             }
//         },
//         withdraw(amount, enteredPin){
//             if(enteredPin != this.pin){
//                console.log("Incorrect PIN!")
//             }else if(amount > this.balance){
//                console.log("Not enough money!")
//             }else{
//                this.balance -= amount
//             }
//         },

//         getBalance(){
//             return this.balance
//         },

//         changePin(oldPin, newPin){
//             if(oldPin == this.pin && newPin.length == 4){
//                this.pin = newPin
//             }
//         }
//     }
// }

// let bankacc1 = createBankAccount("gega" , 2000 , "1234")
// let bankacc2 = createBankAccount("gio" , 150 , "7777")



/*3)
შექმენი Factory Function createStudent, რომელსაც გადაეცემა:
- name
- age
- grades — ქულების მასივი.
დაბრუნებულ ობიექტს უნდა ჰქონდეს:
1. name
2. age
3. grades
4. addGrade(grade) — დაამატოს ახალი ქულა მხოლოდ იმ შემთხვევაში, თუ ის 0-დან 100-მდეა.
5. getAverage() — დაითვალოს და დააბრუნოს საშუალო ქულა.
6. getResult() — საშუალო ქულის მიხედვით დააბრუნოს:
    - 90 ან მეტი — "Excellent"
    - 70-დან 89-მდე — "Good"
    - 50-დან 69-მდე — "Average"
    - 50-ზე ნაკლები — "Failed"
7. getInfo() — დააბრუნოს სტუდენტის სრული ინფორმაცია, მათ შორის საშუალო ქულა და შედეგი.
შექმენი მინიმუმ 3 სტუდენტი განსხვავებული ქულებით. */
// let count = 0

// function createStudent(name , age , grades){
//    return {
//       name,
//       age,
//       grades,
//       addGrade(grade){
//          if(grade >= 0 && grade <= 100){
//             this.grades.push(grade)
//          }
//       },

//       getAverage(){
//          for(let i = 0; i < this.grades.length;i++){
//             return count += this.grades[i]
//          }
//       },

//       getResult(){
//          if(this)
//       } 
//    }
// }

// let p1 = createStudent("gega" , 15 , [20,90,100])


// კარგად ვერ გავიგე პირობა


/*4)შექმენი Factory Function createCart, რომელსაც საწყისად არ გადაეცემა პარამეტრები.

დაბრუნებულ ობიექტს უნდა ჰქონდეს:

- items — ცარიელი მასივი.

მეთოდები:
1. addProduct(name, price, quantity) — დაამატოს პროდუქტი კალათაში.
    - თუ პროდუქტი უკვე არსებობს, გაზარდოს მისი რაოდენობა.
    - თუ არ არსებობს, დაამატოს ახალი ობიექტი.
2. removeProduct(name) — წაშალოს პროდუქტი სახელის მიხედვით.
3. increaseQuantity(name, amount) — გაზარდოს კონკრეტული პროდუქტის რაოდენობა.
4. getTotal() — დაითვალოს ყველა პროდუქტის საერთო ღირებულება.
5. getCartInfo() — დააბრუნოს კალათაში არსებული ყველა პროდუქტის ინფორმაცია.
შექმენი ორი დამოუკიდებელი კალათა და შეამოწმე, რომ ერთი კალათის ცვლილება მეორეზე არ მოქმედებდეს. */


// function createCart(){
//    return {
//       item: [],
//       addProduct(name, price, quantity){
//          if(this.item.includes(name)){
//             quantity += 1
//          }else
//       }
//    }
// }

// პირობა ვერ გავიგე


/*5)შექმენი Factory Function createEmployee, რომელსაც გადაეცემა:
- name
- position
- salary
- experience — სამუშაო გამოცდილება წლებში.
დაბრუნებულ ობიექტს უნდა ჰქონდეს:
1. name
2. position
3. salary
4. experience
5. increaseSalary(amount) — ხელფასის გაზრდა.
    - თუ გამოცდილება 5 წელზე მეტია, ხელფასი გაიზარდოს გადაცემული თანხით.
    - სხვა შემთხვევაში გამოიტანოს "Not enough experience!".
6. changePosition(newPosition) — შეცვალოს პოზიცია მხოლოდ იმ შემთხვევაში, თუ თანამშრომელს მინიმუმ 2 წლის გამოცდილება აქვს.
7. getBonus() — დააბრუნოს ბონუსი:
    - 10 წელზე მეტი გამოცდილება — 2000
    - 5-დან 10 წლამდე — 1000
    - 5 წელზე ნაკლები — 500
8. getInfo() — დააბრუნოს თანამშრომლის სრული ინფორმაცია.
შექმენი მინიმუმ 3 თანამშრომელი განსხვავებული გამოცდილებით და შეამოწმე მათი მეთოდები. */

// function createEmployee(name , position , already , experience){
//    return{
//       name,
//       position,
//       already,
//       experience,
//       increaseSalary(amount){
//          if(this.experience > 5){
//             this.already += amount
//          }else{
//             console.log("Not enough experience!")
//          }
//       },

//       changePosition(newPosition){
//          if(this.experience >= 2){
//             this.position = newPosition
//          }
//       },

//       getBonus(){
//          if(this.experience > 10){
//             return "Bonus - 2000"
//          }else if(this.experience >= 5 && this.experience <= 10){
//             return "Bonus - 1000"
//          }else{
//             return "Bonus - 500"
//          }
//       },

//       getInfo(){
//          return "Name: " + this.name + " Position: " + this.position + " Balance: " + this.already + " Experience: " + this.experience
//       }
//    }
// }

// let p1 = createEmployee("Gega" , "Bodyguard" , 2000 , 15)
// let p2 = createEmployee("rezi" , "Programmer" , 1000 , 3)
// let p3 = createEmployee("dachi" , "Cleaner" , 100 , 8)
