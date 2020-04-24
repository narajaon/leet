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
