class Customer {
	constructor(name) {
		this.name = name;
	}
	buy() {
		console.log('Куплено');
	}
}
class childCustomer extends Customer {
	getPresent() {
		console.log('Шарик в подарок');
	}
}

const Father = new Customer('Daniel');
console.log(Father);
console.log(Father.buy());

const Son = new childCustomer('David');
console.log(Son);
console.log(Son.buy());
console.log(Son.getPresent());