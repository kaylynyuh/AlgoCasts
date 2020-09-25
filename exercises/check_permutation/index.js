// Given two strings, write a method to decide
// if one is a permutation of the other 

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