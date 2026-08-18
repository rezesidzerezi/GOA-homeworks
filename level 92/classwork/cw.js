/*1)შექმენით ცვლადი სახელად name სადაც არაფერს შეინახავთ

ქვემოთ შექმენით ცვლადი nameForGreeting და მასში შეინახეთ ---> name ცვლადი(თუ name ცვლადში ინახება რაიმე მნშვნელობა ) ან "guest"

შემდეგ დააკონსოლეთ შემდეგი წინადადება --> hello {nameForGreeting} , how you doing?

ახსენით მოკლედ კომენტარის სახით თუ რა მოხდა*/

let name = ""

let nameForGreeting = name || "guest"

console.log(`hello ${nameForGreeting} , how you doing?`)

//რადგან name ცვლადში არაფერი არ იყო შენახული nameForGreeting - გახდა "guest" რადგან true იყო 





/*2)შექმენი ცვლადი სადაც შეინახავ რაიმე სტრინგს

შენი დავალებაა ტერნარი ოპერატორის დახმარებით შეამოწმო --> თუ სახელის სიგრძე უდრის 6 ს დააკონსოლე --> medium length

თუ სახელის სიგრძე მეტია 6 ზე დააკონსოლლოგე --> "long length"

სხვა შემთხვევაშ დააკონსოლლოგე --> "short name"*/ 

let s = "rezi"

s.length == 6 ? console.log("medium length") : s.length > 6 ? console.log("long length") : console.log("short name")


/*3)შექმენით ცვლადი სადაც შეინახავთ რაიმე ქალაქის სახელს

ქეისებით განიხილე შემდეგი სამი ქეისი და დააკონსოლლოგე შესაბამისი ტექსტი --> "tbilisi'  , "qutaisi" , "batumi"

დაამატე ელსის ვარიანტიც*/ 

let city = "qutaisi"

switch (city){
    case "tbilisi":
        console.log("tbilisi")
        break
    case "qutaisi":
        console.log("qutaisi")
        break
    case "batumi":
        console.log("batumi")
        break
    default:
        console.log(city)
        break
}


