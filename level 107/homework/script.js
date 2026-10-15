/*1)const scores = [45, 82, 67, 100, 34, 91, 76, 58, 100, 23, 88, 64];


შეასრულე შემდეგი მოქმედებები:
1. filter() — შექმენი ახალი მასივი, რომელშიც იქნება მხოლოდ 60-ზე მეტი ან ტოლი ქულები.
2. map() — თითოეულ ქულას დაუმატე 5 ქულა.
3. filter() — ახალი მასივიდან დატოვე მხოლოდ ის ქულები, რომლებიც 80-ზე მეტია.
4. reduce() — გამოთვალე საბოლოო მასივში დარჩენილი ქულების ჯამი.
5. findIndex() — იპოვე თავდაპირველ მასივში პირველი 100-ქულიანი შედეგის ინდექსი.
6. some() — შეამოწმე, არის თუ არა თავდაპირველ მასივში 30-ზე ნაკლები ქულა.
7. every() — შეამოწმე, არის თუ არა ყველა ქულა 20-ზე მეტი.
8. forEach() — დაბეჭდე თითოეული საბოლოო ქულა ცალკე ხაზზე.*/ 

// const scores = [45, 82, 67, 100, 34, 91, 76, 58, 100, 23, 88, 64]

// let scores1 = scores.filter(s => s >= 60)
// console.log(scores1)

// let scores2 = scores1.map(s => s + 5)
// console.log(scores2)

// let scores3 = scores2.filter(s => s > 80)
// console.log(scores3)

// let scores4 = scores3.reduce((a,c) => {
//     return a + c
// },0)
// console.log(scores4)

// let scores5 = scores.findIndex(s => s === 100)
// console.log(scores5)

// let scores6 = scores.some(s => s < 30)
// console.log(scores6)

// let scores7 = scores.every(s => s > 20)
// console.log(scores7)

// scores.forEach(s =>{
//     console.log(s)
// })


/*2)მოცემულია გაყიდული ნივთების ფასები:
const prices = [120, 450, 80, 700, 250, 1200, 90, 550, 300, 1500, 60];


1. filter() — დატოვე მხოლოდ 200-ზე მეტი ფასები.
2. map() — თითოეულ ფასს გამოაკელი 50.
3. map() — მიღებული ფასებიდან შექმენი ახალი მასივი, რომელშიც თითოეული ფასი გაორმაგებული იქნება.
4. reduce() — გამოთვალე გაორმაგებული ფასების ჯამი.
5. findIndex() — იპოვე თავდაპირველ მასივში პირველი 500-ზე მეტი ფასი.
6. some() — შეამოწმე, არის თუ არა რომელიმე ფასი 1000-ზე მეტი.
7. every() — შეამოწმე, არის თუ არა ყველა ფასი 50-ზე მეტი.
8. forEach() — დაბეჭდე საბოლოო ფასები.*/

// const prices = [120, 450, 80, 700, 250, 1200, 90, 550, 300, 1500, 60]

// let prices1 = prices.filter(n => n >= 200)
// console.log(prices1)

// let prices2 = prices1.map(n => n - 50)
// console.log(prices2)

// let prices3 = prices2.map(n => n * 2)
// console.log(prices3)

// let prices4 = prices3.reduce((a,c)=>{
//     return a + c
// },0)
// console.log(prices4)

// let prices5 = prices.findIndex(n => n > 500)
// console.log(prices5)

// let prices6 = prices.some(n => n > 1000)
// console.log(prices6)

// let prices7 = prices.some(n => n > 50)
// console.log(prices7)

// prices.forEach(n =>{
//     console.log(n)
// })

/*3)const numbers = [12, 7, 24, 9, 36, 15, 42, 5, 18, 27, 30, 11];


1. filter() — დატოვე მხოლოდ ლუწი რიცხვები.
2. map() — თითოეული რიცხვი გაამრავლე 3-ზე.
3. filter() — მიღებული მასივიდან დატოვე მხოლოდ 50-ზე მეტი რიცხვები.
4. reduce() — იპოვე დარჩენილი რიცხვების ჯამი.
5. findIndex() — იპოვე თავდაპირველ მასივში პირველი რიცხვის ინდექსი, რომელიც 20-ზე მეტია.
6. some() — შეამოწმე, არის თუ არა თავდაპირველ მასივში 40-ზე მეტი რიცხვი.
7. every() — შეამოწმე, არის თუ არა ყველა რიცხვი დადებითი.
8. forEach() — დაბეჭდე საბოლოო მასივის თითოეული რიცხვი.*/ 

