/*================ პირველი დავალება ==================

1)შექმენი ობიექტი bankAccount, რომელსაც ექნება შემდეგი თვისებები:
- _owner — "Goga"
- _balance — 2500
- _pin — "1234"
- _isBlocked — false
შექმენი შემდეგი getter-ები და setter-ები:
1. owner
- Getter-მა უნდა დააბრუნოს ანგარიშის მფლობელის სახელი.
- Setter-მა უნდა მიიღოს ახალი სახელი, მაგრამ შეცვალოს მხოლოდ მაშინ, თუ ახალი მნიშვნელობა სტრიქონია და ცარიელი არ არის.
- თუ მნიშვნელობა არასწორია, გამოიტანე შეტყობინება: "Invalid owner name!"
2. balance
- Getter-მა უნდა დააბრუნოს მიმდინარე ბალანსი.
- Setter-მა უნდა მიიღოს ახალი ბალანსი, მაგრამ ცვლილება დაუშვას მხოლოდ მაშინ, თუ ახალი მნიშვნელობა რიცხვია და 0-ზე ნაკლები არ არის.
- თუ მნიშვნელობა არასწორია, გამოიტანე "Invalid balance!"
3. pin
- Getter-მა არასოდეს უნდა დააბრუნოს PIN-ის ნამდვილი მნიშვნელობა. მან უნდა დააბრუნოს "PIN is hidden".
- Setter-მა ახალი PIN უნდა მიიღოს მხოლოდ მაშინ, თუ ის ოთხნიშნა სტრიქონია.
- სხვა შემთხვევაში გამოიტანე "PIN must contain exactly 4 digits!"
4. accountStatus — მხოლოდ Getter
- თუ _isBlocked არის true, დააბრუნოს "Blocked".
- სხვა შემთხვევაში დააბრუნოს "Active".
5. deposit — მხოლოდ Setter
- Setter-მა მიიღოს თანხა და დაამატოს ბალანსს.
- თანხა უნდა იყოს რიცხვი და 0-ზე მეტი.
- თუ ანგარიში დაბლოკილია, თანხის დამატება არ უნდა მოხდეს.
- არასწორი თანხის შემთხვევაში გამოიტანე "Invalid deposit amount!"
- დაბლოკილი ანგარიშის შემთხვევაში გამოიტანე "Account is blocked!"
6. withdraw — მხოლოდ Setter
- Setter-მა მიიღოს გასატანი თანხა.
- თანხა უნდა იყოს 0-ზე მეტი და ბალანსზე ნაკლები ან მისი ტოლი.
- დაბლოკილი ანგარიშიდან თანხის გატანა არ უნდა შეიძლებოდეს.
- არასაკმარისი თანხის შემთხვევაში გამოიტანე "Insufficient balance!"*/ 

// let bankAccount = {
//     _owner : "Goga",
//     _balance : 2500,
//     _pin : "1234",
//     _isBlocked : false,
//     get newowner(){
//         return this._owner
//     },
//     set newowner(name){
//         if(name){
//             this._owner = name
//         }else{
//             console.log("Invalid owner name!")
//         }
//     },

//     get newbalance(){
//         return this._balance
//     },
//     set newbalance(balance){
//         if(typeof balance == "number" && balance >= 0){
//             this._balance = balance
//         }else{
//             console.log("Invalid balance!")
//         }
//     },

//     get newpin(){
//         return "PIN is hidden"
//     },
//     set newpin(pin){
//         if(pin.length == 4){
//             this._pin = pin
//         }else{
//             console.log("PIN must contain exactly 4 digits!")
//         }
//     },

//     get accountStatus(){
//         if(this._isBlocked){
//             return "Blocked"
//         }else{
//             return "Active"
//         }
//     },

//     set deposit(money){
//         if(this._isBlocked == true){
//             console.log("Account is blocked!")
//         }else if(money <= 0){
//             console.log("Invalid deposit amount!")
//         }else if(typeof money === "number" && money > 0 && this._isBlocked == false){
//             this._balance += money
//         }
//     },

//     set withdraw(money){
//         if(this._isBlocked == true){
//             console.log("Account is blocked!")
//         }else if(this._balance < money){
//             console.log("Insufficient balance!")
//         }else if(typeof money === "number" && money > 0){
//             this._balance -= money
//         }
//     }
// }

