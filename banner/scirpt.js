const img = document.querySelector('img.baner');
const title = document.querySelector('h1.baner');
const dots = [...document.querySelectorAll('div.dot')];

const baners = [
    { src: './sydney.jpg', text: 'Sydney' },
    { src: './ny.jpg', text: 'New York' },
    { src: './maui.jpg', text: 'Maui' },
];

let activeBaner = 0;
const time = 5000;

const changeBaner = () => {
    activeBaner++;
    const dotIndex = dots.findIndex((dot) => dot.classList.contains('active'));
    if (activeBaner === baners.length) {
        activeBaner = 0;
    }
    img.src = baners[activeBaner].src;
    title.textContent = baners[activeBaner].text;
    dots[dotIndex].classList.toggle('active');
    dots[activeBaner].classList.toggle('active');
};

const keyChange = (e) => {
    if (e.keyCode == 37 || e.keyCode == 39) {
        clearInterval(intervalIndex);
        e.keyCode == 37 ? activeBaner-- : activeBaner++;
        const dotIndex = dots.findIndex((dot) =>
            dot.classList.contains('active')
        );
        if (activeBaner === baners.length) {
            activeBaner = 0;
        } else if (activeBaner < 0) {
            activeBaner = baners.length - 1;
        }

        img.src = baners[activeBaner].src;
        title.textContent = baners[activeBaner].text;
        dots[dotIndex].classList.toggle('active');
        dots[activeBaner].classList.toggle('active');

        intervalIndex = setInterval(changeBaner, time);
    }
};

let intervalIndex = setInterval(changeBaner, time);
document.addEventListener('keydown', keyChange);
