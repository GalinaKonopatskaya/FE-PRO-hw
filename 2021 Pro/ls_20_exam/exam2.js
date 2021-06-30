//--------------- 1 ------------------------------
class Car {
    constructor(name) {
        this.name = name;

    }
    fullTank(quantity) {
        this.quant = quantity;
        return this;
    }

    toColor(color) {
        this.color = color;
        return this;
        // color = color;
    }
    go() {
        console.log(`You are driving ${this.color} ${this.name} with ${this.quant} of fuel.`)
    }

    // ... implementation
}

let honda = new Car("Honda");

honda.fullTank(25).toColor("red").go()
//Result:  You are driving red Honda with 25L of fuel.


//--------------- 2 ------------------------------
const INFO_CONTENT = "<p class='info'> Some info content </p>";
const DATA_CONTENT = "<p class='data'> Some data about product </p>";


const infoBtn = document.getElementById("info");
const dataBtn = document.getElementById("data");
const contentContainer = document.querySelector(".content");


infoBtn.addEventListener('click', addInfo);
dataBtn.addEventListener('click', addData);



function addInfo() {
    contentContainer.innerHTML = INFO_CONTENT;

    infoBtn.style.background = "green";
    dataBtn.style.background = "";
}


function addData() {
    contentContainer.innerHTML = DATA_CONTENT;

    dataBtn.style.backgroundColor = "red";
    infoBtn.style.backgroundColor = "";

}
