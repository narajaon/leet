// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    const found = {}
    let count = 0

    for (let i = 0; i < a.length; i++) {
        found[a[i]] = found[a[i]] ? found[a[i]] + 1 : 1; 
    }

    for (let i = 0; i < b.length; i++) {
        if (found[b[i]] && found[b[i]] > 0) {
            count++
            found[b[i]]--
        } 
    }

    return a.length + b.length - count * 2
}

