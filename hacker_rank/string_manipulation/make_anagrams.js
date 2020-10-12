// Alice is taking a cryptography class and finding anagrams to be very useful. 
// We consider two strings to be anagrams of each other if the first string's 
// letters can be rearranged to form the second string. In other words, both 
// strings must contain the same exact letters in the same exact frequency.
// For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

// Alice decides on an encryption scheme involving two large strings where 
// encryption is dependent on the minimum number of character deletions 
// required to make the two strings anagrams. Can you help her find this number?

// Given two strings, a and b,that may or may not be of the same length, 
// determine the minimum number of character deletions required to make a and 
// b anagrams. Any characters can be deleted from either of the strings.


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
// Complete the makeAnagram function below.
function makeAnagram(a, b) {
  let aMap = buildCharMap(a);
  let bMap = buildCharMap(b);
  let res = 0;
  for (let char in aMap) {
      if (aMap[char] !== bMap[char]) {
          res++;
      } 
  }
  for (let char in bMap) {
      if (bMap[char] !== aMap[char]) {
          res++;
      }
  }
  return res;
}
