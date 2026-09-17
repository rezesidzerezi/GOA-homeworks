/*let prices = [120, 45, 300, 80, 150, 25, 400];

შექმენი პროგრამა, რომელიც:

for ციკლით გადაუვლის ყველა ფასს.

თუ ფასი 100-ზე მეტია, ფასს  20 იანფასდაკლებას გაუკეთებს.

თუ ფასი 50-დან 100-მდეა, ფასს 10-იან ფასდაკლებას გაუკეთებს.

სხვა შემთხვევაში ფასს არ შეცვლის.

განაახლებს ფასებს თავდაპირველ მასივში.

დაითვლის ფასდაკლებული პროდუქტების საერთო ღირებულებას (ჯამს).

უკუღმა ციკლით დაბეჭდავს საბოლოო ფასებს.*/ 


let prices = [120, 45, 300, 80, 150, 25, 400]
let sum = 0

for(let i = prices.length - 1; i > 0; i--){
    if(prices[i] > 100){
        prices[i] - 20
    }else if(prices[i] > 50 && prices[i] < 100){
        prices[i] - 10
    }
    sum += prices[i]
    console.log(prices[i])
}

console.log(sum)

/*2)let messages = [
    "  Hello Goga  ",
    "JAVASCRIPT is fun",
    "  I LOVE CODING ",
    "React is awesome",
    "  Learn JavaScript  "
];

შექმენი პროგრამა, რომელიც:

თითოეულ შეტყობინებას მოაშორებს ზედმეტ სივრცეებს გვერდებიდან. 

ყველა შეტყობინებას გადაიყვანს პატარა ასოებში.

შეამოწმებს, შეიცავს თუ არა შეტყობინება სიტყვას "javascript" --> includes() გამოიყენეთ.

თუ შეიცავს, დაბეჭდავს "JavaScript message found".

დაითვლის, რამდენი შეტყობინება შეიცავს ამ სიტყვას დაგჭრდებათ count = 0 ცვლადი .

უკუღმა ციკლით დაბეჭდავს ყველა შეტყობინებას, რომელიც 15 სიმბოლოზე გრძელია.*/ 

let messages = ["  Hello Goga  " , "JAVASCRIPT is fun" , "  I LOVE CODING " , "React is awesome" , "  Learn JavaScript  "]

let count = 0

for(let i = messages.length - 1; i > 0; i--){
    messages[i] = messages[i].trim()
    messages[i] = messages[i].toLowerCase()
    if(messages[i].includes("javascript")){
        console.log("JavaScript message found")
        count += 1
    }

    if(messages[i].length > 15){
        console.log(messages[i])
    }
}

/*3)მოცემულია:

let numbers = [12, 5, 18, 7, 24, 9, 30, 11, 6, 21];

შექმენი პროგრამა, რომელიც:

დაბეჭდავს ყველა ლუწ რიცხვს.

დაითვლის ყველა კენტი რიცხვის ჯამს.

იპოვის ყველაზე დიდ რიცხვს.

იპოვის ყველაზე პატარა რიცხვს.

თუ რიცხვი 10-ზე მეტია და 25-ზე ნაკლებია, დაბეჭდავს "Special number".

უკუღმა ციკლით დაბეჭდავს ყველა რიცხვს, რომელიც 3-ის ჯერადია.*/ 

let numbers = [12, 5, 18, 7, 24, 9, 30, 11, 6, 21];
let sum1 = 0
let biggest = numbers[0]
let smallest = numbers[0]

for(let i = numbers.length; i > 0;i--){
    if(numbers[i] % 2 == 0){
        console.log(numbers[i])
    }else{
        sum1 += numbers[i]
    }
    if(numbers[i] > biggest){
        biggest = numbers[i]
    }
    if(numbers[i] < smallest){
        smallest = numbers[i]
    }
    if(numbers[i] > 10 && numbers[i] < 25){
        console.log("Special number")
    }
    if(numbers[i] % 3 == 0){
        console.log(numbers[i])
    }
}

