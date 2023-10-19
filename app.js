// document.addEventListener('DOMContentLoaded', function () {
//     const slider = document.querySelector('.slider');
//     let counter = 1;

//     function slide() {
//         if (counter < slider.children.length - 1) {
//             counter++;
//         } else {
//             counter = 1;
//         }

//         slider.style.transition = 'transform 0.5s';
//         slider.style.transform = `translateX(${-counter * 100}%)`;
//     }

//     setInterval(slide, 3000);
// });






document.getElementById("miFormulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener los valores de los campos
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;

    // Mostrar los valores en la consola
    console.log("Nombre: " + nombre);
    console.log("Correo electrónico: " + email);
});

