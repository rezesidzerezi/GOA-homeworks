// 1) ახსენით რა არის filter და რას შვება იგი?

/*filter -- ფილტრავს ელემენტებს ტოვებს მხოლოდ იმ ელემენტებს რომლებიც აკმაყოფილებენ პირობას*/ 

// 2) გაქვთ მოცემული მასივი let ages = [20,15,40,53,12,32,17,18,19,33,29,85,67]
// თქვენი დავალებაა filter გამოყენებით შექმნათ ორი ახალი მასივი, პირველი ქინება მასივი სადაც მხოლოდ არასრულწლოვნების ასაკი იქნება და მეორე პირიქით სრულწოვანის ასაკი.

let ages = [20,15,40,53,12,32,17,18,19,33,29,85,67]

let underage = ages.filter(age => age >= 18)

let olderage = ages.filter(age => age < 18)

console.log(underage)
console.log(olderage)
// 3) გაქვთ მოცემული მასივი numbers = [25,111,921,321,432,545,133,987,436]
// თქვენი დავალებაა შექმნა newNumber მასივი ჯერ .map გამოყენებით თუ რიცხვი ლუწია გაამრავლო 13
// თუ კენტია გაამრავლო 16, შემდგომ შექმნა ახალი მასივი onlyEven რომელსაც filter გაფილტრავთ newNumber მასივ და მხოლოდ ლუწებს შეინახავთ. 

numbers = [25,111,921,321,432,545,133,987,436]

let newNumbers = numbers.map(num =>{
    if(num % 2 === 0) {
        return num * 13
    }else{
        return num * 16
    }
})

let onlyEven = newNumbers.filter(num => num % 2 === 0)

console.log(newNumbers)
console.log(onlyEven)







