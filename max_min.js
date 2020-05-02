// https://www.hackerrank.com/challenges/angry-children/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms
// Complete the maxMin function below.
function maxMin(k, arr) {
    arr.sort((a, b) => a - b)

    let min = Infinity;
    for (let i = 0; i < arr.length - 1; i++) {
        const res = arr[i + k - 1] - arr[i]
        if (res < min) {
            min = res;
        }
    }

    return min; 
}

