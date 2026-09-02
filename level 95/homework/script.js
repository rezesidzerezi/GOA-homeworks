/*7)მოცემულია კოდი:

let name = "Goga";

function first() {
    let age = 20;

    function second() {
        let city = "Tbilisi";

        console.log(name);
        console.log(age);
        console.log(city);
    }

    second();
}

first();

დავალება:

მიუთითე თითოეული ცვლადის Scope.
რომელი ცვლადის გამოყენება შეუძლია second() ფუნქციას?

//შეუძლია city,name,age

რომელი ცვლადის გამოყენება არ შეუძლია first() ფუნქციას?

//არ შეუძლია city

შეცვალე კოდი ისე, რომ city დაბეჭდო first() ფუნქციიდანაც.*/ 

let name = "Goga"

function first() {
    let age = 20
    let city = "Tbilisi"

    function second(){
        console.log(name)
        console.log(age)
        console.log(city)
    }

    second()
    console.log(city)
}

first()

/*8)იპოვე შეცდომა Scope-ში
let score = 100;

if (score > 50) {
    let message = "Passed";
}

console.log(message);

დავალება:
ახსენი, რატომ იძლევა ეს კოდი შეცდომას და შეცვალე ისე, რომ "Passed" დაიბეჭდოს.*/ 

let score = 100

if (score > 50) {
    let message = "Passed"
    console.log(message)
}

/*რადგან console ბლოკის გარეთ არის და message block of code არის ამის გამო ერორია რადგან მხოლოდ ბლოკში შეგვიძლია მისი გამოყენება*/ 



/*9)let x = 10;

function outer() {
    let x = 20;

    function middle() {
        let y = 30;

        function inner() {
            let x = 40;

            console.log(x);
            console.log(y);
        }

        inner();
    }

    middle();
}

outer();

დავალება:

რა დაიბეჭდება?

// დაიბეჭდება 40,30

inner()-ში რომელი x გამოიყენება?

// გამოიყენება მესამე x ანუ 40

თუ inner()-დან let x = 40 წავშლით, რომელი x იქნება გამოყენებული?

// გამოყენებული იქნება მეორე x ანუ 20

თუ middle()-დანაც წავშლით let y = 30-ს, რა მოხდება console.log(y)-ზე?*/ 

// არ გამოიტანს არაფერს

let x = 10

function outer() {
    let x = 20

    function middle() {
        let y = 30

        function inner() {
            let x = 40

            console.log(x)
            console.log(y)
        }

        inner()
    }

    middle()
}

outer()

/*10)let country = "Georgia";

function school() {
    let students = 20;

    if (students > 10) {
        let teacher = "Goga";

        console.log(country);
        console.log(students);
        console.log(teacher);
    }
}

დავალება: თითოეულ console.log()-თან მიუწერე:

country → ______ scope
students → ______ scope
teacher → ______ scope*/ 

let country = "Georgia"

function school() {
    let students = 20

    if (students > 10) {
        let teacher = "Goga"

        console.log(country) // global scope
        console.log(students) // local scope
        console.log(teacher) // local scope
    }
}

/*11)კომენტარის სახით ახსსენი თუ რა არის scope როგორი სკოუპებია რსებობს და ყველა მნშვნელოვანი ინფორმაცია რაც ვისწავლეთ*/ 

/*scope -- არის თუ სად არის ჩვენს მიერ შექმნილი ცვლადი ხელმისაწვდომი.
block of code -- არის ყველაფერი რაც მოთავსებულია {}-ში
scope არის 2 სახის global და local
global -- იქმნება ფრჩხილებს გარეთ და შეგვიძლია გამოვიყენოთ ყველგან
local -- იქმნება ფრჩხილებს შიგნით და შეგვიძლია გამოვიყენოთ თავის ფრჩხილებს შიგნით*/ 
