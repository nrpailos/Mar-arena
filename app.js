const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    document.querySelector(".abrir-menu").style.color = '#ececec';

})
document.querySelector(".abrir-menu")
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    document.querySelector(".abrir-menu").style.color = 'black';
})



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
