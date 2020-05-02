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

function getTriplets(a, b, c, cur) {
}

// Complete the triplets function below.
function triplets(a, b, c) {
  a = [...new Set(a)].sort((aa, bb) => aa - bb)
  b = [...new Set(b)].sort((aa, bb) => aa - bb)
  c = [...new Set(c)].sort((aa, bb) => aa - bb)

  let i = 0
  let j = 0
  let k = 0
  let res = 0

  while (b[i]) {
    while (a[j] && a[j] <= b[i]) {
      j++
    }

    while (c[k] && c[k] <= b[i]) {
      k++
    }

    res += j * k
    i++
  }

  return console.log(res)
}

function main() {
  const ws = fs.createWriteStream('output.txt');

  const lenaLenbLenc = readLine().split(' ');

  const lena = parseInt(lenaLenbLenc[0], 10);

  const lenb = parseInt(lenaLenbLenc[1], 10);

  const lenc = parseInt(lenaLenbLenc[2], 10);

  const arra = readLine().split(' ').map(arraTemp => parseInt(arraTemp, 10));

  const arrb = readLine().split(' ').map(arrbTemp => parseInt(arrbTemp, 10));

  const arrc = readLine().split(' ').map(arrcTemp => parseInt(arrcTemp, 10));

  const ans = triplets(arra, arrb, arrc);

  ws.write(ans + '\n');

  ws.end();
}

