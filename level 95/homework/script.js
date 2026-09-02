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







