// Function Description
// Complete the countTriplets function in the editor below. It should 
// return the number of triplets forming a geometric progression for a given
// r as an integer.

// countTriplets has the following parameter(s):
// arr: an array of integers
// r: an integer, the common ratio
// Input Format

// The first line contains two space-separated integers n and r, the size of arr and the common ratio.
// The next line contains n space-seperated integers arr[i].

function countTriplets(arr, r) {
  let progressions = [];
  for (let num = 0; num < arr.length; num++) {
      if (arr[num] % r === 0) {
        progressions.push(arr[num]);
      }
  }
  console.log(progressions)
}