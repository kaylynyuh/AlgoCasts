// A left rotation operation on an array shifts each of the array's 
// elements 1  unit to the left. 

// Given an array a of n integers and a number d, perform d left rotations 
// on the array. Return the updated array to be printed as a single line 
// of space-separated integers.

function rotLeft (a, d) {
  let idx = 0;
  let rotateIdx = 0;
  let rotated = [];
  while (rotateIdx < a.length) {
    rotated[idx] = a[rotateIdx];
    idx++;
    rotateIdx++;
  }
  rotateIdx = 0;
  while (rotateIdx < d) {
    rotated[idx] = a[rotateIdx];
    idx++;
    rotateIdx++;
  }
  return rotated;
}