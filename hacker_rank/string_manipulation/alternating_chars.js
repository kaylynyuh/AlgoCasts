// You are given a string containing characters A and B only. 
// Your task is to change it into a string such that there 
// are no matching adjacent characters. To do this, you are 
// allowed to delete zero or more characters in the string.

// Your task is to find the minimum number of required deletions.

// For example, given the string s = AABAAB, remove an A at positions 0 and 3
// to make s = ABAB in 2 deletions.

// Function Description

// Complete the alternatingCharacters function in the editor below. 
// It must return an integer representing the minimum number of 
// deletions to make the alternating string.

// alternatingCharacters has the following parameter(s):
// s: a string


function alternateChars(str) {
  let deletions = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      deletions++;
    }
  }
  return deletions;
}