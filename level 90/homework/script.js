/*1)შექმენი 4 ცვლადი let ის გამოყენებით,

1)name
2)surname
3)age
4)adress

გამოიტანე შემდეგნაირი ტექსტი : hello,my name is ... ,my surname is ... and my age is ... age , i live in ... . 

სამი წერტილის მაგივრად უნდა ჩასვათ ცვლადის მნიშვნელობები,გამოიყენეთ string interpolation --> `...${}...`*/

let name = "rezi"
let surname = "rezesidze"
let age = "15"
let adress = "qutaisi"

console.log(`hello, my name is ${name}, my surname is ${surname} and my age is ${age}, i live in ${adress} .`)

/*2)typeof — მარტივი

შექმენი 5 ცვლადი სხვადასხვა ტიპის მნიშვნელობით:

string
number
boolean
undefined
object

typeof-ის გამოყენებით დაბეჭდე თითოეულის ტიპი.*/ 

let name2 = "rezi"
let age2 = 15
let bool = true
let nothing

console.log(typeof name2)
console.log(typeof age2)
console.log(typeof bool)
console.log(typeof nothing)


/*3)შექმენი name ცვლადი. if/else-ით შეამოწმე, იწყება თუ არა სახელი "G"-ით startsWith()-ის გამოყენებით.*/ 

let name3 = "rezi"

if(name3.startsWith("G")){
    console.log(true)
}else{
    console.log(false)
}

/*4)შექმენი word ცვლადი. შეამოწმე, იწყება თუ არა "Java"-თი.
თუ კი:
This word starts with Java
სხვა შემთხვევაში:
This word does not start with Java*/ 

let word = "Javascript"

if(word.startsWith("java")){
    console.log("This word starts with Java")
}else{
    console.log("This word does not start with Java")
}

/*5)შექმენი username. თუ username იწყება "admin"-ით, გამოიტანე:
Welcome, admin!
სხვა შემთხვევაში:
Welcome, user!*/ 

let username = "user67"

if(username.startsWith("admin")){
    console.log("Welcome, admin!")
}else{
    console.log("Welcome, user!")
}

/*6)შექმენი name და city. Interpolation-ის გამოყენებით გამოიტანე:
My name is Goga and I live in Tbilisi.*/ 

let name4 = "Goga"
let city = "Tbilisi"

console.log(`My name is ${name4} and I live in ${city}.`)

/*7)შექმენი username და name.

თუ username იწყება "admin"-ით, გამოიტანე:

Welcome, ${name}! You are an admin.

სხვა შემთხვევაში:

Welcome, ${name}! You are a regular user.*/ 

let name5 = "chad"
let username2 = "admin"

if(username2.startsWith("admin")){
    console.log(`Welcome, ${name5}! You are an admin.`)
}else{
    console.log(`Welcome, ${name5}! You are a regular user.`)
}

/*9)შექმენი name და username.

თუ username იწყება "teacher"-ით:
Hello ${name}, you are a teacher.

სხვა შემთხვევაში:
Hello ${name}, you are a student.*/ 

let name6 = "rezi"
let username3 = "rezesidze"

if(username3.startsWith("teacher")){
    console.log(`Hello ${name6}, you are a teacher.`)
}else{
    console.log(`Hello ${name6}, you are a student.`)
}


