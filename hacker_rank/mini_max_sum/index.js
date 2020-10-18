// Problem Domain: https://www.hackerrank.com/challenges/mini-max-sum/problem?h_r=next-challenge&h_v=zen

function miniMaxSum(arr) {
  let sorted = arr.sort();
  let minSum = 0;
  let maxSum = 0;
  for (let i = 1; i < sorted.length; i++) {
      maxSum += sorted[i];
  }
  for (let i = 0; i < sorted.length - 1; i++) {
      minSum += sorted[i];
  }
  console.log(`${minSum} ${maxSum}`);
}
