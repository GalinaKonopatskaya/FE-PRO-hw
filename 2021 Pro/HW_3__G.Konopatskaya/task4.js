let number_a = parseInt(prompt("enter number a"));
let number_b = parseInt(prompt("enter number b"));
if (!isNaN(number_a) && !isNaN(number_b)) {

    if (number_a % number_b === 0) {

        console.log("number b is divisor of number a");
    } else {

        console.log("number b isn`t a divisor of number a");
    }

    if (number_b % number_a === 0) {

        console.log("number a divisor of number b");
    } else {

        console.log("number a isn`t a divisor of number b");
    }
}   else {

    console.log("false operation");
}


