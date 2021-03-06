// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

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

    for (let i = 0; i < arr.length; i++) {
        if (found.has(arr[i])) {
            continue;
        }

        count += dive(arr, i, found);
    }

    return count;
}
