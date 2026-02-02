const spnText = document.querySelector('span.text');
const text = ['Text 1', 'Text 2', 'Text 3'];
const cursor = document.querySelector('span.cursor');
let indexLetter = -10;
let indexWord = 0;

function changeWord() {
    if (indexLetter >= 0) {
        spnText.textContent += text[indexWord][indexLetter];
    }
    indexLetter++;
    if (indexLetter === text[indexWord].length) {
        indexWord++;
        if (indexWord === text.length) return;
        return setTimeout(() => {
            indexLetter = 0;
            spnText.textContent = '';
            changeWord();
        }, 600);
    }
    setTimeout(changeWord, 200);
}

changeWord();

setInterval(() => {
    cursor.classList.toggle('add');
}, 400);
