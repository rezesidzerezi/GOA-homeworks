// /*1)მოცემულია რიცხვი number = 100.

// ციკლის გამოყენებით:

// დაბეჭდე ყველა რიცხვი 1-დან 100-მდე.

// დაბეჭდე მხოლოდ ის რიცხვები, რომლებიც იყოფა 3-ზე.

// დაბეჭდე რამდენი ასეთი რიცხვია.*/ 

// let number = 100

// for(let i = 0; i < number;i++){
//     if(i % 3 == 0){
//         console.log(i)
//     }
// }

// /*2)მოცემულია მასივი:

// const numbers = [-5, 10, -2, 8, 0, 15, -7];

// ციკლისა და if...else-ის გამოყენებით:

// დათვალე დადებითი რიცხვები.

// დათვალე უარყოფითი რიცხვები.

// დათვალე ნულების რაოდენობა.*/ 

// const numbers = [-5, 10, -2, 8, 0, 15, -7]

// let positive = 0
// let negative = 0
// let zero = 0

// for(let i = 0;i < numbers.length;i++){
//     if(numbers[i] > 0){
//         positive += 1
//     }else if(numbers[i] < 0){
//         negative += 1
//     }else{
//         zero += 1
//     }
// }

// /*3)const secretNumber = 7;
// let guess = 1;

// while ციკლის გამოყენებით გაზარდე guess მანამ, სანამ ის არ გაუტოლდება secretNumber-ს.

// როდესაც იპოვი, დაბეჭდე "Correct number".*/ 

// const secretNumber = 7
// let guess = 1

// while(guess < secretNumber){
//     guess++
//     if(guess == 7){
//         console.log("Correct number")
//     }
// }

// /*4)do...while ციკლის გამოყენებით დაბეჭდე რიცხვები 1-დან 10-მდე.

// შემდეგ შეცვალე საწყისი მნიშვნელობა ისე, რომ ციკლის პირობა თავიდანვე false იყოს.

// შეამოწმე, რამდენჯერ შესრულდება ციკლი.*/

// let i = 10
// do{
//     console.log(i)
//     i++
// }while(i < 10)

// /*5)შექმენი ფუნქცია analyzeNumbers, რომელსაც გადაეცემა რიცხვების მასივი.

// ფუნქციამ ციკლის გამოყენებით უნდა:

// იპოვოს მასივის რიცხვების ჯამი.

// დათვალოს ლუწი რიცხვები.

// დათვალოს კენტი რიცხვები.

// დააბრუნოს მიღებული შედეგები.*/ 

// let numbers = [1,2,3,4,5,6,7,8,9,10]
// let sum = 0
// let counteven = 0
// let countodd = 0

// function analyzeNumbers(numbers){
//     for(let i = 0; i < numbers.length;i++){
//         sum += numbers[i]
//         if(numbers[i] % 2 == 0){
//             counteven += 1
//         }else{
//             countodd += 1
//         }
//     }

//     console.log(sum)
//     console.log(counteven)
//     console.log(countodd)
// }
// analyzeNumbers(numbers)

// /*6)const prices = [100, 250, 80, 400, 150];

// შექმენი ფუნქცია calculateDiscount, რომელსაც გადაეცემა ფასდაკლების პროცენტი.

// ფუნქციამ ციკლის გამოყენებით უნდა გამოთვალოს თითოეული პროდუქტის ახალი ფასი და დაბეჭდოს ყველა მათგანი.*/ 

// const prices = [100, 250, 80, 400, 150]

// function calculateDiscount(discount = [10,20,40,50,30]){
//     for(let i = 0; i < discount.length;i++){
//         console.log(prices[i] * discount[i] / 100)
//     }
// }

// calculateDiscount()


// /*7)შექმენი ფუნქცია findDivisors, რომელსაც გადაეცემა ერთი რიცხვი.

// ციკლის გამოყენებით იპოვე და დაბეჭდე ამ რიცხვის ყველა გამყოფი.

// მაგალითად, თუ გადაეცემა 12, უნდა დაიბეჭდოს 1, 2, 3, 4, 6 და 12.*/ 

