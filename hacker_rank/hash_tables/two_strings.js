// Given two strings, determine if they share a common substring a. A substring 
// may be as small as one character.

// For example, the words "a", "and", "art" share the common substring . The words 
// "be" and "cat" do not share a substring.

// Function Description

// Complete the function twoStrings in the editor below. It should return a string, 
// either YES or NO based on whether the strings share a common substring.


function twoStrings(s1, s2) {
  let substr = "";
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i])) {
      substr += s1[i];
    }
  }
  if (substr.length > 0) {
    return "YES"
  } else {
    return "NO"
  }
}