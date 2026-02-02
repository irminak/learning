const textSpan = document.querySelector('span.text');
const cursor = document.querySelector('span.cursor');
let letterNumber = 0;
const text =
    'Morning dripped slowly into the city, carrying the smell of wet stone and burnt coffee. A busker tuned a guitar nobody listened to, while pigeons argued over crumbs like tiny philosophers.';

const addLetter = () => {
    textSpan.textContent += text[letterNumber];
    letterNumber++;
    if (letterNumber === text.length) {
        clearInterval(intervalIndex);
    }
};

const intervalIndex = setInterval(addLetter, 50);
setInterval(() => {
    cursor.classList.toggle('add');
}, 600);