/*4)let names = [
    "  goga ",
    "NIKA",
    "  ana  ",
    "Giorgi",
    "  mariam"
];

შექმენი პროგრამა, რომელიც:

ყველა სახელს მოაშორებს ზედმეტ სივრცეებს.

თითოეული სახელის პირველ ასოს გადაიყვანს დიდ ასოში, ხოლო დანარჩენ ასოებს — პატარა ასოებში.

განაახლებს თავდაპირველ მასივს.

დაითვლის, რამდენი სახელი შეიცავს ასო "a"-ს.

უკუღმა ციკლით დაბეჭდავს სახელებს.

თუ სახელი "goga"-ს უდრის, გამოიტანს "Hello Goga!" შეტყობინებას.*/ 

let names = ["  goga " , "NIKA" , "  ana  " , "Giorgi" , "  mariam"]

let count1 = 0


for(let i = names.length - 1; i > 0; i--){
    names[i] = names[i].trim()
    names[i] = names[i].toLowerCase()
    names[i][0] = names[i][0].toUpperCase()
    if(names[i].includes("a")){
        count1 += 1
    }

    console.log(names[i])

    if(names[i] == "goga"){
        console.log("Hello goga")
    }
}

console.log(count1)

/*5)let scores = [45, 90, 67, 32, 100, 78, 55, 88, 40, 95];

შექმენი პროგრამა, რომელიც:

დაითვლის ყველა მოსწავლის ქულების ჯამს --> let sum = 0.

გამოთვლის საშუალო ქულას --> შეინახეთ ცვლადდში --> avarage .

დაითვლის ჩაჭრილი მოსწავლეების რაოდენობას. ჩაჭრილია მოსწავლე, რომელსაც 50-ზე ნაკლები ქულა აქვს, 
მათ ოდენობა შეინახეთ ცვლადში failedStudents = 0.

იპოვის ყველაზე მაღალ და ყველაზე დაბალ ქულას შეინახეთ ცვლადებში.

მასივის ყველა ქულას შეამოწმებს და დაბეჭდავს --> :

90 ან მეტი — "Excellent"

70-დან 89-მდე — "Good"

50-დან 69-მდე — "Passed"

50-ზე ნაკლები — "Failed"

შექმნის ახალ მასივს, რომელშიც მხოლოდ 80-ზე მაღალი ქულები იქნება დაგჭირდებათ ცარიელი მასივი და .push().

უკუღმა ციკლით დაბეჭდავს ყველა ქულას.

დაითვლის, რამდენი მოსწავლე იღებს საშუალოზე მაღალ ქულას-->
შეადარებთ სიის თითოეულ ელემენტს ზემოთ გამოთვლილ 
საშვალო ქულას და დაითვლით ცვლადში moreThanAvarageScoreCount = 0.*/ 

let scores = [45, 90, 67, 32, 100, 78, 55, 88, 40, 95];

let sum2 = 0

let avarage = 0

let failedStudents = 0

let thegreatestgrade = scores[0]
let thesmallestgrade = scores[0]

let moreThanAvarageScoreCount = 0

let newscores = []


for(let i = scores.length - 1; i > 0; i--){
    sum2 += scores[i]
    avarage += scores[i] / scores.length
    if(scores[i] < 50){
    failedStudents += 1
    }

    if(thegreatestgrade < scores[i]){
    thegreatestgrade = scores[i]
    }

    if(thesmallestgrade > scores[i]){
    thesmallestgrade = scores[i]
    }

    if(scores[i] >= 90){
    console.log("Excellent")
    }else if(scores[i] >= 70 && scores[i] <= 89){
    console.log("Good")
    }else if(scores[i] >= 50 && scores[i] <= 69){
    console.log("Passed")
    }else{
    console.log("Failed")
    }

    if(scores[i] >= 80){
    newscores.push(scores[i])
    }

    console.log(scores[i])


    if(scores[i] > avarage){
    moreThanAvarageScoreCount += 1
    }


}