// console.log(bankAccount.newowner)
// bankAccount.newowner = "rezi"
// console.log(bankAccount.newowner)

// console.log(bankAccount.newbalance)
// bankAccount.newbalance = 1000
// console.log(bankAccount.newbalance)

// console.log(bankAccount.newpin)
// bankAccount.newpin = "7777"
// console.log(bankAccount.newpin)

// console.log(bankAccount.accountStatus)

// bankAccount.deposit = 5767

// bankAccount.withdraw = 67


/*==================მეორე დავალება==================

2)შექმენი ობიექტი player, რომელსაც ექნება შემდეი თვისებები:
- _name—"Shadow"
- _health—100
- _energy—80
- _level—1
- _experience—0
- _isAlive—true
შექმენი შემდეგი getter-ები და setter-ები.
1. name
- Getter-მა დააბრუნოს მოთამაშის სახელი.
- Setter-მა სახელი შეცვალოს მხოლოდ მაშინ, თუ მნიშვნელობა სტრიქონია და სიგრძე მინიმუმ 3 სიმბოლოა.
- სხვა შემთხვევაში გამოიტანოს "Name must contain at least 3 characters!"
2. health
- Getter-მა დააბრუნოს ჯანმრთელობა.
- Setter-მა მიიღოს ახალი ჯანმრთელობა მხოლოდ 0-დან 100-ის ჩათვლით.
- თუ ჯანმრთელობა 0 გახდება, _isAlive ავტომაურად უნდა გახდეს false.
- თუ ჯანმრთელობა 0-ზე მეტია, _isAlive უნდა გახდეს true.
- სხვა მნიშვნელობის შემთხვევაში გამოიტანოს "Invalid health!"
3. energy
- Getter-მა დააბრუნოს ენერგია.
- Setter-მა ენერგია შეცვალს მხოლოდ 0-დან 100-ის ჩათვით.
- არასწორი მნიშვნელობის შემთხვევაში გამოიტანოს "Invalid energy!"
4. experience
- Getter-მა დააბრუნოს მიმდინარე გამოცდილება.
- Setter-მა მიიღოს მხოლოდ 0 ან მეტი რიცხვი.
- როდესაც გამოცდილება 100-ს ან მეტს მიაღწევს, მოთამაშის დონე უნდა გაიზარდოს 1-ით და გამოცდილებას უნდა გამოაკლდეს 100.
- თუ დარჩენილი გამოცილებაც 100-ს ან მეია, დონე კვლავ უნდა გაიზარდოს. მაგალითად, 250 გამოცდილების მიღებისას მოთამაშემ უნდა მოიმატოს 2 დონე და დარჩეს 50 გამოცდილება.
5. level — მხოლოდ Getter
- დააბრუნოს მოთამაშის მიმდინარე დონე.
- დონის პირდაპირ შეცვლა Getter-ის საშუალებით შეუძლებელი უნდა იყოს.
6. status — მხოლოდ Getter
- თუ მოთამაშე ცოცხალია და ენერგია 0-ზე მეტია, დააბრუნოს "Ready".
- თუ მოთამაშე ცოცხალია, მაგრამ ენრგია 0 აქვს, დააბრუნოს "Exhausted".
- თუ ჯანმელობა 0 აქვს, დააბრუნოს "Dead".
7. attack — მხოლოდ Setter
- Setter-მა მიიღოს შეტევის ენერგიის ღირებულება.
- თუ მოთამაშე მკვდარია, შეტევა არ უნდა შესრულდეს.
- თუ ენერგია მოთხოვნილ ღირებულებაზე ნაკლებია, გამოიტანოს "Not enough energy!"
- წინააღმდეგ შემთვევაში ენერგია უნდა შემცირდეს შეტევის ღირებულებით და გამოიტანოს "Attack successful!"
- შეტევა უნდა მიიღებოდეს მხოლოდ დადებთი რიცხვის შემთხვვაში.*/ 

// let player = {
//     _name : "Shadow",
//     _health : 100,
//     _energy : 80,
//     _level : 1,
//     _experience : 0,
//     _isAlive : true,

//     get newname(){
//         return this._name
//     },
//     set newname(name){
//         if(name.length >= 3 && typeof name == "string"){
//             this._name = name
//         }else{
//             console.log("Name must contain at least 3 characters!")
//         }
//     },