// function findDivisors(num = 12){
//     for(let i = 0; i <= num ;i++){
//         if(num % i == 0){
//             console.log(i)
//         }
//     }
// }
// findDivisors()

// /*8)შექმენი ფუნქცია countVowels, რომელსაც გადაეცემა სტრინგი.

// ციკლის გამოყენებით დათვალე, რამდენი ხმოვანი ასოა სტრინგში.

// გამოიყენე if და სტრინგის მეთოდი includes().*/ 



// function countVowels(string = "rezi"){
//     let count = 0
//     for(let i = 0; i < string.length;i++){
//         if("aeiou".includes(string[i])){
//             count++
//         }
//     }
//     console.log(count)
// }
// countVowels()

// /*9)const numbers = [4, 8, 12, 25, 30, 40, 50];

// ციკლის გამოყენებით იპოვე პირველი რიცხვი, რომელიც 20-ზე მეტია.

// როგორც კი იპოვი, დაბეჭდე და შეწყვიტე ციკლის შესრულება break-ის გამოყენებით.*/ 

// const numbers = [4, 8, 12, 25, 30, 40, 50];

// let i = 0

// while(i < numbers.length){
//     if(numbers[i] > 20){
//         console.log(numbers[i])
//         break
//     }

//     i++
// }

// /*10)შექმენი ფუნქცია calculateSum, რომელსაც გადაეცემა რიცხვი n.

// ფუნქციაში შექმენი ცვლადი sum, რომლის საწყისი მნიშვნელობა იქნება 0.

// ციკლის გამოყენებით იპოვე 1-დან n-ის ჩათვლით რიცხვების ჯამი და დააბრუნე შედეგი.

// ფუნქციის გარეთ შექმენი სხვა ცვლადი სახელად sum და შეამოწმე, შეიცვალა თუ არა მისი მნიშვნელობა ფუნქციის შესრულების შემდეგ.*/ 

// function calculateSum(n = 15){
//     let sum = 0
//     for(let i = 0; i <= n; i++){
//         sum += i
//     }

//     console.log(sum)
// }

// calculateSum()

// let sum = 0

// /*11)const text = "JavaScript is fun and JavaScript is powerful";

// შექმენი ფუნქცია analyzeText, რომელსაც გადაეცემა სტრინგი.

// ფუნქციამ უნდა:

// ციკლის გამოყენებით დაბეჭდოს სტრინგის თითოეული სიმბოლო.

// დათვალოს სტრინგში არსებული "a" ასოების რაოდენობა.

// დათვალოს სტრინგში არსებული გამოტოვებების რაოდენობა.

// გამოიყენოს if და შეამოწმოს, არის თუ არა სიმბოლო ხმოვანი ასო.

// იპოვოს პირველი გამოტოვება და შეწყვიტოს ციკლი break-ის გამოყენებით.

// დაბეჭდოს სტრინგი უკუღმა.*/ 

// const text = "JavaScript is fun and JavaScript is powerful"

// function analyzeText(name){
//     let count = 0
//     let spacecount = 0
//     let vowelcount = 0
//     for(let i = name.length - 1; i > 0;i--){
//         console.log(name[i])

//         if(name[i] == "a" || name[i] == "A"){
//             count += 1
//             vowelcount += 1
//         }else if(name[i] == " "){
//             spacecount += 1
//         }else if("eiou".includes(name[i])){
//             vowelcount += 1
//         }


//         if(name[i] == " "){
//             break
//         }
//     }
//     console.log(vowelcount)
// }

// analyzeText(text)

// /*12)შექმენი ფუნქცია numberGame, რომელსაც გადაეცემა საიდუმლო რიცხვი.

// ფუნქციაში:

// შექმენი ცვლადი guess, რომლის საწყისი მნიშვნელობა იქნება 1.

// გამოიყენე while ციკლი.

// თუ guess საიდუმლო რიცხვზე ნაკლებია, გაზარდე ის 1-ით.

// თუ guess საიდუმლო რიცხვს გაუტოლდება, დაბეჭდე "You found it!" და შეწყვიტე ციკლი break-ით.

// დათვალე, რამდენი გამეორება დასჭირდა რიცხვის პოვნას.

