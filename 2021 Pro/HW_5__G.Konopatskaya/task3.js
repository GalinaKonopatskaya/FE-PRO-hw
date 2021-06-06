//Вывести значени модели и скорости по убыванию:
console.log(`Task 3`)

let cars = [
    { model: "Honda", speed: 200 },
    { model: "Toyota", speed: 190 },
    { model: "BMW", speed: 210 },
    { model: "Ford", speed: 190 }
];


//#1
let sortedCars = [];

while (cars.length !== 0) {
    let max = -Infinity;
    let maxIndex = 0;

    for (i = 0; i < cars.length; i++) {

        let car = cars[i];
        let speed = car.speed;

        if (max < speed) {
            max = speed;
            maxIndex = i;
        }
    }

    let carentMaxIndex = cars[maxIndex];

    sortedCars.push(carentMaxIndex);
    cars.splice(maxIndex, 1);
}
console.log(sortedCars);




//#2
// function sorted(a, b) {
//     if (a.speed > b.speed) {
//         return -1;
//     }
//     else if (a.speed < b.speed) {
//         return 1;
//     }
//     else return 0;
// }
// cars.sort(sorted);

// console.log(cars);


//#3
// function flexSort(key) {

//     return function (a, b) {
//         return b[key] - a[key];
//     }

// }

// cars.sort(flexSort("speed"));

// console.log(cars);
