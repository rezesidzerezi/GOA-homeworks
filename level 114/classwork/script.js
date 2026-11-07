/*let player = {
    _name: "Shadow",
    _level: 15,
    _experience: 850,
    _health: 75,
    _isOnline: true
};


მოთხოვნები:
1. შექმენი name getter, რომელიც დააბრუნებს მოთამაშის სახელს. თუ სახელი 3 სიმბოლოზე ნაკლებია, დააბრუნოს "Invalid name!".
2. შექმენი level getter, რომელიც შეამოწმებს მოთამაშის დონეს:
    - თუ level მეტია ან ტოლია 10-ის, დააბრუნოს "Advanced Player".
    - თუ level მეტია ან ტოლია 5-ის, დააბრუნოს "Intermediate Player".
    - სხვა შემთხვევაში დააბრუნოს "Beginner Player".
3. შექმენი status getter, რომელიც შეამოწმებს მოთამაშის მდგომარეობას:
    - თუ _health უდრის 0-ს, დააბრუნოს "Player is dead".
    - თუ _health ნაკლებია 30-ზე, დააბრუნოს "Critical condition".
    - სხვა შემთხვევაში დააბრუნოს "Player is healthy".
4. შექმენი accountInfo getter, რომელიც ერთ სტრიქონში დააბრუნებს მოთამაშის სრულ ინფორმაციას შემდეგი ფორმატით:
Player: Shadow | Level: Advanced Player | Health: 75 | Status: Player is healthy | Online: Yes*/ 

// let player = {
//     _name: "Shadow",
//     _level: 15,
//     _experience: 850,
//     _health: 75,
//     _isOnline: true,
//     get newname(){
//         if(this._name.length < 3){
//             return "Invalid name!"
//         }else{
//             return this._name
//         }
//     },

//     get newlevel(){
//         if(this._level >= 10){
//             return "Advanced Player"
//         }else if(this._level >= 5){
//             return "Intermediate Player"
//         }else{
//             return "Beginner Player"
//         }
//     },

//     get status(){
//         if(this._health == 0){
//             return "Player is dead"
//         }else if(this._health < 30){
//             return "Critical condition"
//         }else{
//             return "Player is healthy"
//         }
//     },

//     get accountInfo(){
//         return `Player: ${this.newname} | Level: ${this.newlevel} | Health: ${this._health} | Status: ${this.status} | Online: Yes`
//     }
// }

// console.log(player.newname)
// console.log(player.newlevel)
// console.log(player.status)
// console.log(player.accountInfo)

/*2)შექმენით ობიექტის ადაც იქნება name _email და _password ფროფერთიები

თქვენი დავალებაა შექმნა პაროლისთივსიდ და ემაილისთვის ცალ ცალკე სეტერებნი და გეთერები , 

შეცვლაეთ ორივეს მნიშვნელობა და ასევე დააბრუნებთ მგანახლებული მნშვნელობები*/ 

let profile = {
    name : "rezi",
    _email : "rezirezi1@.gmail.com",
    _password : 1120,
    set newpass1(newpass){
        this._password = newpass
    },
    get newpass2(){
        return this._password
    },
    set newe1(newe){
        this._email = newe
    },
    get newe2(){
        return this._email
    }
}

console.log(profile.newpass2)
profile.newpass1 = 2222
console.log(profile.newpass2)

console.log(profile.newe2)
profile.newe1 = "rezesidze@.gmail.com"
console.log(profile.newe2)