//     get newhealth(){
//         return this._health
//     },
//     set newhealth(health){
//         if(health == 0){
//             this._isAlive = false
//         }else if(health > 0){
//             this._isAlive = true
//         }else{
//             console.log("Invalid health!")
//         }
//     },

//     get newenergy(){
//         return this._energy
//     },

//     set newenergy(energy){
//         if(energy >= 0 && energy <= 100){
//             this._energy = energy
//         }else{
//             console.log("Invalid energy!")
//         }
//     },

//     get newexperience(){
//         return this._experience
//     },

//     set newexperience(xp){
//         while(this._experience + xp > 100){
//             xp -= 100
//             this._level++
//         }
//         this._experience += xp
//     },

//     get newlevel(){
//         return this._level
//     },

//     get status(){
//         if(this._isAlive && this._energy > 0){
//             return "Ready"
//         }else if(this._isAlive && this._energy == 0){
//             return "Exhausted"
//         }else if(this._health == 0){
//             return "Dead"
//         }
//     },

//     set attack(value){
//         if(value > 0){
//             if(this._health == 0){
//                 console.log("Dead")
//             }else if(this._energy < value){
//                 console.log("Not enough energy!")
//             }else{
//                 this._energy -= value
//                 console.log("Attack successful!")
//             }
//         }
//     }
// }


// player.newname = "rezi"

// console.log(player.newhealth)
// player.newhealth = 50


// player.newenergy = 20


// player.newexperience = 250

// console.log(player.newlevel)

// console.log(player.status)

// player.attack = 10


/*===============მესამე დავალება =============

შექმენი ობიექტი storeAccount, რომელსაც ექნება შემდეგი თვისებები:
- _username — "Goga"
- _email — "goga@gmail.com"
- _balance — 1800
- _password — "goga1234"
- _isActive — true
- _loginAttempts — 0
შექმენი შემდეგი Getter-ები და Setter-ები:

1. username
- Getter-მა უნდა დააბრუნოს მომხმარებლის სახელი.
- Setter-მა უნდა მიიღოს ახალი სახელი, მაგრამ შეცვალოს მხოლოდ მაშინ, თუ:
    - მნიშვნელობა სტრიქონია;
    - სიგრძე მინიმუმ 4 სიმბოლოა.
- სხვა შემთხვევაში გამოიტანოს: "Invalid username!"
2. email
- Getter-მა უნდა დააბრუნოს მომხმარებლის ელფოსტა.
- Setter-მა უნდა მიიღოს ახალი ელფოსტა მხოლოდ მაშინ, თუ:
    - მნიშვნელობა სტრიქონია;
    - შეიცავს "@" სიმბოლოს;
    - მთავრდება ".com"-ით.
- სხვა შემთხვევაში გამოიტანოს: "Invalid email address!"
3. password
- Getter-მა არასოდეს უნდა დააბრუნოს ნამდვილი პაროლი. დააბრუნოს "Password is protected".
- Setter-მა ახალი პაროლი უნდა მიიღოს მხოლოდ მაშინ, თუ:
    - სტრიქონია;
    - შეიცავს მინიმუმ 8 სიმბოლოს;
    - შეიცავს მინიმუმ ერთ ციფრს.
- სხვა შემთხვევაში გამოიტანოს: "Weak password!"
4. accountStatus — მხოლოდ Getter
- თუ _isActive არის true, დააბრუნოს "Account is active".
- სხვა შემთხვევაში დააბრუნოს "Account is inactive".
5. login — მხოლოდ Setter
- მიიღოს პაროლი.
- თუ პაროლი ემთხვევა _password-ს:
    - _loginAttempts გახდეს 0;
    - გამოიტანოს "Login successful!".
- თუ პაროლი არასწორია:
    - _loginAttempts გაიზარდოს 1-ით;
    - გამოიტანოს "Incorrect password!".
- თუ არასწორი მცდელობების რაოდენობა მიაღწევს 3-ს, _isActive გახდეს false.
6. purchase — მხოლოდ Setter
- მიიღოს შესაძენი პროდუქტის ფასი.
- თანხა უნდა იყოს რიცხვი და 0-ზე მეტი.
- თუ ანგარიში არააქტიურია, შეძენა არ უნდა განხორციელდეს და გამოიტანოს "Account is inactive!".
- თუ ბალანსი საკმარისი არ არის, გამოიტანოს "Insufficient balance!".
- სხვა შემთხვევაში თანხა გამოაკლოს _balance-ს და გამოიტანოს "Purchase successful!".
- წარმატებული შეძენის შემდეგ, თუ ბალანსი 100-ზე ნაკლები გახდება, გამოიტანოს დამატებით "Low balance warning!".
7. addBalance — მხოლოდ Setter
- მიიღოს თანხა და დაამატოს _balance-ს.
- თანხა უნდა იყოს რიცხვი და 0-ზე მეტი.
- თუ ანგარიში არააქტიურია, თანხის დამატება არ უნდა მოხდეს.
- არასწორი თანხის შემთხვევაში გამოიტანოს "Invalid amount!".
- არააქტიური ანგარიშის შემთხვევაში გამოიტანოს "Account is inactive!".
დამატებითი მოთხოვნები:
1. ყველა Getter და Setter უნდა შეიქმნას get და set სინტაქსის გამოყენებით.
2. _-ით დაწყებული თვისებები პირდაპირ არ შეცვალოთ ობიექტის გარედან.
3. შექმნილი Getter-ები და Setter-ები აუცილებლად შეამოწმეთ რამდენიმე სხვადასხვა მნიშვნელობით.
4. შეამოწმეთ როგორც სწორი, ისე არასწორი მონაცემების გადაცემის შემთხვევები.*/ 

