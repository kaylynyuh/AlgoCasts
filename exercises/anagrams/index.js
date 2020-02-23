// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//   // Object.keys() returns an array of keys. If the lengths of the strings
//   // do not match (or numbers of keys) then we can just return false
//   // because we know it can't be an anagram
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//   // Notice when you are iterating over an object you use "in" vs "or"
//   for(let char in aCharMap) {
//     if(aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//     return true;
//   }
// }
//
// function buildCharMap(str) {
//   const charMap = {};
//   for (let char of str.replace(/[^\w]/g).toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
