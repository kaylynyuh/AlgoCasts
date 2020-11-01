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

function countTriplets(arr, ratio) {
  let totalCount = 0;
  const possibilities = {};
  const combos = {};
  // if it already exists in combos, increment
  arr.forEach((number) => {
      totalCount += (combos[number] || 0);
      const nextNumber = number * ratio;
      combos[nextNumber] = (combos[nextNumber] || 0) + (possibilities[number] || 0);
      possibilities[nextNumber] = (possibilities[nextNumber] || 0) + 1;
  })

  return totalCount;
}