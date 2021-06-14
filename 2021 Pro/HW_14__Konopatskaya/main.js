// Иа и горшочек

// localStorage.setItem("clients", JSON.stringify(users));
// let userData = localStorage.getItem("clients");


"use strict"

let localStorageUsers;
let localStorageCars;
// localStorage.clear();

// console.log('localStorage.length' + localStorage.length);
if (localStorage.length == 0) {
	localStorageUsers = users;
	localStorageCars = cars;
	localStorage.setItem('users', JSON.stringify(localStorageUsers));
	localStorage.setItem('cars', JSON.stringify(localStorageCars));
} else {
	localStorageUsers = JSON.parse(localStorage.getItem('users'));
	localStorageCars = JSON.parse(localStorage.getItem('cars'));
}


class Client {
	constructor({ id, name, surname = "", age, depositAmount, car = "" }) {
		this.id = id;
		this.name = name;
		this.surname = surname;
		this.age = age;
		this.depositAmount = depositAmount;
		this.car = car;
	}

	getInfo() {
		console.log(`name              : ${this.name}` +
			`\nsurname           : ${this.surname}` +
			`\nage               : ${this.age}` +
			`\ncar               : ${this.car}` +
			`\ndepositAmount     : ${this.depositAmount}`
		);
	}


	update({ id = this.id, name = this.name, surname = this.surname, age = this.age, depositAmount = this.depositAmount }) {
		this.name = name;
		this.surname = surname;
		this.age = age;
		this.id = id;
		this.depositAmount = depositAmount;
		this.updateStorage();
	}


	buy(car) {
		if (this.depositAmount >= car.price && car.owner == "") {
			this.depositAmount -= car.price;
			this.car = car.make + " " + car.model;

			car.update({ owner: this.name + " " + this.surname })
			car.updateStorage()
			this.updateStorage();
			return true;
		}
		else {
			return false;
		}
		//console.log('depositAmount:' + this.depositAmount);
	}

	updateStorage() {
		let localStorageUsersNew = [];
		localStorageUsers.forEach(element => {
			if (element.id == this.id) {
				localStorageUsersNew.push(this);
			} else {
				localStorageUsersNew.push(element);
			}
		});
		localStorageUsers = localStorageUsersNew;
		localStorage.setItem('users', JSON.stringify(localStorageUsersNew));
	}
}


class Car {
	constructor({ id, make, model, price, owner = "" }) {
		this.id = id;
		this.make = make;
		this.model = model;
		this.price = price;
		this.owner = owner;
	}

	getInfo() {
		console.log(`make     : ${this.make}` +
			`\nmodel    : ${this.model}` +
			`\nprice    : ${this.price}` +
			`\nowner    : ${this.owner}`
		);
	}


	update({ owner = this.owner, price = this.price }) {
		this.owner = owner;
		this.price = price;

	}

	updateStorage() {
		let localStorageCarsNew = [];
		localStorageCars.forEach(element => {
			if (element.id == this.id) {
				localStorageCarsNew.push(this);
			} else {
				localStorageCarsNew.push(element);
			}
		});
		localStorageCars = localStorageCarsNew;
		localStorage.setItem('cars', JSON.stringify(localStorageCarsNew));
	}
}



function getUsers() {
	let realUsers = [];
	// console.log(localStorageUsers);


	localStorageUsers.forEach(element => {
		let realUser = new Client(element);
		realUsers.push(realUser);
	});
	return realUsers;
}

function getCars() {
	let realCars = [];
	// console.log(localStorageUsers);


	localStorageCars.forEach(element => {
		let realCar = new Car(element);
		realCars.push(realCar);
	});
	return realCars;
}
