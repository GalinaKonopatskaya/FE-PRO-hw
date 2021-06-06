
let colorArray = ["transparent", "red", "black", "green"];

let boxElement = document.getElementById("box_id");

let color_index;


let toggleBoxColor = function () {

    let color = this.dataset.color;

    color_index = colorArray.indexOf(color);

    if (color_index == colorArray.length - 1) {

        color_index = -1; // If need default color - set -1, else set 0
    }

    let next_color = colorArray[color_index + 1];

    this.classList.remove(color);

    this.dataset.color = next_color;

    this.classList.add(next_color);

};


boxElement.addEventListener('click', toggleBoxColor, false);




