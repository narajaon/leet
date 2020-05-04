// https://www.hackerrank.com/challenges/triple-sum/problem?h_l=interview&isFullScreen=false&playlist_slugs%5B%5D%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D%5B%5D=search
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