// let storeAccount = {
//     _username : "Goga",
//     _email : "goga@gmail.com",
//     _balance : 1800,
//     _password : "goga1234",
//     _isActive : true,
//     _loginAttempts : 0,
//     get newuser(){
//         return this._username
//     },
//     set newuser(name){
//         if(typeof name == "string" && name.length > 4){
//             this._username = name
//         }else{
//             console.log("Invalid username!")
//         }
//     },

//     get newemail(){
//         return this._email
//     },
//     set newemail(email){
//         if(typeof email == "string" && email.includes("@") && email.endsWith(".com")){
//             this._email = email
//         }else{
//             console.log("Invalid email address!")
//         }
//     },

//     get newpass(){
//         return "Password is protected"
//     },

//     set newpass(password){
//         let numbers = ["0","1","2","3","4","5","6","7","8","9"]
//         let new1 = numbers.some(i=>password.includes(i))
//         if(typeof password == "string" && password.length > 8 && new1){
//             this._password = password
//         }else{
//             console.log("Weak password!")
//         }
//     },

//     get accountStatus(){
//         if(this._isActive){
//             return "Account is active"
//         }else{
//             return "Account is inactive"
//         }
//     },

//     set login(pass){
//         if(pass == this._password){
//             this._loginAttempts = 0
//             console.log("Login successful!")
//         }else{
//             this._loginAttempts += 1
//             console.log("Incorrect password!")
//             if(this._loginAttempts === 3){
//                 this._isActive = false
//             }
//         }
//     },

//     set purchase(total){
//         if(typeof total === "number" && total > 0){
//             if(this._isActive === false){
//                 console.log("Account is inactive!")
//             }else if(this._balance < total){
//                 console.log("Insufficient balance!")
//             }else{
//                 this._balance -= total
//                 console.log("Purchase successful!")
//                 if(this._balance < 100){
//                     console.log("Low balance warning!")
//                 }
//             }
//         }
//     },

//     set addBalance(money){
//         if(this._isActive){
//             if(typeof money === "number" && money > 0){
//                 this._balance += money
//             }else{
//                 console.log("Invalid amount!")
//             }
//         }else{
//             console.log("Account is inactive!")
//         }
//     }
// }

// console.log(storeAccount.newuser)
// storeAccount.newuser = "rezi"
// console.log(storeAccount.newuser)

// console.log(storeAccount.newemail)
// storeAccount.newemail = "rezi@gmail.com"
// console.log(storeAccount.newemail)

// console.log(storeAccount.newpass)
// storeAccount.newpass = "rezirezirezi1"

// console.log(storeAccount.accountStatus)

// storeAccount.login = "rezirezi1"

// storeAccount.purchase = 100

// storeAccount.addBalance = 200






