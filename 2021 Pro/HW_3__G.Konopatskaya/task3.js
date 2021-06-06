let baseNumber = prompt("enter three-digit number");
let number = parseInt(baseNumber);

if (number >= 100 &&
    number < 1000 &&
    !NaN &&
    number.toString().length === baseNumber.length) {
        let number_1 = parseInt(number / 100);
        let number_2 = number % 100;
        number_2 = parseInt(number_2 / 10);
        let number_3 = number % 10;
        // console.log(number_1);
        // console.log(number_2);
        // console.log(number_3);

        let allEqual = (number_1 === number_2 && number_2 === number_3)
            ? 'a. All numbers are equal'
            : 'a. All numbers are different';
        console.log(allEqual);

        let someEqual = (number_1 === number_2 || number_2 === number_3 || number_1 === number_3)
            ? 'b. Some numbers are equal'
            : 'b. All numbers are different';

        console.log(someEqual);

        console.log(`c. The sum of all numbers is ${number_1 + number_2 + number_3}`);

} else {
    console.log("false operation");
}



