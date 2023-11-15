const images = document.querySelectorAll('.gallery a');
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

// Función para mostrar una imagen en el lightbox
function showImage(e) {
    e.preventDefault();
    const img = document.createElement('img');
    img.src = e.target.src;
    lightbox.innerHTML = '';
    lightbox.appendChild(img);
    lightbox.style.display = 'flex';
}

// Agregar eventos de clic a las imágenes
images.forEach(image => image.addEventListener('click', showImage));

// Función para cerrar el lightbox
lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return;
    lightbox.style.display = 'none';
});