// const numbers = [12, 7, 24, 9, 36, 15, 42, 5, 18, 27, 30, 11]

// let numbers1 = numbers.filter(n => n % 2 == 0)
// console.log(numbers1)

// let numbers2 = numbers1.map(n => n * 3)
// console.log(numbers2)

// let numbers3 = numbers2.filter(n => n > 50)
// console.log(numbers3)

// let numbers4 = numbers3.reduce((a,c) => {
//     return a + c
// },0)
// console.log(numbers4)

// let numbers5 = numbers.findIndex(n => n > 20)
// console.log(numbers5)

// let numbers6 = numbers.some(n => n > 40)
// console.log(numbers6)

// let numbers7 = numbers.every(n => n > 0)
// console.log(numbers7)

// numbers3.forEach(num => console.log(num))

/*4)const words = [
    "javascript",
    "html",
    "programming",
    "css",
    "developer",
    "react",
    "computer",
    "code",
    "algorithm"
];


1. filter() — დატოვე მხოლოდ ის სიტყვები, რომელთა სიგრძეც 5 სიმბოლოზე მეტია.
2. map() — ყველა დარჩენილი სიტყვა გადაიყვანე დიდ ასოებში toUpperCase() მეთოდით.
3. filter() — მიღებული სიტყვებიდან დატოვე მხოლოდ ისინი, რომელთა სიგრძეც 8 სიმბოლოზე მეტია.
4. reduce() — გამოთვალე საბოლოო მასივში არსებული ყველა სიმბოლოს საერთო რაოდენობა. გამოიყენე word.length.
5. findIndex() — იპოვე თავდაპირველ მასივში პირველი სიტყვის ინდექსი, რომლის სიგრძეც 8-ზე მეტია.
6. some() — შეამოწმე, არსებობს თუ არა 10 სიმბოლოზე გრძელი სიტყვა.
7. every() — შეამოწმე, არის თუ არა ყველა სიტყვა მინიმუმ 3 სიმბოლოსგან შემდგარი.
8. forEach() — დაბეჭდე საბოლოო სიტყვები.*/ 

// const words = [
//     "javascript",
//     "html",
//     "programming",
//     "css",
//     "developer",
//     "react",
//     "computer",
//     "code",
//     "algorithm"
// ]

// let words1 = words.filter(s => s.length > 5)
// console.log(words1)

// let words2 = words1.map(s => s.toUpperCase())
// console.log(words2)

// let words3 = words2.filter(s => s.length > 8)
// console.log(words3)

// let words4 = words3.reduce((a,c) =>{
//     return a + c.length
// },0)
// console.log(words4)

// let words5 = words.findIndex(s => s.length > 8)
// console.log(words5)

// let words6 = words.some(s => s.length > 10)
// console.log(words6)

// let words7 = words.every(s => s.length >= 3)
// console.log(words7)

// words3.forEach(s => console.log(s))


/*5)const numbers = [14, 28, 35, 42, 19, 56, 63, 70, 25, 84, 91, 100, 32];


შექმენი პროგრამა, რომელიც:
1. filter()-ით დატოვებს მხოლოდ 20-ზე მეტ რიცხვებს.
2. map()-ით თითოეულ მათგანს დაუმატებს მის ინდექსს გაფილტრულ მასივში.
3. filter()-ით მიღებული შედეგებიდან დატოვებს მხოლოდ ლუწ რიცხვებს.
4. map()-ით თითოეულ დარჩენილ რიცხვს გაამრავლებს 2-ზე.
5. reduce()-ით გამოთვლის საბოლოო მასივის ჯამს.
6. reduce()-ით იპოვის საბოლოო მასივის უდიდეს რიცხვს.
7. findIndex()-ით იპოვის თავდაპირველ მასივში პირველი რიცხვის ინდექსს, რომელიც 60-ზე მეტია.
8. some()-ით შეამოწმებს, არის თუ არა საბოლოო მასივში 200-ზე მეტი რიცხვი.
9. every()-ით შეამოწმებს, არის თუ არა საბოლოო მასივის ყველა რიცხვი ლუწი.
10. forEach()-ით დაბეჭდავს საბოლოო მასივის თითოეულ ელემენტს.*/ 

