/*1)შექმენი ორი კამათელი:

let dice1 = ...
let dice2 = ...

ორივე კამათლის მნიშვნელობა შემთხვევით უნდა შეიქმნას 1-დან 6-მდე.

პროგრამამ უნდა:

დაბეჭდოს ორივე კამათლის შედეგი.
გამოთვალოს მათი ჯამი.
თუ ჯამი არის 10 ან მეტი → დაბეჭდოს "ძალიან კარგი შედეგია!"
თუ ჯამი არის 7-დან 9-მდე → "კარგი შედეგია!"
თუ ჯამი 7-ზე ნაკლებია → "ცუდი შედეგია!"

დამატებითი წესი:
თუ ორივე კამათზე ერთი და იგივე რიცხვი ამოვიდა, დაბეჭდე:

"დუბლი!"*/ 


// let dice1 = Math.floor(Math.random() * 5) + 1
// let dice2 = Math.floor(Math.random() * 5) + 1
// let sum = dice1 + dice2


// console.log(dice1)
// console.log(dice2)

// if(sum >= 10){
//     console.log("ძალიან კარგი შედეგია!")
// }else if(sum >= 7 && sum <= 9){
//     console.log("კარგი შედეგია!")
// }else{
//     console.log("ცუდი შედეგია!")
// }

// if(dice1 == dice2){
//     console.log("დუბლი!")
// }

/*2)შექმენი ორი შემთხვევითი ძალა:

let hero = ...
let monster = ...
გმირის ძალა უნდა იყოს 20-დან 40-მდე
მონსტრის ძალა უნდა იყოს 15-დან 35-მდე

შემდეგ:

დაბეჭდე ორივეს ძალა.
თუ გმირის ძალა მეტია → "გმირმა მოიგო!"
თუ მონსტრის ძალა მეტია → "მონსტრმა მოიგო!"
თუ ძალები ტოლია → "ბრძოლა ფრედ დასრულდა!"

დამატებითი წესი:
თუ გმირის ძალა ზუსტად 30 აღმოჩნდა, მას დაემატოს 10 ძალა.

ამის შემდეგ თავიდან უნდა შეადარო საბოლოო ძალები.*/ 


// let hero = Math.floor(Math.random() * 20) + 20
// let monster = Math.floor(Math.random() * 15) + 20


// if(hero == 30){
//     hero += 10
// }

// if(hero > monster){
//     console.log("გმირმა მოიგო!")
// }else if(monster > hero){
//     console.log("მონსტრმა მოიგო!")
// }else{
//     console.log("ბრძოლა ფრედ დასრულდა!")
// }

// console.log(hero)
// console.log(monster)



/*3)შექმენი მანქანის შემთხვევითი სიჩქარე 40-დან 120-მდე.

პროგრამამ უნდა განსაზღვროს:

40-დან 60-მდე → "ნელა მიდის"
61-დან 90-მდე → "ნორმალური სიჩქარე"
91-დან 110-მდე → "სწრაფად მიდის"
111-დან 120-მდე → "ძალიან სწრაფად მიდის"

დამატებითი წესი:
თუ სიჩქარე ზუსტად 100 აღმოჩნდა, დაბეჭდე:

"ზუსტად 100 კმ/სთ!"

ეს შეტყობინება ჩვეულებრივ კატეგორიასთან ერთად უნდა გამოვიდეს.*/ 

// let carspeed = Math.floor(Math.random() * 80) + 40

// console.log(carspeed)

// if(carspeed >= 40 && carspeed <= 60){
//     console.log("ნელა მიდის")
// }else if(carspeed >= 61 && carspeed <= 90){
//     console.log("ნორმალური სიჩქარე")
// }else if(carspeed >= 91 && carspeed <= 110){
//     console.log("სწრაფად მიდის")
//     if(carspeed == 100){
//         console.log("ზუსტად 100 კმ/სთ!")
//     }
// }else if(carspeed >= 111 && carspeed <= 120){
//     console.log("ძალიან სწრაფად მიდის")
// }

/*4)შექმენი შემთხვევითი რიცხვი 1-დან 10-მდე, რომელიც წარმოადგენს მოთამაშის მიერ არჩეულ ყუთს.

შემდეგ თითოეული რიცხვისთვის განსაზღვრე რა შეხვდა მოთამაშეს:

1-3 → "ცარიელი ყუთი"
4-6 → "10 მონეტა"
7-8 → "30 მონეტა"
9 → "50 მონეტა"
10 → "100 მონეტა და ბონუსი!"

მაგრამ აქ დამატებითი პირობაა:

თუ მოთამაშემ მიიღო 10, შექმენი კიდევ ერთი შემთხვევითი რიცხვი 1-დან 5-მდე.

თუ მეორე რიცხვი 5 გამოვიდა → "სუპერ ბონუსი!"
სხვა შემთხვევაში → "ჩვეულებრივი ბონუსი!"*/ 

// let num = Math.floor(Math.random() * 10) + 1


// if(num >= 1 && num <= 3){
//     console.log("ცარიელი ყუთი")
// }else if(num >= 4 && num <= 6){
//     console.log("10 მონეტა")
// }else if(num >= 7 && num <= 8){
//     console.log("30 მონეტა")
// }else if(num == 9){
//     console.log("50 მონეტა")
// }else{
//     console.log("100 მონეტა და ბონუსი!")
//     let num2 = Math.floor(Math.random() * 5) + 1
//     if(num2 == 5){
//         console.log("სუპერ ბონუსი!")
//     }else{
//         console.log("ჩვეულებრივი ბონუსი!")
//     }
// }

// console.log(num)


