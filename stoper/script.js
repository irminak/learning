const timeP = document.querySelector('p.time');
const startB = document.querySelector('button.start');
const resetB = document.querySelector('button.reset');

let startTime = 0;
let start = true;
let timeInterval;

const startingTimer = () => {
    if (start) {
        timeInterval = setInterval(() => {
            startTime++;
            timeP.textContent = (startTime / 100).toFixed(2);
        }, 10);
        startB.textContent = 'Stop';
        start = !start;
    } else {
        clearInterval(timeInterval);
        timeP.textContent = (startTime / 100).toFixed(2);
        startB.textContent = 'Start';
        start = !start;
    }
};

startB.addEventListener('click', startingTimer);
resetB.addEventListener('click', () => {
    startTime = 0;
    timeP.textContent = '---';
    clearInterval(timeInterval);
    if (!start) {
        start = !start;
        startB.textContent = 'Start';
    }
});
