/*1)შექმენით ცვლადი რომელშივ შეინახავ სტრინგს და დააკონსოლლოგებ მის ტიპს შემდეგ შეცვალე ცვლადის მნშვნელობა და შეინახე ბულეან ტიპის მონაცემი და დააკონსოლე
მისი ტიპი , ამის შემდეგ კიდევ შეცვალე მისი მნშვენლობა და შეინახე რიცხვი
და დააკონსოლე მისი ტიპი
*/

let name = "rezi"
console.log(typeof name)

name = true
console.log(typeof name)

name = 15
console.log(typeof name)


/*2)შექმენი ცვალადი შეინახე ასაკი და მეორე ცვლადში სახელი , შენი დავალებაა კონსოლში გამოიტანო შემდეგი ტექსტი --> "my name is  ... and my age is ..."

ეს დავალება შეასრულეთ ჩვეულებრივვ კონკატინაციიტათ და string interpolation ითაც და გამოიტანე ორივე შედეგი კონსოლში*/ 

let age = 15
let name2 = "rezi"

console.log("my name is "+ name2 + " and my age is " + age)

console.log(`my name is ${name2} and my age is ${age}`)

/*3)შექმენით ცვლადი სადაც შეინახავთ თქვენი სახელი შენახული ,
if ით შეამოწმე თუ ცვლადში შენახული სახელი უდრის "saba"
კონსოლში გამოიტანე რომ "this variable is holding saba" სხვა
შემთხვევაში კონსოლში გამოიტანე "this variable holding other name"*/ 

let name3 = "rezi"

if(name3 == "saba"){
    console.log("this variable is holding saba")
}else{
    console.log("this variable holding other name")
}
