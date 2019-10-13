let  yourMoney=prompt("Сколько у вас с собой денег?")
let apples=prompt('Сколько яблок вы купили?')
let bread=prompt('Сколько батонов хлеба вы купили?')
let applePrice=prompt('Сколько стоит одно яблоко?')
let breadPrice=prompt('Сколько стоит один батон хлеба?')


function haveEnough (yourMoney,apples,bread,applePrice,breadPrice){ 
if (parseFloat(yourMoney)>=((parseFloat(apples)*parseFloat(applePrice))+(parseFloat(bread)*parseFloat(breadPrice)))){
console.log("Вам хватает денег на покупки");
} else {
console.log("Вам не хватает денег");}
}

haveEnough (yourMoney,apples,bread,applePrice,breadPrice);
