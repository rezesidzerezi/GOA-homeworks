/*1)let songs = ["Song A", "Song B", "Song C"];
დაამატე "Song D" და "Song E" მასივის ბოლოში push()-ით.
წაშალე ბოლო სიმღერა pop()-ით.
კიდევ ერთხელ დაამატე "Song F".
დაბეჭდე საბოლოო მასივი და წაშლილი ელემენტი.*/ 

let songs = ["Song A", "Song B", "Song C"]

songs.push("Song D","Song E")
songs.pop()
songs.push("Song F")
console.log(songs)

console.log("Song E")

/*2)let scores = [45, 67, 89, 34, 72];

push()-ით დაამატე 91 და 56.

შემდეგ pop()-ის გამოყენებით წაშალე ბოლო ელემენტი.

დაბეჭდე:

განახლებული მასივი

მასივის ახალი სიგრძე*/

let scores = [45, 67, 89, 34, 72]

scores.push(91,56)
scores.pop()

console.log(scores)
console.log(scores.length)

/*3)let students = ["Nika", "Gio", "Luka", "Ana"];
shift()-ით ამოიღე პირველი მოსწავლე.
unshift()-ით დასაწყისში დაამატე "Dato" და "Saba".

დაბეჭდე საბოლოო მასივი.*/ 

let students = ["Nika", "Gio", "Luka", "Ana"]

students.shift()
students.unshift("Dato","Saba")

console.log(students)

/*4)let messages = ["Hello", "How are you?", "Goodbye"];
ამოიღე პირველი შეტყობინება.
დასაწყისში დაამატე "Important!".
დასაწყისში დაამატე "Warning!".
ბოლოს დაამატე "See you!".
ბოლოს ამოიღე ბოლო შეტყობინება.

დაბეჭდე საბოლოო შედეგი.*/ 

let messages = ["Hello", "How are you?", "Goodbye"]

messages.shift()
messages.unshift("Important!")
messages.unshift("Warning!")
messages.push("See you!")
messages.pop()

console.log(messages)

/*5)let products = ["Laptop", "Phone", "Tablet", "Watch", "Headphones", "Camera"];

slice()-ის გამოყენებით შექმენი:

პირველი 3 პროდუქტის ახალი მასივი.
ბოლო 3 პროდუქტის ახალი მასივი.
"Phone"-დან "Watch"-მდე პროდუქტების ახალი მასივი.

მთავარი პირობა: ორიგინალი products არ უნდა შეიცვალოს.*/ 

let products = ["Laptop", "Phone", "Tablet", "Watch", "Headphones", "Camera"]

let newproducts1 = products.slice(0,3)
let newproducts2 = products.slice(3)
let newproducts3 = products.slice(1,4)


/*6)let numbers = [10, 20, 30, 40, 50, 60, 70, 80];

slice()-ით მიიღე:

[30, 40, 50, 60]

შემდეგ მიიღე:

[50, 60, 70, 80]

ორიგინალი მასივი უცვლელი უნდა დარჩეს.*/ 

let numbers = [10, 20, 30, 40, 50, 60, 70, 80]

let numbers1 = numbers.slice(2,6)

console.log(numbers1)

let numbers2 = numbers.slice(4)

console.log(numbers2)


/*7)let colors = ["red", "blue", "green", "yellow", "black"];

splice()-ის გამოყენებით:

წაშალე "green".
"blue"-ს შემდეგ დაამატე "purple".
"yellow" შეცვალე "orange"-ით.

საბოლოოდ უნდა მიიღო:

["red", "blue", "purple", "orange", "black"]*/ 

let colors = ["red", "blue", "green", "yellow", "black"]

colors.splice(2, 1, "purple")
colors.splice(3, 1, "orange")

console.log(colors)

/*8)let numbers = [5, 10, 15, 20, 25, 30];

splice()-ის გამოყენებით:

წაშალე 15 და 20;
მათ ადგილას ჩასვი 100 და 200;
შემდეგ ბოლოში არსებული 30 წაშალე.*/ 

let numbers3 = [5, 10, 15, 20, 25, 30]

numbers3.splice(2, 2, 100, 200)
numbers3.pop()

/*9)let fruits = ["apple", "banana", "orange", "kiwi", "mango"];

toSpliced()-ით შექმენი ახალი მასივი, სადაც:

"orange" წაშლილია;
მის ადგილას არის "watermelon".

შემდეგ დაბეჭდე ორიგინალი და ახალი მასივი, რათა დარწმუნდე, რომ ორიგინალი არ შეცვლილა.*/ 

let fruits = ["apple", "banana", "orange", "kiwi", "mango"]

let newfruits = fruits.toSpliced(2, 1, "watermelon")

console.log(fruits)
console.log(newfruits)

/*10)let numbers = [10, 20, 30, 40, 50];

ჯერ splice()-ით შეცვალე მასივი ისე, რომ 30 შეიცვალოს 100-ით.

შემდეგ თავიდან შექმენი იგივე საწყისი მასივი და toSpliced()-ით გააკეთე იგივე ცვლილება.

დაბეჭდე ორივე შედეგი და შეამოწმე, რა განსხვავებაა splice()-სა და toSpliced()-ს შორი*/ 

let numbers4 = [10, 20, 30, 40, 50] 

numbers4.splice(2, 1, 100)

let numbers5 = [10, 20, 30, 40, 50] 

let newnum = numbers5.toSpliced(2, 1, 100)

console.log(numbers4)
console.log(newnum)

/*11)მოცემულია:

let data1 = [10, 20, 30];
let data2 = "Hello";
let data3 = 100;
let data4 = ["A", "B"];

Array.isArray()-ის გამოყენებით შეამოწმე თითოეული ცვლადი არის თუ არა მასივი.

დაბეჭდე შესაბამისი პასუხები:

data1 is array
data2 is not array
...*/ 

