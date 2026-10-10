/*1) მოცემულია მასივი numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. გამოიყენე filter(), რომ მიიღო მხოლოდ ლუწი რიცხვების მასივი.*/ 

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newnum = numbers.filter(n => n % 2 == 0)

// console.log(newnum)

/*2) მოცემულია სიტყვების მასივი fruits = ["ვაშლი", "მსხალი", "ატამი", "კივი", "ბანი"]. დატოვე მხოლოდ ის სიტყვები, რომელთა სიგრძეც 4 ასოზე მეტია.*/ 

// let fruits = ["ვაშლი", "მსხალი", "ატამი", "კივი", "ბანი"]


// let newfruits = fruits.filter(n => n.length > 4)

// console.log(newfruits)

/*3) მოცემულია მასივი: numbers = [-5, 10, -3, 0, 8, -1, 15]. მიიღე მასივი, სადაც მხოლოდ დადებითი რიცხვები იქნება (0-ის ჩათვლით).*/ 

// let numbers = [-5, 10, -3, 0, 8, -1, 15]

// let newnum = numbers.filter(num => num >= 0)

// console.log(newnum)

/*4) მოცემულია სახელების მასივი names = ["ანა", "გიორგი", "არჩილი", "დავითი", "ანანო"].
დატოვე მხოლოდ ის სახელები, რომლებიც იწყება ასო "ა"-თი (გამოიყენე .startsWith()*/ 

// let names = ["ანა", "გიორგი", "არჩილი", "დავითი", "ანანო"]

// let newnames = names.filter(name => name.startsWith("ა"))

// console.log(newnames)

/*5) მოცემულია მასივი list = [0, "გამარჯობა", "", null, undefined, "JS", false].
გამოიყენე filter(), რომ ამოიღო ყველა "falsy" (ცარიელი/არავალიდური) მნიშვნელობა.*/ 

// let list = [0, "გამარჯობა", "", null, undefined, "JS", false]

// let newlist = list.filter(l => l == false || l === null || l == undefined)

// console.log(newlist)

/*6) მოცემულია მასივი numbers = [5, 12, 45, 8, 20, 100, 33].
დატოვე მხოლოდ ის რიცხვები, რომლებიც არის 10-დან 50-მდე (10-ის და 50-ის ჩათვლით).*/ 

// let numbers = [5, 12, 45, 8, 20, 100, 33]

// let newnum = numbers.filter(num => num >= 10 && num <= 50)

// console.log(newnum)

/*7) მოცემულია სიტყვები ["apple", "banana", "cherry", "date", "avocado"].
დატოვე მხოლოდ ის სიტყვები, რომლებიც შეიცავენ ასო "a"-ს.*/

// let words = ["apple", "banana", "cherry", "date", "avocado"]

// let newword = words.filter(word=> word.includes("a"))

// console.log(newword)

/*8) მოცემულია შერეული მასივი list = [10, "ვაშლი", true, 25, "მსხალი", false, 50].
გაფილტრე ყველა ტიპი სათითაოდ string-ისთვი ცალკე შექმენი ახალი მასივი ასვე number
და boolean-ისთვის კიდევ ცალკე, ჯამში 3 ახალი მასივი უნდა ჰქინდეს stringList,numberList,booleanList.*/ 

// let list = [10, "ვაშლი", true, 25, "მსხალი", false, 50]

// let stringList = list.filter(l=> typeof l === 'string')

// let numberList = list.filter(n=> typeof n === 'number')

// let booleanList = list.filter(b=> typeof b === 'boolean')

// console.log(stringList)
// console.log(numberList)
// console.log(booleanList)