// დააბრუნე გამეორებების რაოდენობა.*/ 

// function numberGame(num = 20){
//     let guess = 1
//     let count = 0
//     while(guess <= num){
//         if(guess == num){
//             console.log("You found it!")
//             break
//         }

//         count += 1
//         guess++
//     }

//     console.log("It was done in " + count +  " attempts")
// }

// numberGame()

// /*13)შექმენი პროგრამა, რომელიც 1-დან 500-მდე ყველა რიცხვს გადაუვლის.

// იპოვე:

// რამდენი რიცხვია 3-ის ჯერადი;
// რამდენი რიცხვია 5-ის ჯერადი;
// რამდენი რიცხვია ერთდროულად 3-ის და 5-ის ჯერადი;
// ყველა იმ რიცხვის ჯამი, რომელიც არც 3-ის და არც 5-ის ჯერადი არ არის;
// ყველაზე დიდი რიცხვი, რომელიც 7-ზე იყოფა.*/ 

// let count = 0
// let count1 = 0
// let count2 = 0
// let sum = 0
// let biggest = 0

// for(let i = 1; i <= 500; i++){
//     if(i % 3 === 0){
//         count++
//     }

//     if(i % 5 === 0){
//         count1++
//     }

//     if(i % 3 === 0 && i % 5 === 0){
//         count2++
//     }

//     if(i % 3 !== 0 && i % 5 !== 0){
//         sum += i
//     }

//     if(i % 7 === 0 && i > biggest){
//         biggest = i
//     }
// }

// console.log(count)
// console.log(count1)
// console.log(count2)
// console.log(sum)
// console.log(biggest)

// /*14)let number = 58374629;

// Loop-ის გამოყენებით გაარკვიე:

// რამდენი ციფრია რიცხვში;
// რამდენი ციფრია ლუწი;
// რამდენი კენტია;
// ციფრების ჯამი;
// ყველაზე დიდი ციფრი;
// ყველაზე პატარა ციფრი;
// რამდენი ციფრია 5-ზე მეტი.*/ 

// let number = String(58374629)

// let countlength = 0
// let counteven = 0
// let countodd = 0
// let sum = 0
// let biggest = number[0]
// let smallest = number[0]
// let count = 0

// let i = 0
// while(i < number.length){
//     countlength += 1
//     sum += Number(number[i])
    
//     if(Number(number[i]) % 2 == 0){
//         counteven++
//     }else{
//         countodd++
//     }

//     if(number[i] > biggest){
//         biggest = Number(number[i])
//     }else{
//         smallest = Number(number[i])
//     }

//     if(Number(number[i]) > 5){
//         count++
//     }
    
//     i++
// }

// console.log(countlength)
// console.log(counteven)
// console.log(countodd)
// console.log(sum)
// console.log(biggest)
// console.log(smallest)
// console.log(count)

// /*15)let numbers = [15, 8, 23, 42, 11, 67, 30, 19, 54, 72, 5];

// გაიარე მასივი loop-ით.

// თუ რიცხვი კენტია → გამოტოვე continue-ით.
// თუ რიცხვი 50-ზე მეტია → საერთოდ შეწყვიტე loop break-ით.
// დანარჩენი ლუწი რიცხვები გამოიტანე.
// ბოლოს გამოიტანე მათი ჯამი.*/ 

// let numbers = [15, 8, 23, 42, 11, 67, 30, 19, 54, 72, 5]

// let sum = 0

// let i = 0
// while(i <= numbers.length){
//     i++
//     sum += numbers[i]

//     if(numbers[i] % 2 !== 0){
//         continue
//     }else{
//         console.log(numbers[i])
//     }
    
//     if(numbers[i] > 50){
//         break
//     }
    
// }

// console.log(sum)

/*16)let balance = 1200;
let operations = [200, -150, -500, 300, -200, -1000, 400];

დადებითი რიცხვი ნიშნავს შეტანას, უარყოფითი — გატანას.

Loop-ის საშუალებით:

თითოეული ოპერაცია დაამუშავე;
თანხის შეტანისას გაზარდე balance;
თანხის გატანისას შეამოწმე საკმარისი თანხაა თუ არა;
თუ თანხა საკმარისი არ არის, ოპერაცია არ შეასრულო;
დაითვალე რამდენი გატანა შესრულდა;
დაითვალე რამდენი ოპერაცია ვერ შესრულდა;
ბოლოს გამოიტანე საბოლოო ბალანსი.*/ 