let data1 = [10, 20, 30]
let data2 = "Hello"
let data3 = 100
let data4 = ["A", "B"]

console.log(Array.isArray(data1))
console.log("data1 is array")

console.log(Array.isArray(data2))
console.log("data2 is not array")

console.log(Array.isArray(data3))
console.log("data3 is not array")

console.log(Array.isArray(data4))
console.log("data4 is array")

/*12)let sentence = "JavaScript is very interesting";

split()-ის გამოყენებით მიიღე:

["JavaScript", "is", "very", "interesting"]

შემდეგ დაბეჭდე:

სიტყვების რაოდენობა;
პირველი სიტყვა;
ბოლო სიტყვა.*/ 

let sentence = "JavaScript is very interesting"

let newsentance = sentence.split(" ")

console.log(newsentance.length)
console.log(newsentance[0])
console.log(newsentance[3])

/*13)let students = "Nika,Gio,Luka,Ana,Saba";

split()-ით გადააქციე მასივად.

შემდეგ დაბეჭდე თითოეული მოსწავლის სახელი ცალ-ცალკე.*/ 

let students1 = "Nika,Gio,Luka,Ana,Saba"

let newstudents = students1.split(",")

console.log(newstudents[0])
console.log(newstudents[1])
console.log(newstudents[2])
console.log(newstudents[3])
console.log(newstudents[4])

/*14)let words = ["HTML", "CSS", "JavaScript", "React"];

join()-ის გამოყენებით შექმენი:

HTML - CSS - JavaScript - React

შემდეგ იგივე მასივიდან შექმენი:

HTML | CSS | JavaScript | React*/ 

let words = ["HTML", "CSS", "JavaScript", "React"]

let newword = words.join(" - ")
console.log(newword)

let newword2 = words.join(" | ")
console.log(newword2)

/*15)let numbers = ["555", "12", "34", "56"];

join()-ით მიიღე:

555-12-34-56*/ 

let numbers6 = ["555", "12", "34", "56"]

let newnum1 = numbers6.join("-")
console.log(newnum1)

/*16)let boys = ["Nika", "Gio", "Luka"];
let girls = ["Ana", "Mariam", "Sali"];

concat()-ით შექმენი ერთი საერთო მასივი:

["Nika", "Gio", "Luka", "Ana", "Mariam", "Sali"]

ორიგინალი მასივები არ უნდა შეცვალო.*/ 

let boys = ["Nika", "Gio", "Luka"]
let girls = ["Ana", "Mariam", "Sali"]

let arr = boys.concat(girls)

console.log(arr)

/*17)
let morning = ["Math", "English"];
let afternoon = ["History", "Physics"];
let evening = ["Programming", "Design"];

concat()-ით შექმენი დღის სრული განრიგი.*/ 

let morning = ["Math", "English"]
let afternoon = ["History", "Physics"]
let evening = ["Programming", "Design"]

let new1 = morning.concat(afternoon,evening)

console.log(new1)

/*18)let cart = ["Phone", "Laptop", "Mouse"];

გააკეთე შემდეგი:

push() → დაამატე "Keyboard".
unshift() → დასაწყისში დაამატე "USB Cable".
pop() → წაშალე ბოლო პროდუქტი.
shift() → წაშალე პირველი პროდუქტი.
splice() → "Mouse" შეცვალე "Headphones"-ით.
slice() → შექმენი კალათის პირველი 2 პროდუქტის ახალი მასივი.
concat() → შეუერთე მეორე სია:
let extraProducts = ["Webcam", "Microphone"];
join() → საბოლოო კალათა გადააქციე ერთ ტექსტად, სადაც პროდუქტები გამოყოფილია " | "-ით.*/ 

let cart = ["Phone", "Laptop", "Mouse"]

cart.push("Keyboard")
cart.unshift("USB Cable")
cart.pop()
cart.shift()
cart.splice(2, 1, "Headphones")

let newcart = cart.slice(0,2)

let extraProducts = ["Webcam", "Microphone"]

let newcart1 = newcart.concat(extraProducts)

let result = newcart1.join(" | ")

console.log(result)

/*19let data = "apple,banana,orange,kiwi,mango";

პირველ ეტაპზე მონაცემი მხოლოდ string-ია.

დავალება:

split()-ით გადააქციე მასივად.
Array.isArray()-ით შეამოწმე მიღებული მონაცემი.
push()-ით დაამატე "watermelon".
unshift()-ით დაამატე "strawberry".
pop()-ით ამოიღე ბოლო ელემენტი.
shift()-ით ამოიღე პირველი ელემენტი.
splice()-ით "orange" შეცვალე "peach"-ით.
slice()-ით შექმენი ახალი მასივი, რომელიც შეიცავს მხოლოდ შუა 3 ელემენტს.
toSpliced()-ით შექმენი კიდევ ერთი ახალი მასივი, სადაც ერთი ელემენტი წაშლილია.
concat()-ით შეუერთე:
let extraFruits = ["grape", "melon"];
join()-ით საბოლოო შედეგი გადააქციე ერთ სტრიქონად:
apple | banana | peach | ...*/ 

let data = "apple,banana,orange,kiwi,mango"

let newdata = data.split(",")
console.log(Array.isArray(newdata))

newdata.push()
newdata.unshift("strawberry")
newdata.pop()
newdata.shift()
newdata.splice(2, 1, "peach")

let newdata2 = newdata.slice(0,3)

let newdata3 = newdata2.toSpliced(0,1)
let extraFruits = ["grape", "melon"]

let newdata4 = newdata3.concat(extraFruits)

let result1 = newdata4.join(" | ")

console.log(result1)





