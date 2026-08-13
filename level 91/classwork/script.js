/*1)შექმენით ცვლადი და ეინახეთ რაიმე რიცხვი , შენი დავალებაა შეამოწმო თუ ეს ცვლადში შე ნახული რიცხვი
არის დადებითი დაბეჭდე კონსოლში "positive"  , თუ ეს რიცხვი არის უარყოფით დაბეჭდე "negative" სხვა შემთხვევაში
დაბეჭდე "zero"*/

let number = 15

if(number > 0){
    console.log("positive")
}else if(number < 0){
    console.log("negative")
}else{
    console.log("zero")
}

/*2)შექმენი ცვლადი სადაც შეინახავ სახელს  , შემდეგ შეადარე თუ ცვლადში შენახული სახელი უდრის
თქვენს სახელს გამოიტანე კონსოლში --> "we have same name" სხვა შემთხვევაში
გამოუტანე --> "we do not have same name"*/ 

let name = "rezi"

if(name == "rezi"){
    console.log("we have same name")
}else{
    console.log("we do not have same name")
}

/*3)შექმენი ცლადი , შენი დავალებაა შეამოწმო თუ ცვლადში შენახული რიცხვი მეტია 0 ზე და არის ლუწი კონსოლში დაბეჭდე --> "positive and even"

სხვა შემთთხვევაში დალოგე --> "other number"*/

let number2 = 8

if(number2 > 0 && number2 % 2 == 0){
    console.log("positive and even")
}else{
    console.log("other number")
}

/*4)შექმენი ცვლადი და შეინახე შენი სახელი , შემდეგ შეამოწმე თუ ცვლადში შენახული სახელი იწყება აო "g" თი ან ცვლადში შენახული სახელი უდრის "levani" ს დაბეჭდე "good name",
თუ ცვლდში შენახული სახელი იწყება ასო "a" თი და ასევე ეს სახელი უდრის "akaki" ს დალოგე --> excellent name სხვა შემთხვევაში დალოგე -->other name*/ 

let name2 = "rezi"

if(name2.startsWith("g") || name2 == "levani"){
    console.log("good name")
}else if(name2.startsWith("a") || name2 == "akaki"){
    console.log("excellent name")
}else{
    console.log("other name")
}


