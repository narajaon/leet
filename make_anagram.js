// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    const short = a.length <= b.length ? a : b;
    const long = b.length >= a.length ? b : a;
    const found = {}
    let count = 0

    for (let i = 0; i < short.length; i++) {
        found[short[i]] = found[short[i]] ? found[short[i]] + 1 : 1; 
    }

    for (let i = 0; i < long.length; i++) {
        if (found[long[i]] && found[long[i]] > 0) {
            count++
            found[long[i]]--
        } 
    }

    return a.length + b.length - count * 2
}