/*5)let player1 = ...
let player2 = ...

თითოეულ მოთამაშეს უნდა ჰქონდეს შემთხვევითი ძალა 10-დან 30-მდე.

შემდეგ თითოეულ მოთამაშეს შეუქმენი შემთხვევითი დაცვის ქულა 1-დან 10-მდე:

Player 1 → ძალა + დაცვა
Player 2 → ძალა + დაცვა

მოთამაშის საბოლოო საბრძოლო ქულა უნდა გამოითვალოს ასე:

ძალა + დაცვა

მაგრამ არის სპეციალური წესები:

თუ მოთამაშის ძალა ზუსტად 20 აღმოჩნდა → დაემატოს 5 ქულა.
თუ დაცვის ქულა 10 აღმოჩნდა → დაემატოს კიდევ 3 ქულა.

ამის შემდეგ შეადარე ორივე მოთამაშის საბოლოო საბრძოლო ქულა და გამოავლინე გამარჯვებული.

თუ საბოლოო ქულები თანაბარია → "ფრეა!"*/ 


// let player1power = Math.floor(Math.random() * 20) + 10
// let player2power = Math.floor(Math.random() * 20) + 10

// let player1def = Math.floor(Math.random() * 9) + 1
// let player2def = Math.floor(Math.random() * 9) + 1

// let player1 = player1def + player1power
// let player2 = player2def + player2power


// if(player1power == 20){
//     player1 += 5
// }else if(player1def == 10){
//     player1 += 3
// }

// if(player2power == 20){
//     player2 += 5
// }else if(player2def == 10){
//     player2 += 3
// }

// if(player1 > player2){
//     console.log("player1 Won")
// }else if(player1 < player2){
//     console.log("player2 Won")
// }else{
//     console.log("ფრეა!")
// }



/*6)შექმენი სამი შემთხვევითი რიცხვი:

პირველი → 1-დან 20-მდე
მეორე → 1-დან 20-მდე
მესამე → 1-დან 20-მდე

შემდეგ პროგრამამ უნდა შეამოწმოს:

თუ სამივე რიცხვი ერთმანეთის ტოლია → "ჯეკპოტი!"
თუ მხოლოდ ორი რიცხვია ტოლი → "ორი ერთნაირი რიცხვი!"
თუ სამივე განსხვავებულია → "სამივე განსხვავებულია"

მაგრამ შემდეგ კიდევ ერთი შემოწმება გააკეთე:

სამივე რიცხვის ჯამი:

თუ 40-ზე მეტია → "დიდი ჯამი"
თუ 40 ან ნაკლებია → "პატარა ჯამი"

ანუ პროგრამამ უნდა გამოიტანოს ორივე შედეგი.*/


// let num1 = Math.floor(Math.random() * 20) + 1
// let num2 = Math.floor(Math.random() * 20) + 1
// let num3 = Math.floor(Math.random() * 20) + 1

// console.log(num1)
// console.log(num2)
// console.log(num3)
// if(num1 == num2 && num2 == num3){
//     console.log("ჯეკპოტი!")
// }else if(num1 == num2 || num1 == num3 || num2 == num3){
//     console.log("ორი ერთნაირი რიცხვი!")
// }else{
//     console.log("სამივე განსხვავებულია")
// }


// if(num1 + num2 + num3 > 40){
//     console.log("დიდი ჯამი")
// }else{
//     console.log("პატარა ჯამი")
// }

/*7)შექმენი ორი მოთამაშე:

let player1 = 0;
let player2 = 0;

თითოეული მოთამაშისთვის შექმენი 3 შემთხვევითი რაუნდის ქულა, სადაც თითოეული ქულა არის 1-დან 10-მდე.

მაგალითად:

Player 1:
რაუნდი 1 → 7
რაუნდი 2 → 4
რაუნდი 3 → 9

Player 2:
რაუნდი 1 → 6
რაუნდი 2 → 8
რაუნდი 3 → 5

შემდეგ:

დაითვალე თითოეული მოთამაშის სამი რაუნდის ჯამი.
თუ რომელიმე რაუნდში მოთამაშემ ზუსტად 10 ქულა მიიღო, მას დამატებით 5 ბონუსი დაემატოს.
თუ მოთამაშემ სამივე რაუნდში 5-ზე მეტი ქულა მიიღო, მას დამატებით 3 ბონუსი დაემატოს.
საბოლოოდ შეადარე მოთამაშეების ქულები.
გამოიტანე გამარჯვებული ან "ფრეა!"*/ 

// let player1 = 0
// let player1round1 = Math.floor(Math.random() * 10) + 1
// let player1round2 = Math.floor(Math.random() * 10) + 1
// let player1round3 = Math.floor(Math.random() * 10) + 1
// let player2 = 0
// let player2round1 = Math.floor(Math.random() * 10) + 1
// let player2round2 = Math.floor(Math.random() * 10) + 1
// let player2round3 = Math.floor(Math.random() * 10) + 1

// player1 += player1round1 + player1round2 + player1round3
// player2 += player2round1 + player2round2 + player2round3

// if(player1round1 == 10 || player1round2 == 10 || player1round3 == 10 ){
//     player1 += 5
// }else if(player1round1 > 5 && player1round2 > 5 && player1round3 > 5){
//     player1 += 3 
// }

// if(player2round1 == 10 || player2round2 == 10 || player2round3 == 10 ){
//     player2 += 5
// }else if(player2round1 > 5 && player2round2 > 5 && player2round3 > 5){
//     player2 += 3 
// }


// if(player1 > player2){
//     console.log("Player1-მა მოიგო")
// }else if(player2 > player1){
//     console.log("Player2-მა მოიგო")
// }else{
//     console.log("ფრეა")
// }





