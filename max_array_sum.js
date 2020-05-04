// https://www.hackerrank.com/challenges/max-array-sum/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming
// Complete the maxSubsetSum function below.
function maxSubsetSum(arr) {
  const res = [...arr];
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {

    for (let j = i + 2; j < arr.length; j++) {
      res[j] = Math.max(res[i] + arr[j], res[j])
      max = Math.max(res[j], max)
    }

  } 

  return max;
} 

