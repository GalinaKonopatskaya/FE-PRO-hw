// let promptNumber = +prompt("Enter any five numbers");


/*If number*/
let promptNumber = +prompt("Enter any five numbers");
let resultStr = '';
while (promptNumber != 0) {
    resultStr = promptNumber % 10 + " " + resultStr;
    promptNumber = parseInt(promptNumber / 10);
}

document.write(`Result is  ${resultStr}  <br>`);
console.log(`Result is ${resultStr}`);
/*End if number*/


/*If string*/
let promptString = prompt("Enter any five symbols");
let resultStr2 = "";
for (i = 0; i < promptString.length; i++) {
    resultStr2 = promptString[i] + " " + resultStr2;
}

document.write(`Result is ${resultStr2} <br>`);
console.log(`Result is ${resultStr2}`);
/*End if string*/