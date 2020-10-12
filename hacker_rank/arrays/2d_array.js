// Problem Domain: https://www.hackerrank.com/challenges/2d-array/problem

function hourGlassSum(arr) {
  // any given hourglass is going to have 7 elements in it,
  // so to find the max, take the min possible value (-9)
  // an multiply it by 7
  // 1 1 1
  //   1
  // 1 1 1
  let max = -63;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let sum = 0
      sum = (arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2])
      max = max < sum ? sum : max
      }
  }
  return max;
}