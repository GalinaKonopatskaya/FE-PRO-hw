let lang = confirm("Do you want to use ua?");
//console.log(lang);

if (lang) {
    temperature = parseFloat(prompt("enter temperature in celcius"));

    if (!Number.isNaN(temperature)) {
        temperature = (temperature * 9 / 5) + 32;
        console.log(`The emperature is ${temperature.toFixed(2)} degrees fahrenheit`);
    } else {
        console.log("Invalid data, try again");
    }

} else {
    temperature = parseFloat(prompt("enter temperature in pharyngates"));
    if (!Number.isNaN(temperature)) {
        temperature = (temperature - 32) * 5 / 9;
        console.log(`The emperature is ${temperature.toFixed(2)} degrees celcius`);
    } else {
        console.log("Invalid data, try again");
    }
}


