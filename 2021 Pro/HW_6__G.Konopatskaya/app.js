
/// Get category
// get items from category

function showAllCars(inputArray) {
  console.log(`Cars for sale:`);
  let array_length = Object.keys(inputArray).length;
  //Метод Object.keys возвращает массив строковых элементов, соответствующих именам перечисляемых свойств, 
  //найденных непосредственно в самом объекте. Порядок свойств такой же, как и при ручном перечислении свойств
  // в объекте через цикл.
  for (i = 1; i <= array_length; i++) {
    let categoryName = categories[i];
    let array_sub_length = Object.keys(inputArray[categoryName].items).length;

    console.log(`\tCategory ${categoryName}:`)
    //console.log(array_sub_length);
    for (j = 0; j < array_sub_length; j++) {
      //console.log(inputArray[categoryName].items);
      let item = inputArray[categoryName].items[j];
      console.log(`\t\t# ${j + 1}. ${item.name} | ${item.price}`)
    }
  }
}

function getCategory() {

  do {
    categoryId = parseInt(prompt(`Please make your choice  \n 1 - sport 2 -luxury 3 - off`));

  } while (categoryId < 0 || categoryId > 3 || isNaN(categoryId))

  //return category_items
  return carsStore[categories[categoryId]].items;

}


function getCar(category_items) {
  // console.log(category_items);

  do {
    carId = parseInt(prompt(`Please make your choice ( 1 - ${category_items.length})`));

  } while (isNaN(carId) || carId > category_items.length || carId === null)

  //return car_item
  return category_items[carId - 1];

}

//let carsData = carsStore[categories[category]].items;
function getCarInfo(car_item) {
  console.log(`Your choose: #${car_item.name} | Price: ${car_item.price}`);
}

function getCategoriAndItem() {

  let category_items = getCategory();
  let car = getCar(category_items);

  getCarInfo(car);
  return car;
}


function getCount() {
  let count;

  do {
    count = parseInt(prompt("Please enter the count"));

  } while (isNaN(count) || count < 1 || count === null)

  console.log(`Amount of chosen cars: ${count}`);
  return count;
}


// get count
// let count;

function getCarsCost(var_car, var_count) {
  return var_car.price * var_count;
}

// // get price
function getDiscount(totalPrice) {
  let discount = 0;

  if (totalPrice > 100000) {
    discount = totalPrice * 0.05;
  }

  if (discount > 0) {
    console.log(`Your discount: ${discount}`)
    console.log(`Your total price: ${totalPrice}`)
    console.log(`Your bill: ${totalPrice - discount}`)
  } else {
    console.log(`Your total price: ${totalPrice}`)
  }
}

