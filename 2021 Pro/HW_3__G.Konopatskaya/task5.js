let rawNumber = prompt("Enter some six-digit number");
let mirrorNumb = parseInt(rawNumber);

if (!NaN &&
    mirrorNumb > 99999 &&
    mirrorNumb < 1000001 &&
    mirrorNumb.toString().length === rawNumber.length
) {
    // first method
    let sixthnumb = mirrorNumb % 10; //6
    base = (mirrorNumb - sixthnumb) / 10; // 12345
    // console.log("base:" + base);
    // console.log("sixthnumb:" + sixthnumb);

    let fifthnumb = base % 10; //5    
    base = (base - fifthnumb) / 10; // 1234
    // console.log("base:" + base);
    // console.log("fifthnumb:" + fifthnumb);

    let fourthnumb = base % 10; //4 
    base = (base - fourthnumb) / 10; //123
    // console.log("base:" + base);
    // console.log("fourthnumb:" + fourthnumb);

    let thirdnumb = base % 10; //3
    base = (base - thirdnumb) / 10; //12
    // console.log("base:" + base);

    let secondnumb = base % 10;//2
    base = (base - secondnumb) / 10;//1
    // console.log("base:" + base);

    let firstnumb = base;
    // console.log(sixthnumb, fifthnumb, fourthnumb, thirdnumb, secondnumb, firstnumb);

    if (sixthnumb === firstnumb &&
        fifthnumb === secondnumb &&
        fourthnumb === thirdnumb) {
        console.log("Number is mirror");
    } else {
        console.log("Number is not mirror");
    }

    // end

    // second method
    //Convert number to string and create an array of symbols to compare

    // let getOneNumber = mirrorNumb.toString().split("");
    //console.log(getOneNumber);

    // if (getOneNumber[0] == getOneNumber[5] &&
    //     getOneNumber[1] == getOneNumber[4] &&
    //     getOneNumber[2] == getOneNumber[3]) {
    //     console.log("Number is mirror");
    // } else {
    //     console.log("Number is not mirror");
    // }
    //end


} else {
    console.log("false operation");
}
