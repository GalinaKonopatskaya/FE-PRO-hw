//Получаем от пользователя число и высчитываем его факториал.

let inputNumber = parseInt(prompt('Enter a number, please'));
let factorialNumber = 1;

if ( !Number.isNaN(inputNumber)) {

    for (i = 0; i < inputNumber; i++) {
        factorialNumber = factorialNumber * (inputNumber - i);
    }

    console.log(`Factorial of ${inputNumber} is ${factorialNumber}`);
} else {
    alert("please enter a valid number");
}




// let inputNumber = parseInt(prompt('Enter a number, please'));
// let factorialNumber = inputNumber;
// let baseNumber = inputNumber

// if (!Number.isNaN(inputNumber)) {

//     while (--baseNumber) {
//         factorialNumber *= baseNumber;
//     }

//     console.log(`Factorial of ${inputNumber} is ${factorialNumber}`);
// } else {
//     alert("please enter a valid number");
// }