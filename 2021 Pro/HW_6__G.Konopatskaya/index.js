showAllCars(carsStore);
console.log(`-------------------------------`);
let car = getCategoriAndItem();
let count = getCount();
let cars_cost = getCarsCost(car, count);

getDiscount(cars_cost);
