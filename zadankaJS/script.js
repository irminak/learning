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
