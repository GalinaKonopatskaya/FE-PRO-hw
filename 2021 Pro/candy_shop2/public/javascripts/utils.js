let numbers = document.querySelectorAll(".phone");
let main = document.getElementById("main-phone");

numbers.forEach(num =>  num.addEventListener("click", function () {
                main.innerHTML = num.getAttribute("data-phone");
                main.setAttribute("href", num.getAttribute("data-href"));
                console.log(main.getAttribute("data-phone"));
        }));




const sliderLine = document.querySelector('.slider-line');
let offset = 0;

document.querySelector('.slider-next').addEventListener('click', function () {
        offset = offset + 256;
        if (offset > 7168) {
                offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
        offset = offset - 256;
        if (offset < 0) {
                offset = 7168;
        }
        sliderLine.style.left = -offset + 'px';
});
