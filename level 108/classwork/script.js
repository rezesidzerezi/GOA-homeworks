/*1) დაწერე კოდი სადაც გექნება მასივი Prices = [,20,100,2,500,132,315,15] და ასევე მასივი Items = ["phone","book","mask","glasses","sticker","bottle","coke"]
შენი დავალებაა: 
1.1 დააწყვილო ეს ელემენტები ან მაგალითად ---> ნივთი: phone 
                                            ფასი:  20*/ 

// Prices = [20,100,2,500,132,315,15]
// Items = ["phone","book","mask","glasses","sticker","bottle","coke"]

// Items.forEach((item,index) =>{
//     console.log("ნივთი: " + item)
//     console.log("ფასი: " + Prices[index])
// })

/*2) თქვენი დავალებაა:
2.1 სერვერმა გამოგზავნა ქსელური პაკეტების კოდების მასივი (რიცხვები). კრიტიკული უსაფრთხოების ასამუშავებლად,
ჯერ უნდა შეამოწმო, არის თუ არა სისტემაში თუნდაც ერთი უკიდურესად საშიში ვირუსული პაკეტი
(რიცხვი, რომელიც იყოფა 7-ზე და მეტია 500-ზე). თუ ეს დადასტურდა, უნდა ამოიღო მხოლოდ ის პაკეტები,
რომლებიც ლეგიტიმურია (ლეგიტიმურია პაკეტი, თუ ის დადებითია, არ იყოფა 3-ზე და ნაკლებია 1000-ზე).
მასივი: const packets = [120, 505, -45, 999, 14, 700, 33, 842];*/ 

// const packets = [120, 505, -45, 999, 14, 700, 33, 842]

// let virus = packets.some(packet => packet % 7 === 0 && packet > 500)

// let l = []

// if(virus){
//     l = packets.filter(packet => packet > 0 && packet % 3 !== 0 && packet < 1000)
// }

// console.log(virus)
// console.log(l)

/*3) თქვენი დავალებაა:
3.1 საწყისი ენერგიის დონეების მასივიდან უნდა გაფილტრო მხოლოდ ის ენერგიები,
რომლებიც მეტია 10-ზე და ნაკლებია 150-ზე. ამის შემდეგ, მიღებული შედეგი
უნდა გარდაქმნა „კვანტურ კოეფიციენტად“: თითოეული ელემენტი გაამრავლო 3-ზე,
გამოაკლო 5 და საბოლოოდ შედეგი გადაიყვანო სტრიქონშიპრეფიქსით "Q-" (მაგ: "Q-45").
მასივი: const rawEnergies = [5, 45, 120, 200, 12, 88, -10, 150];*/ 

// const rawEnergies = [5, 45, 120, 200, 12, 88, -10, 150]

// const new1 = rawEnergies.filter(energy => energy > 10 && energy < 150)

// console.log(new1)

// const new2 = new1.map(energy => (energy * 3) - 5)

// console.log(new2)

// const new3 = new2.map(value => `Q-${value}`)

// console.log(new3)

/*4) თქვენი დავალებაა:
4.1 სერვერთან დასაკავშირებლად მომხმარებლის უსაფრთხოების ტოკენების სია (tokens) მკაცრ სტანდარტს უნდა აკმაყოფილებდეს.
გამოიყენე every იმის შესამოწმებლად, არის თუ არა ყველა ტოკენი ისეთი, რომ:
    1.იწყება პრეფიქსით "SEC-"
    2.მისი სიგრძე მეტია ან ტოლია 8 სიმბოლოზე.
ოღონდ გაქვს 3 სერვერი და სამივე token შეამოწმე:
მასივები: const tokens_serv1 = ["SEC-0091", "SEC-7821", "SEC-1111", "SEC-999"];
        const tokens_serv2 = ["SEC-0091", "SEc-1111", "SEC-1111", "SEC-9999"];
        const tokens_serv3 = ["SEC-0000091", "SEC-7821", "SEC-1111"];*/ 

// const tokens_serv1 = ["SEC-0091", "SEC-7821", "SEC-1111", "SEC-999"]
// const tokens_serv2 = ["SEC-0091", "SEc-1111", "SEC-1111", "SEC-9999"]
// const tokens_serv3 = ["SEC-0000091", "SEC-7821", "SEC-1111"]

// let token1 = token => token.startsWith("SEC-") && token.length >= 8

// let token2 = tokens_serv1.every(token1)
// let token3 = tokens_serv2.every(token1)
// let token4 = tokens_serv3.every(token1)

// console.log(token2)
// console.log(token3)
// console.log(token4)

















