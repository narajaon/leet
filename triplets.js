'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
	inputString += inputStdin;
});

process.stdin.on('end', function() {
	inputString = inputString.split('\n');

	main();
});

function readLine() {
	return inputString[currentLine++];

}

function isSuite(curr, tails, r) {
    const ts = Object.values(tails)    

    for (let i = 0; i < ts.length; i++) {
        if (ts[i].t === curr * r) {
            return true
        }
    }

    return false
}

function getSuites(arr, r, pos) {
    let i = pos + 1
    const tails = {}
    let res = 0

    while (i < arr.length) {
        const curr = arr[i]

        if (isSuite(curr, tails)) {
            tails[curr].t = curr
            tails[curr].c++
            if (tails[curr].c === 3) {
                delete tails[curr]
                res++
            }
        } else {
            tails[curr] = { t: curr, c: 1 }
        }
    }

    console.log(tails, pos, arr)

    return res
}

// Complete the countTriplets function below.
function countTriplets(arr, r) {
    let count = 0
    console.log(arr)
	for (let i = 0; i < arr.length; i++) {
		count += getSuites(arr, r, i)
	}
    return count
}

function main() {
	const ws = fs.createWriteStream('./res.txt');

	const nr = readLine().replace(/\s+$/g, '').split(' ');

	const n = parseInt(nr[0], 10);

	const r = parseInt(nr[1], 10);

	const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

	const ans = countTriplets(arr, r);

	ws.write(ans + '\n');

	ws.end();

}

