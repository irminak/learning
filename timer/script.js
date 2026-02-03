const concertDate = new Date('2026-05-22 18:00:00').getTime();

const dSpan = document.querySelector('span.days');
const hSpan = document.querySelector('span.hours');
const mSpan = document.querySelector('span.minutes');
const sSpan = document.querySelector('span.seconds');

setInterval(() => {
    const todayDate = new Date().getTime();

    const days = Math.floor((concertDate - todayDate) / (1000 * 60 * 60 * 24));
    dSpan.textContent = days;

    const hours = Math.floor(
        ((concertDate - todayDate) / (1000 * 60 * 60)) % 24
    );
    hSpan.textContent = hours < 10 ? '0' + hours : hours;

    const minutes = Math.floor(((concertDate - todayDate) / (1000 * 60)) % 60);
    mSpan.textContent = minutes < 10 ? '0' + minutes : minutes;

    const seconds = Math.floor(((concertDate - todayDate) / 1000) % 60);
    sSpan.textContent = seconds < 10 ? '0' + seconds : seconds;
}, 1000);
