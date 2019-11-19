

const APIKey = 'd456520b1eabc83b97fa64a554b3bb39';
const form = document.getElementById('form');
const insert = document.getElementsByClassName('total')[0];
//const city = 'Москва';


form.addEventListener('submit',function(e){
	e.preventDefault();
	const InputCity = document.getElementById('city');
	const city=InputCity.value;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.send();

	if (xhr.status != 200) {
		insert.innerHTML=(xhr.status + ''+ xhr.statusText);
	} else {
		let DATA = JSON.parse(xhr.responseText);
		insert.innerHTML=`Температура = ${(DATA.main.temp - 273).toFixed(1)}&#8451;, скорость ветра = ${DATA.wind.speed} м/с`;
	}

})
