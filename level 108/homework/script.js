// forEach()

//1
// let num = [1,2,3,4,5,6,7,8,9,10]

// num.forEach(n => {
//     if(n % 2 == 0 && n > 3){
//         console.log(n)
//     }
// })

//2

// let score = [-12,34,79,-40,723]

// score.forEach(s => {
//     if(s >= 0){
//         console.log("positive: " + s)
//     }else{
//         console.log("negative: " + s)
//     }
// })

// map()

//1

// let scores = [15, 32, 123, 88, 65, -15]

// let newscores = scores.map(s =>{
//     if(s < 50){
//         return s + 10
//     }else{
//         return s
//     }
// })

// console.log(newscores)

//2

// let numbers = [2, 5, 7, 10, 12]

// let newnum = numbers.map(num =>{
//     return num * num
// })

// console.log(newnum)



// filter()

//1

// let names = ["ანსტასია", "გოგა", "ამიკო", "დათო", "რეზი", "გეგა"]

// let newnames = names.filter(name => name.startsWith("ა"))

// console.log(newnames)

//2

// let words = ["apple", "banana", "cherry", "date", "avocado"]

// let newword = words.filter(word=> word.includes("a"))

// console.log(newword)


// reduce()

//1

// let scores = [45, 82, 67, 100, 34, 91, 76, 58, 100, 23, 88, 64]
// let scores1 = scores.reduce((a,c) => {
//     return a + c
// },0)

// console.log(scores1)

//2

// let words = ["rezi","rezesidze","basketball"]

// let words1 = words.reduce((a,c) =>{
//     return a + c.length
// },0)
// console.log(words1)



// findIndex()

//1

// let numbers = [18, 45, 72, 91, 34, 120, 57, 86, 103, 64, 39, 150, 77, 98, 25, 132]

// let newnum = numbers.findIndex(num => num > 100 && num % 2 === 0)

// console.log(newnum)

//2

// let numbers = [45, 82, 67, -100, 34, 91, -76, 58, 100, -23, 88, 64]

// let newnum = numbers.findIndex(num => num > 0 && num > 50)

// console.log(newnum)


// some()

//1

// let nums = [2, 4, 6, 8, 10, 22, 3, 30, 50]

// let num = nums.some(n =>{
//   if(n < 20 && n % 2 == 0){
//     return n
//   }
// })

// console.log(num)

//2

// let nums = [18, 45, 72, 91, 34, 120, 57, 86]

// let num = nums.some(n =>{
//   if(n > 200 || n === 100){
//     return n
//   }
// })

// console.log(num)

// every()

//1

// let nums = [2, 4, 6, 8 , 11 ,22, 30 , 50]

// let num = nums.every(n =>{
//     return n % 2 === 0 
// })

// console.log(num)

//2

// let nums = [91, 76, 58, 100, 23, 88]

// let num = nums.some(n =>{
//   if(n < 100){
//     return n
//   }
// })

// console.log(num)











