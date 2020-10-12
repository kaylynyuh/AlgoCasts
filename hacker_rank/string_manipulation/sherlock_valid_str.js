// Sherlock considers a string to be valid if all characters of the string 
// appear the same number of times. It is also valid if he can remove just 1 
// character at 1 index in the string, and the remaining characters will occur 
// the same number of times. Given a string , determine if it is valid. 
// If so, return YES, otherwise return NO.

// For example, if s = abc, it is a valid string because frequencies are { a: 1, b: 1, c: 1}. 
// So is s = abcc because we can remove one c and have 1 of each character in the remaining string. 


function buildCharMap(str) {
  let charMap = {};
  for (let char of str) {
      if (charMap[char]) {
          charMap[char]++;
      } else {
          charMap[char] = 1;
      }
  }
  return charMap;
}

// Complete the isValid function below.
function isValid(s) {
    let charMap = buildCharMap(s);
    let values = Object.values(charMap);
    let uniqueSet = new Set();
    for (let val of values) {
        if (uniqueSet.has(val)) {
            uniqueSet.delete(val);
        } else {
            uniqueSet.add(val);
        }
    }
    if (uniqueSet.size <= 1) {
        return "NO"
    } else {
        return "YES"
    }
}