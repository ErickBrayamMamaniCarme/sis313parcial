const slides = [...document.querySelectorAll('.slide')];

const counter = document.getElementById('counter');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const dots = document.getElementById('dots');


let current = 0;


slides.forEach((_, i) => {

    const b = document.createElement('button');

    b.type = 'button';

    b.setAttribute(
        'aria-label',
        'Ir a diapositiva ' + (i + 1)
    );

    b.addEventListener('click', () => show(i));

    dots.appendChild(b);

});

function show(i) {

    current = Math.max(
        0,
        Math.min(slides.length - 1, i)
    );

    
    slides.forEach((s, n) => {

        s.classList.toggle('active', n === current);

    });

    
    [...dots.children].forEach((d, n) => {

        d.classList.toggle('current', n === current);

    });

    
    counter.textContent =
        (current + 1) + ' / ' + slides.length;

    
    prev.disabled = current === 0;

    next.textContent =
        current === slides.length - 1
        ? 'Volver al inicio'
        : 'Siguiente';

}


prev.addEventListener('click', () => {

    show(current - 1);

});


next.addEventListener('click', () => {

    show(
        current === slides.length - 1
        ? 0
        : current + 1
    );

});


document.addEventListener('keydown', e => {

    if (e.key === 'ArrowRight') {
        show(current + 1);
    }

    if (e.key === 'ArrowLeft') {
        show(current - 1);
    }

});

show(0);