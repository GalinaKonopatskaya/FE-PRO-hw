let luckiNumber = prompt("enter any symbol");
if (luckiNumber.length) {
    luckiNumber = parseInt(luckiNumber);

    
    
    if (!isNaN(luckiNumber)) {
        luckiNumber += 100;
        console.log(`Your winnings is ${luckiNumber}`);
    }
    else {
        console.log("Today is not your day.")
    }
}
else {
    console.log("Error - empty input.")
}

//alternative method
//console.log(luckiNumber);
// luckiNumber = parseInt(luckiNumber);
// if (luckiNumber > 0) {
//     luckiNumber += 100;
//     console.log(`Your winnings is ${luckiNumber}`);
//     ;
// }
// else {
//     console.log("Today is not your day.")
// }