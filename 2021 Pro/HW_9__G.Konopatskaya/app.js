/*****************************TIMER*******************************/
let timerId;
let curent_time = 0;
let watch_div = document.getElementById('watch');
let startTimerBtn = document.getElementById("start");
let stopTimerBtn = document.getElementById("stop");
let reverseTimerBtn = document.getElementById("reverse");


function setTimerForward() {

    curent_time = watch_div.innerHTML;
    curent_time = parseInt(curent_time) + 1;

    watch_div.innerHTML = curent_time;
}

function setTimerBackward() {

    let curent_time = watch_div.innerHTML;
    curent_time = parseInt(curent_time) - 1;

    watch_div.innerHTML = curent_time;

    if (curent_time == 0) {
        stopTimer();
    }

}

function startTimer() {
    timerId = setInterval(function () { setTimerForward() }, 1000);
}

function stopTimer() {
    clearTimeout(timerId);
}

function reverceTimer() {
    timerId = setInterval(function () { setTimerBackward() }, 1000);
}

startTimerBtn.onclick = function () { stopTimer(); startTimer(); return false; }

stopTimerBtn.onclick = function () { stopTimer(); return false; }

reverseTimerBtn.onclick = function () { stopTimer(); reverceTimer(); return false; }

startTimer();



/*****************************COLOR BLOCKS*******************************/
let boxElements = document.getElementsByClassName("colored__box");

let toggleBoxColor = function () {
    let color = this.id;
    this.classList.toggle(color);

    //console.log(color);
};

for (var i = 0; i < boxElements.length; i++) {
    boxElements[i].addEventListener('click', toggleBoxColor, false);
}