// const numbers = [14, 28, 35, 42, 19, 56, 63, 70, 25, 84, 91, 100, 32]

// let numbers1 = numbers.filter(n => n > 20)
// console.log(numbers1)

// let numbers2 = numbers1.map((n,index) => n + index)
// console.log(numbers2)

// let numbers3 = numbers2.filter(n => n % 2 == 0)
// console.log(numbers3)

// let numbers4 = numbers3.map(n => n * 2)
// console.log(numbers4)

// let numbers5 = numbers4.reduce((a,c) =>{
//     return a + c
// },0)
// console.log(numbers5)

// let numbers6 = numbers4.reduce((a,c) =>{
//     if(c > a){
//         a = c
//     }
//     return a
// },0)
// console.log(numbers6)

// let numbers7 = numbers.findIndex(n => n > 60)
// console.log(numbers7)

// let numbers8 = numbers4.some(n => n > 200)
// console.log(numbers8)

// let numbers9 = numbers4.every(n => n % 2 == 0)
// console.log(numbers9)

// numbers4.forEach(n => console.log(n))


/*6)const scores = [
    45, 88, 72, 96, 54, 100, 63, 81,
    39, 92, 77, 68, 85, 49, 98, 59
];


შექმენი პროგრამა შემდეგი მოთხოვნებით:
1. filter() — დატოვე 60 ან მეტი ქულა.
2. map() — თითოეულ ქულას დაუმატე 7.
3. filter() — დატოვე მხოლოდ 80 ან მეტი შედეგი.
4. map() — თითოეული შედეგიდან გამოაკელი მისი ინდექსი მიმდინარე მასივში.
5. filter() — დატოვე მხოლოდ კენტი რიცხვები.
6. reduce() — გამოთვალე საბოლოო შედეგების ჯამი.
7. reduce() — გამოთვალე საბოლოო შედეგების საშუალო არითმეტიკული.
8. findIndex() — იპოვე საწყის მასივში პირველი ქულა, რომელიც 90-ზე მეტია.
9. some() — შეამოწმე, არის თუ არა საბოლოო მასივში 90-ზე ნაკლები რიცხვი.
10. every() — შეამოწმე, არის თუ არა ყველა საბოლოო შედეგი 70-ზე მეტი.
11. forEach() — თითოეული საბოლოო ქულა დაბეჭდე და მიუწერე "ჩააბარა", თუ 80 ან მეტია, სხვა შემთხვევაში — "ვერ ჩააბარა".*/ 

// const scores = [
//     45, 88, 72, 96, 54, 100, 63, 81,
//     39, 92, 77, 68, 85, 49, 98, 59
// ]

// let scores1 = scores.filter(n => n >= 60)
// console.log(scores1)

// let scores2 = scores1.map(n => n + 7)
// console.log(scores2)

// let scores3 = scores2.filter(n => n >= 80)
// console.log(scores3)

// let scores4 = scores3.map((n,index)=> n - index)
// console.log(scores4)

// let scores5 = scores4.filter(n => n % 2 != 0)
// console.log(scores5)

// let scores6 = scores5.reduce((a,c) => {
//     return a + c
// },0)
// console.log(scores6)

// let i = 0
// let scores7 = scores5.reduce((a,c) => {
//     i++
//     return a + c
// },0)
// console.log(scores7 / i)

// let scores8 = scores.filter(n => n > 90)
// console.log(scores8)

// let scores9 = scores8.some(n => n < 90)
// console.log(scores9)

// let scores10 = scores8.every(n => n > 70)
// console.log(scores10)

// scores8.forEach(n=>{
//     if(n > 80){
//         console.log(n + " ჩააბარა")
//     }else{
//         console.log(n + " ვერ ჩააბარა")
//     }
// })


