'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function dive(arr, i, found) {
    let count = 0;
    let cur = i;

    while (found.has(arr[cur]) === false) {
        found.set(arr[cur])
        cur = arr[cur] - 1;
        count++;
    }

    return count - 1;
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    const found = new Map();
    let count = 0;
    let c = 0;

    for (let i = 0; i < arr.length; i++) {
        if (found.has(arr[i])) {
            continue;
        }

        c = dive(arr, i, found);
        count += c;
    }

    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = minimumSwaps(arr);

    ws.write(res + '\n');

    ws.end();
}

