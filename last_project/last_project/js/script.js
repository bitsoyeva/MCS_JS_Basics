window.addEventListener('load', function(){
	const form = document.getElementById('form');
	class Person {
		constructor(name) {
			this.name = name;
			this.happiness = 0;
		}
		hasCat = () => {
			this.happiness++;
			return this.happiness;
			}
		hasRest = () => {
			this.happiness++;
			return this.happiness;
			}
		hasMoney = () => {
			this.happiness++;
			return this.happiness;
			}
		isSunny() {
			const APIKey = 'd456520b1eabc83b97fa64a554b3bb39';
			const city = 'Moscow';
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
			let xhr = new XMLHttpRequest();
			xhr.open('GET', url, false);
			xhr.send();
			let DATA = JSON.parse(xhr.responseText);
			var temp = Math.floor(DATA.main.temp - 273);
			if (temp>15) {
				this.happiness++;
			}
			return this.happiness;
		}
	}
	function getRadiobutton(name, method) {
		const received = document.getElementsByName(name);
			for(var el of received){
				if(el.checked && el.value==="yes"){
					return method();
				}
			}
	}
	form.addEventListener('submit', function(e) {
		e.preventDefault();
		const inputName = document.getElementById('name');
		const newName = inputName.value;
		const newPerson = new Person(newName);
		getRadiobutton('cat', newPerson.hasCat);
		getRadiobutton('rest', newPerson.hasRest);
		getRadiobutton('money', newPerson.hasMoney);
		let happiness = newPerson.isSunny();
		const personName = document.querySelector('.personName');
		const icon = document.querySelector('.icon');
		personName.innerHTML = `${newName}:`; 
		if (happiness===4){
			icon.innerHTML = '<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/232/grinning-face-with-smiling-eyes_1f601.png">'
		} else if (happiness===3 || happiness===2){
			icon.innerHTML = '&#128528;'
		} else {
			icon.innerHTML = '☹️'
		}
	})
})



















