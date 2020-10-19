// Problem Domain: https://www.hackerrank.com/challenges/diagonal-difference/problem

// Since we know that the first set of diagonal values are at (0, 0), (1, 1), (2, 2)
// then we know the check we need to queue off of inside our nested loop is if 
// row === col. Since we also know that the inverse of that (2, 2), (1, 1), (0, 0)
// points to the second set of diagonal values, than we know we can simply reverse
// the first set of diagonal values and then calculate their absolute difference

function diagonalDifference(arr) {
  let diagonalFirst = [];
  let diagonalSecond = [];
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr.length; col++) {
      if (row === col) {
        diagonalFirst.push(arr[row][col]);
        diagonalSecond.unshift(arr[row][col])
      }
    }
  }
  
  console.log('diagonalFirst', diagonalFirst)
  console.log('diagonalSecond', diagonalSecond)
  // return Math.abs(diagonalFirst - diagonalSecond);
}