let baseNumber = prompt("enter two-digit number");
let number = parseInt(baseNumber);

if (number < 99 && !NaN && number.toString().length === baseNumber.length) {

    let number_1 = parseInt(number / 10);
    let number_2 = number % 10;

    let result = (number_1 > number_2)
        ? "first number is bigger"
        : "second number is bigger";

    console.log(result);

} else {

    console.log("false operation");
}




