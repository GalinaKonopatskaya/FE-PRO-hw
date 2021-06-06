let numberOne = +prompt("Enter any number");

let numberTwo = +prompt("Enter any number again");

let numberThree = +prompt("Enter any third number again");

if (numberOne && numberTwo && numberThree) {
    document.write("(" + numberOne + " + " + numberTwo + "+" + numberThree + ")" + "/ 3 =" + ((numberOne + numberTwo + numberThree) / 3));

    console.log("(" + numberOne + " + " + numberTwo + "+" + numberThree + ")" + "/ 3 =" + ((numberOne + numberTwo + numberThree) / 3));

};