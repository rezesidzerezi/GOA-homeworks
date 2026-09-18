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
//         if(string[i].includes("a") || string[i].includes("e") || string[i].includes("i") || string[i].includes("o") || string[i].includes("u")){
//             count++
//         }
//     }
//     console.log(count)
// }
// countVowels()



