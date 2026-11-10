/*1)შექმენით factory ფუნქცია რომელიც დააბრუნებს ობიექტს შემდეგი property ებით --> name , surname , age , adress , hobby

გადაეცით ამავე რაოდენობის პარამეტრი ფუქნციას რომ გადასცეთ ქიებს მნიშვნელობებად , ამ ობიექტს დაამატეთ ასევე მეთოდი სახელად displayUsersName() 
რომელიც დააბრუნებს მომხმარრებლის სახელს გვარს და მისამართს

შექმენი ასეთი 4 ობიექტი სხვადასხვა მნიშვენლობებით და 4 ივე მათგანზე გამოიძახეთ displayUsersName() მეთოდი , 
ასევე თითოეული ობიექტი შეინახეთ ცვლადებში და თვითონ ეს ცვლადებიც(ობიექტები) ც გამოიტანეთ კონსოლში*/ 

function person(name,surname,age,adress,hobby){
    return{
        name : name,
        surname : surname,
        age : age,
        adress : adress,
        hobby : hobby,
        displayUsersName(){
            console.log(this.name, this.surname, this.adress)
        }
    }
}

let person1 = person("rezi","rezesidze","15","qutaisi","bassketball")
console.log(person1)
person1.displayUsersName()

let person2 = person("gio","gergedava","15","qutaisi","rugby")
console.log(person2)
person2.displayUsersName()

let person3 = person("gega","gabunia","14","tbilisi","chess")
console.log(person3)
person3.displayUsersName()

let person4 = person("nika","nucubidze","16","batumi","bassketball")
console.log(person4)
person4.displayUsersName()