/*6)let names = ["goga", "NIKA", "ana", "Giorgi", "MARIAM", "dato"];

let scores = [85, 42, 96, 67, 51, 73];

შექმენი პროგრამა, რომელიც:

ორივე მასივს ერთი და იმავე for ციკლით გადაუვლის.

თითოეულ სახელს მოაშორებს ზედმეტ სივრცეებს და პირველ ასოს დიდად გამოიტანს.

თითოეული მოსწავლის ქულას შეამოწმებს და შესაბამის შეფასებას მიანიჭებს:

90–100: "Excellent"

75–89: "Very Good"

60–74: "Good"

50–59: "Passed"

50-ზე ნაკლები: "Failed"

დაითვლის ჩაჭრილი მოსწავლეების რაოდენობას.

დაითვლის 80-ზე მაღალი ქულების ჯამს.

იპოვის ყველაზე მაღალი ქულის მქონე მოსწავლის სახელსა და ქულას.

გამოთვლის ყველა მოსწავლის საშუალო ქულას.

უკუღმა ციკლით გამოიტანს ყველა მოსწავლის სახელსა და ქულას.*/ 

let names1 = ["goga", "NIKA", "ana", "Giorgi", "MARIAM", "dato"];

let scores1 = [85, 42, 96, 67, 51, 73];

let failedStudents1 = 0

let thebestscores = 0

let thebest = scores1[0]

let avarage1 = 0

for(let i = names1.length - 1; i > 0; i--){
    names1[i] = names1[i].trim()
    names1[i][0] = names1[i][0].toUpperCase()
    
    if(scores1[i] >= 90 && scores1[i] <= 100){
        console.log("Excellent")
    }else if(scores1[i] >= 75 && scores1[i] <= 89){
        console.log("Very Good")
    }else if(scores1[i] >= 60 && scores1[i] <= 74){
        console.log("Good")
    }else if(scores1[i] >= 50 && scores1[i] <= 59){
        console.log("Passed")
    }else{
        console.log("Failed")
        failedStudents1 += 1
    }

    if(scores1[i] > 80){
        thebestscores += scores1[i]
    }
    
    if(thebest < scores1[i]){
        thebest = scores1[i]
    }

    if(scores1.indexOf(thebest) == names1.indexOf(names1[i])){
        console.log(names1[i] + " " + scores1[i])
    }

    avarage1 += scores1[i] / scores1.length

    console.log(names1[i] + " " + scores1[i])

}

/*7)მოცემულია მაღაზიის პროდუქტების სახელები, ფასები და გაყიდული რაოდენობები:

let products = ["Laptop", "Phone", "Mouse", "Keyboard", "Monitor", "Headphones"];

let prices = [2500, 1800, 80, 150, 900, 300];

let quantities = [3, 5, 20, 12, 4, 8];

შექმენი პროგრამა, რომელიც:

თითოეული პროდუქტისთვის გამოთვლის გაყიდვების თანხას — ფასი გამრავლებული გაყიდულ რაოდენობაზე.

თუ პროდუქტის გაყიდვების თანხა 5000-ზე მეტია, გამოიტანს "High sales".

თუ გაყიდვების თანხა 1000-დან 5000-მდეა, გამოიტანს "Medium sales".

სხვა შემთხვევაში გამოიტანს "Low sales".

დაითვლის ყველა პროდუქტის გაყიდვებიდან მიღებულ საერთო თანხას.

დაითვლის იმ პროდუქტების რაოდენობას, რომელთა გაყიდული რაოდენობა 10-ზე მეტია.

უკუღმა ციკლით გამოიტანს პროდუქტების სახელებსა და გაყიდვების თანხებს.*/ 

let products = ["Laptop", "Phone", "Mouse", "Keyboard", "Monitor", "Headphones"]

let prices1 = [2500, 1800, 80, 150, 900, 300]

let quantities = [3, 5, 20, 12, 4, 8]

let newsalary = 0

for(let i = products.length - 1; i > 0; i--){
    let salary = prices1[i] * quantities[i]
    

    if(salary >= 5000){
        console.log("High sales")
    }else if(salary >= 1000 && salary < 5000){
        console.log("Medium sales")
    }else{
        console.log("Low sales")
    }

    newsalary += salary
    

    if(quantities[i] > 10){
        console.log(products[i])
    }

    console.log(products[i] + " " + salary)
}






