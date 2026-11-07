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

let bankAccount = {
    _owner : "Goga",
    _balance : 2500,
    _pin : "1234",
    _isBlocked : false,
    get newowner(){
        return this._owner
    },
    set newowner(name){
        if(name){
            this._owner = name
        }else{
            console.log("Invalid owner name!")
        }
    },

    get newbalance(){
        return this._balance
    },
    set newbalance(balance){
        if(typeof balance == "number" && balance >= 0){
            this._balance = balance
        }else{
            console.log("Invalid balance!")
        }
    },

    get newpin(){
        return "PIN is hidden"
    },
    set newpin(pin){
        if(pin.length == 4){
            this._pin = pin
        }else{
            console.log("PIN must contain exactly 4 digits!")
        }
    },

    get accountStatus(){
        if(this._isBlocked){
            return "Blocked"
        }else{
            return "Active"
        }
    },

    set deposit(money){
        if(typeof money === "number" && money > 0){
            this._balance + money
        }else{
            console.log("Invalid deposit amount!")
        }

        if(this._isBlocked){
            console.log("Account is blocked!")
        }
    }
}

console.log(bankAccount.newowner)
bankAccount.newowner = "rezi"
console.log(bankAccount.newowner)

console.log(bankAccount.newbalance)
bankAccount.newbalance = 1000
console.log(bankAccount.newbalance)

console.log(bankAccount.newpin)
bankAccount.newpin = "7777"
console.log(bankAccount.newpin)

console.log(bankAccount.accountStatus)

bankAccount.deposit = 1000
console.log(bankAccount.deposit)




