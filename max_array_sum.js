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

function getMaxAt(arr, cur, total) {
  let totalEv = arr[cur]
  let totalOd = arr[cur] 
  let i = cur + 2
  let j = cur + 3

  while (i < arr.length && j < arr.length) {
    let even = arr[i]
    let odd = arr[j]

    if (even && even > 0) {
      totalEv += even
    }

    if (odd && odd > 0) {
      totalOd += odd
    }

    j += 2
    i += 2
  }

  return Math.max(total, Math.max(totalEv, totalOd))
}

// Complete the maxSubsetSum function below.
function maxSubsetSum(arr) {
  let total = -Infinity

  for (let i = 0; i < arr.length; i++) {
    total = getMaxAt(arr, i, total)
  }

  console.log(total)
  return total
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = maxSubsetSum(arr);

    ws.write(res + '\n');

    ws.end();
}

