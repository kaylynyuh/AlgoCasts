// Given two strings, write a method to decide
// if one is a permutation of the other.

// There are a number of different approaches to this problem.
// 1) You could simply sort both strings and compare them since 
// we know that 2 strings are permutations of each other if
// if they have the same characters, regardless of order.
// 2) You can check if both strings have equal character counts.


// Solution #1
// function checkPermutation(str1, str2) {
//   return str1.toLowerCase().sort() === str2.toLowerCase().sort()
// };

// Solution #2
// Helper function to build charMap{} for each str
function buildCharMap(str) {
  let charMap = {};
  for (let char = 0; char <= str.length; char++) {
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }
  return charMap;
}

function checkPermutation(str1, str2) {
  let str1Map = buildCharMap(str1)
  let str2Map = buildCharMap(str2)
  if (Object.keys(str1Map).length !== Object.keys(str2Map).length) {
    return false
  }
  for (let char in str1Map) {
    if (str1Map[char] !== str2Map[char]) {
      return false
    }
  }
  return true
}

export default checkPermutation;