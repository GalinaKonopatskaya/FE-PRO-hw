// добавить в обьект person поле showAge которое является функцией и выводит 
// в консоль возраст данного обьекта  используя this.
let d = new Date();
let year = d.getFullYear();

person.showAge = function (actualYear) {
    console.log(`Age of ${this.firstName} : ${actualYear - this.born}`);
}

// вывести возраст остальных обьектов используя метод showAge позаимствованый у обьекта person

// Дана функция: function showFullName() { console.log(`${this.firstName} - ${this.lastName}`) }
// используя данную функцию вывести в консоль полные имена по всем обьектам. Если есть необходимость 
// функцию  showFullName можно модифицировать

showFullName = function () {

    if (this.firstName === undefined) {

        console.log(`Person lastname: ${this.lastName}, name is not indicate;`);

    } else if (this.lastName === undefined) {

        console.log(`Person name: ${this.firstName}, lastName is not indicate;`);

    } else {

        console.log(`Person  full name: ${this.firstName}  ${this.lastName};`);

    }
}

// Создать массив содержащий данные обьекты.

let allPersoneArr = [person, person2, person3, person4, person5];


function showSomething(someVar1, someVar2) {
    console.log(someVar1);
    console.log(someVar2);

}


// // отсортировать массив (используя встроенные методы массивов) по возрасту.


function flexSort(key) {

    return function (a, b) {

        return b[key] - a[key];
    }
}




// получить 2 массива: males, females используя метод фильтрации массивов

let male = allPersoneArr.filter(key => key['gender'] === "male");

let female = allPersoneArr.filter(key => key['gender'] === "female");

// *. получить сумму годов рождения всех обьектов используя метод reduce (задание для храбрых)


let sumYearsOfBorn = allPersoneArr.reduce(function (sumVar, persone) {

    return sumVar + persone.born;

}, 0)



