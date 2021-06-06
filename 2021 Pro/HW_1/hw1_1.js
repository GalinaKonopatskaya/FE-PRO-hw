let numberOne = +prompt("Enter any number");

// Числа -> https://learn.javascript.ru/number#parseint-i-parsefloat
let numberTwo = +prompt("Enter any number again");


if (numberOne && numberTwo) {
    document.write(numberOne + " + " + numberTwo + " = " + (numberOne + numberTwo) + "<br>");

    document.write(numberOne + " - " + numberTwo + " = " + (numberOne - numberTwo) + "<br>");

    document.write(numberOne + " * " + numberTwo + " = " + (numberOne * numberTwo) + "<br>");

    document.write(numberOne + " / " + numberTwo + " = " + (numberOne / numberTwo) + "<br>");

    console.log(numberOne + " + " + numberTwo + " = " + (numberOne + numberTwo));
    console.log(numberOne + " - " + numberTwo + " = " + (numberOne - numberTwo));
    console.log(numberOne + " * " + numberTwo + " = " + (numberOne * numberTwo));
    console.log(numberOne + " / " + numberTwo + " = " + (numberOne / numberTwo));
};
