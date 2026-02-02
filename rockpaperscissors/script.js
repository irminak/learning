const scores = {
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0,
};

const player = {
    user: '',
    ai: '',
};

const figures = [...document.querySelectorAll('img')];

const figureChoice = (e) => {
    player.user = e.target.dataset.option;
    figures.forEach((figure) => (figure.style.boxShadow = ''));
    e.target.style.boxShadow = '0 0 0 5px rosybrown';
};

const drawFigure = () => {
    const options = ['kamień', 'papier', 'nożyce'];
    let index = Math.floor(Math.random() * options.length);
    return options[index];
};

function findWinner() {
    if (
        (player.user === 'kamień' && player.ai === 'nożyce') ||
        (player.user === 'papier' && player.ai === 'kamień') ||
        (player.user === 'nożyce' && player.ai === 'papier')
    ) {
        return [player.user, 'Ty!'];
    } else if (
        (player.user === 'nożyce' && player.ai === 'kamień') ||
        (player.user === 'kamień' && player.ai === 'papier') ||
        (player.user === 'papier' && player.ai === 'nożyce')
    ) {
        return [player.ai, 'Komputer :('];
    } else return ['draw', 'remis'];
}

const updateScores = () => {
    document.querySelector('span[data-summary="your-choice"]').textContent =
        player.user;
    document.querySelector('span[data-summary="ai-choice"]').textContent =
        player.ai;
    document.querySelector('span[data-summary="winner"]').textContent =
        findWinner()[1];
    document.querySelector('span[data-score="games-number"]').textContent =
        scores.games;
    if (findWinner()[0] === player.user) return ++scores.wins;
    else if (findWinner()[0] === player.ai) return ++scores.losses;
    else if (findWinner()[0] === 'draw') return ++scores.draws;
};

const startGame = () => {
    if (!player.user) {
        return alert('Aby rozpocząć grę wybierz obrazek');
    } else {
        ++scores.games;
        player.ai = drawFigure();
        findWinner();
        updateScores();
        document.querySelector('span[data-score="games-number"]').textContent =
            scores.games;
        document.querySelector('span[data-score="wins-numbers"]').textContent =
            scores.wins;
        document.querySelector('span[data-score="loss-numbers"]').textContent =
            scores.losses;
        document.querySelector('span[data-score="draws-numbers"]').textContent =
            scores.draws;
    }
};

figures.forEach((figure) => figure.addEventListener('click', figureChoice));

document.querySelector('.start').addEventListener('click', startGame);
