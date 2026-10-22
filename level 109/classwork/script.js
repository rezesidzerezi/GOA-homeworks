/*შექმენით ობიექტი სახელად person 

ამ ობიექტში უნდა გქონდეთ შემდეგი property - ები 

====მარტივი ქიებით შექმენით===
სახელი
გვარი
ასაკი
ჰობი
====რთული ქიებით შექმენით===
საყვარელი საჭმელი
ფავორიტი ავტომობილი
სასწავლო საგანი

შენი დავალებაა რომ კონსოლში გამოიტანო ამ ობიექტის ყველა მნიშვნელობა

მარტივი მნიშვნელობები გამოიტანეთ dot notation ით
რთული მნიშვნელობები გამოიტანეთ bracket notation ით
ბოლოს დაპრინტეთ მთლიანი ობიექტიც*/ 


let person = {
    name : "rezi",
    surname : "rezesidze",
    age : 15,
    hob : "playing basketball",
    "favorite food" : "ხინკალი",
    "favorite car" : "bmw",
    "favorite subject" : "math"
}

console.log(person.name)
console.log(person.surname)
console.log(person.age)
console.log(person.hob)
console.log(person["favorite food"])
console.log(person["favorite car"])
console.log(person["favorite subject"])









