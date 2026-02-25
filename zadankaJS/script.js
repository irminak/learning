const { cos } = require('prelude-ls');

function sum(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return console.log(sum);
}

sum([1, 2, 3, 4, 5, 6]);

function sum2(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return console.log(sum);
}

sum2([1, 2, 3, 4, 5, 6]);

const addScope = (a, b) => {
    let sum = 0;
    if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
    } else if (a > b) {
        for (let i = b; i <= a; i++) {
            sum += i;
        }
    } else if (a === b) {
        sum = a;
    }
    return console.log(sum);
};

addScope(1, 6);
addScope(9, 4);
addScope(5, 5);

function game(n, A, B, C) {
    if (n > 0) {
        game(n - 1, A, C, B);
        console.log(`${A} -> ${C}`);
        game(n - 1, B, A, C);
    }
}

game(3, 'A', 'B', 'C');

function squares(a, b) {
    let squareSize = Math.min(a, b);
    let sum = 0;
    for (let i = 0; i < squareSize; i++) {
        let squareAmount = (a - i) * (b - i);
        sum += squareAmount;
        console.log(`${i + 1}x${i + 1}: ${squareAmount}`);
    }
    console.log(`All: ${sum}`);
}

squares(10, 8);
