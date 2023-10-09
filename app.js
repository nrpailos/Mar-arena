document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    let counter = 1;

    function slide() {
        if (counter < slider.children.length - 1) {
            counter++;
        } else {
            counter = 1;
        }

        slider.style.transition = 'transform 0.5s';
        slider.style.transform = `translateX(${-counter * 100}%)`;
    }

    setInterval(slide, 3000);
});

