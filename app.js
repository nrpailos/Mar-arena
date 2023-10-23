let sliderInner = document.querySelector(".slider-inner");
let imagenes = sliderInner.querySelectorAll("img")

let index = 1;

setInterval(function () {
    let percentage = index * -100;
    sliderInner.style.transform = "translateX(" + percentage + "%)";
    index++;

    if (index > imagenes.length - 1) {
        index = 0;
    }
}, 3000);