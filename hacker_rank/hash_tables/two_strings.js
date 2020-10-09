// Given two strings, determine if they share a common substring.
//  A substring may be as small as one character.

// For example, the words "a", "and", "art" share the common 
// substring . The words "be" and "cat" do not share a substring.

// Function Description
// Complete the function twoStrings in the editor below. It should
//  return a string, either YES or NO based on whether the strings 
//  share a common substring.

// twoStrings has the following parameter(s):
// s1, s2: two strings to analyze .

// Output Format
// For each pair of strings, return YES or NO.

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

function twoStrings(s1, s2) {
  let result = null;
  let s1CharMap = buildCharMap(s1);
  let s2CharMap = buildCharMap(s2);
  for (let char in s1CharMap) {
    if (s1CharMap[char] === s2CharMap[char]) {
      result = "Yes"
    } else {
      result = "No"
    }
  }
  return result;
}