// let balance = 1200
// let operations = [200, -150, -500, 300, -200, -1000, 400]

// let i = 0
// let successful = 0
// let failed = 0

// while(i < operations.length){
//     if(operations[i] > 0){
//         balance += operations[i]
//     }else if(balance + operations[i] >= 0){
//         balance += operations[i]
//         successful++
//     }else{
//         failed++
//     }

//     i++
// }

// console.log(balance)
// console.log(successful)
// console.log(failed)

/*17)მოცემულია:

let numbers = [34, 12, 89, 45, 67, 23, 90, 11, 56, 78, 43, 29];

ერთი ან რამდენიმე loop-ის გამოყენებით იპოვე:

მაქსიმუმი;
მინიმუმი;
ჯამი;
საშუალო;
ლუწების რაოდენობა;
კენტების რაოდენობა;
50-ზე მეტი რიცხვების რაოდენობა;
50-ზე ნაკლები რიცხვების რაოდენობა;
ყველაზე დიდი ლუწი;
ყველაზე დიდი კენტი;
ყველაზე პატარა ლუწი;
ყველაზე პატარა კენტი.*/ 

// let numbers = [34, 12, 89, 45, 67, 23, 90, 11, 56, 78, 43, 29]

// let max = 0
// let min = numbers[0]
// let sum = 0
// let even = 0
// let odd = 0
// let biggerthan50 = 0
// let smallerthan50 = 0
// let biggesteven = 0
// let biggestodd = 0
// let smallesteven = 0
// let smallestodd = 0

// let i = 0
// while(i < numbers.length){
//     sum += numbers[i]

//     if(numbers[i] > max){
//         max = numbers[i]
//     }

//     if(numbers[i] < min){
//         min = numbers[i]
//     }

//     if(numbers[i] % 2 ==0){
//         even += 1
//     }else{
//         odd += 1
//     }

//     if(numbers[i] > 50){
//         biggerthan50 += 1
//     }else if(numbers[i] < 50){
//         smallerthan50 += 1
//     }

//     if(numbers[i] % 2 == 0 && numbers[i] > biggesteven){
//         biggesteven = numbers[i]
//     }else if(numbers[i] % 2 == 1 && numbers[i] > biggestodd){
//         biggestodd = numbers[i]
//     }

//     if(numbers[i] % 2 == 0 && numbers[i] < smallesteven){
//         smallesteven = numbers[i]
//     }else if(numbers[i] % 2 == 1 && numbers[i] < smallestodd){
//         smallestodd = numbers[i]
//     }

//     i++
// }

// console.log(max)
// console.log(min)
// console.log(sum)
// console.log(sum / numbers.length)
// console.log(even)
// console.log(odd)
// console.log(biggerthan50)
// console.log(smallerthan50)
// console.log(biggesteven)
// console.log(biggestodd)
// console.log(smallesteven)
// console.log(smallestodd)


/*18)let correctPin = 4821;
let attempts = [1234, 1111, 4821, 5555];

გადაამოწმე მცდელობები თანმიმდევრობით.

თუ PIN სწორია → "Access granted" და break.
არასწორი PIN-ის შემთხვევაში დაითვალე მცდელობა.
თუ 3 არასწორი მცდელობა დაგროვდა → "Card blocked" და break.
თუ სწორი PIN საერთოდ ვერ მოიძებნა → "Access denied".*/ 

// let correctPin = 4821
// let attempts = [1234, 1111, 5555, 4821]

// let count = 0

// let i = 0
// while(i < attempts.length){
//     if(count == 3){
//         console.log("Card blocked")
//         break
//     }

//     if(attempts[i] == correctPin){
//         console.log("Access granted")
//         break
//     }else{
//         count += 1
//         console.log("Access denied you have " + (3 - count) + " Attempts left")
//     }

//     i++
// }


