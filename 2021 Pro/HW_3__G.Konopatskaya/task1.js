let rawNumber = prompt("enter number from 0 to 59");
let number = parseInt(rawNumber);
// number.toString().length - to exclude incorrect input - compare string length
if (number < 60 && !NaN && number.toString().length === rawNumber.length) { 
    if (number >= 0 && number < 15) {
        console.log("first quarter");
    }
    else if (number >= 15 && number < 30) {
        console.log("second quarter");

    } else if (number >= 30 && number < 45) {
        console.log("third quarter");
    } else {
        console.log("fourth quarter");
    }
} else {
    console.log("false operation");
}

//console.log(number);


