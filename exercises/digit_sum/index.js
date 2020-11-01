// Write a function called digit_sum that takes a positive integer n as  
// input and returns the sum of all that number’s digits. For example: 
// digit_sum(1234) should return 10 which is 1 + 2 + 3 + 4. (Assume that the 
// number you are given will always be positive.)

// Iterative approach: 
function digitSum (arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
      res += arr[i] + arr[i + 1]
      i = i + 1
  }
  console.log('res', res)
  return res 
}


// Array method approach:
function digitSum (arr) {
  return arr.reduce((a,b) => a + b)
}