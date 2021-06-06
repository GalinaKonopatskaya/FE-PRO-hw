let clientName = prompt("Enter your name, please.", '');
let clientAge = prompt(`Hello ${clientName}! How old are you?`, '');
clientAge = parseInt(clientAge);
//console.log(typeof clientAge);
if (clientAge > 0) {
    if (clientAge < 16) {
        childActivity = (confirm("Are you an active child?") ? "Active" : "Calm");
        if (childActivity === "Active") {
            console.log(`Hello ${clientName}! Your status is Potential. Do not drink cocoa at night.`);
        }
        else {
            alert("You are not our client. Take a chocolate.");
        }
    }
    else {
        let youngMatureHabits = (confirm("You lead a healthy lifestyle?") ? "Healthy" : "Harmful");
        if (youngMatureHabits === "Healthy") {
            let clientGender = (confirm("Are you a man?") ? "Man" : "Woman");
            if (clientGender == 'Man') {
                console.log( `Hello ${clientName}! Your status is HighPotential-Man.` );
            }
            else {
                console.log( `Hello ${clientName}! Your status is HighPotential-Woman.` );
            }
        }
        else if (clientAge >= 50) {
            console.log(`Hello ${clientName}! Your status is OutOfScope.`);
        }
        else {
            alert("You are not our client. Take a chocolate.");
        }
    }
}
else {
    alert("age is incorrect");
}



