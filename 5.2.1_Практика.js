let number=parseInt(prompt('Введите число'));

function numberConversion(number){
	//случайное целое число 
	let exp = Math.floor(Math.random()*(10-1)+1);
	//возведение в степень
	let result = number**exp;
	//возвращение модуля результата
	return Math.abs(result);
}
console.log(numberConversion(number));