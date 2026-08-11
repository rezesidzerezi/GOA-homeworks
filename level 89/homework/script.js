/*1)შექმენი სტრინგი:

let text = "I like cats";

replace() მეთოდის გამოყენებით შეცვალე "cats" სიტყვა "dogs"-ით.*/ 

let text = "I like cats"

console.log(text.replace("cats","dogs"))

/*2)let text = "Hello Goga";

შეცვალე "Goga" სიტყვა "Nika"-ით და დაბეჭდე შედეგი.*/ 

let text2 = "Hello Goga"

console.log(text2.replace("Goga","Nika"))

/*3)let text = "apple banana apple orange apple";

replaceAll()-ის გამოყენებით ყველა "apple" შეცვალე "mango"-თი.*/ 

let text3 = "apple banana apple orange apple"

console.log(text3.replaceAll("apple","mango"))


/*4)let text = "JavaScript is easy. JavaScript is fun.";

ყველა "JavaScript" შეცვალე "Python"-ით.*/ 

let text4 = "JavaScript is easy. JavaScript is fun."

console.log(text4.replaceAll("JavaScript","Python"))

/*5)let text = "JavaScript";

slice()-ის გამოყენებით გამოიტანე:Java*/

let text5 = "JavaScript"

console.log(text5.slice(0,4))

/*6)let text = "Programming";

slice()-ის გამოყენებით გამოიტანე:gram*/ 

let text6 = "Programming"

console.log(text6.slice(3,7))

/*7)შექმენი:

let score = 50;

შემდეგ შეცვალე score-ის მნიშვნელობა 100-ით და დაბეჭდე.*/ 

let score = 50

score = 100

console.log(score)

/*8)let number = 10;

+= ოპერატორის გამოყენებით დაუმატე 5.*/ 

let number = 10

number += 5

console.log(number)

/*9)let money = 100;

-= ოპერატორის გამოყენებით გამოაკელი 30.

დაბეჭდე რესულტი*/ 

let money = 100

money -= 30

console.log(money)

/*10)let number = 5;
*= ოპერატორის გამოყენებით გაამრავლე 4-ზე.*/ 

let number2 = 5

number2 *= 4 

console.log(number2)

/*11)let number = 100;

/= ოპერატორის გამოყენებით გაყავი 5-ზე.*/ 

let number3 = 100

number3 /= 5

console.log(number3)

/*12)let balance = 500;

წარმოიდგინე, რომ:

დახარჯე 100 → -=
დაგერიცხა 200 → +=
დახარჯე 50 → -=
თანხა გაორმაგდა → *=

ბოლოს გამოიტანე balance.*/ 

let balance = 500

balance -= 100
balance += 200
balance -= 50
balance *= 2

console.log(balance)

/*13)შექმენი ცვლადი და შეინმახე რიცხვი

გაზარდე ეს რიცხვი 1 ით და დაბეჭდე , შემდეგ შშეამცირე 1 ით და დაბეჭდე*/ 

let number4 = 100

number4 ++

console.log(number4)

number4 --

console.log(number4)

/*14)შექმენი ორი ცვლადი:

let age = 15;
const country = "Georgia";

age შეცვალე სხვა მნიშვნელობით.

შემდეგ სცადე country-ს შეცვლა.

დააკვირდი განსხვავებას.*/ 

let age = 15
const country = "Georgia"

age = 67
// country = "spain"


/*15)let price = 100;
let quantity = 3;

გამოთვალე ჯამური ფასი price და quantity-ის გამოყენებით.

შემდეგ price-ს 20 დააკელი -= ოპერატორით და თავიდან გამოთვალე ჯამური ფასი.*/ 

let price = 100
let quantity = 3

console.log(price * quantity)
price -= 20
console.log(price * quantity)


