
// Two strings are anagrams of each other if the letters of one string 
// can be rearranged to form the other string. Given a string, find 
// the number of pairs of substrings of the string that are anagrams of each other.

// Function Description

// Complete the function sherlockAndAnagrams in the editor below. It must return 
// an integer that represents the number of anagrammatic pairs of substrings in s.

// sherlockAndAnagrams has the following parameter(s):
// s: a string 


// Solution:
// The problem can be divided in two parts:

// Part 1 : how to calculate number of pairs from a set of elements
// Part 2 : given one string , extract all the substrings inside the 
// main string and find calculate the number of pairs of strings that
//  are anagrams one of the other.

function countPairs(n) {
  return (n * (n - 1)) / 2;
}

function sherlockAndAnagrams(s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
      for (let j = i; j < s.length; j++) {
          const substr = s.substring(i, j + 1); // returns the part of the str between the start and end indexes
          const key = substr.split('').sort().join('');
          if (map.has(key)) {
             map.set(key, map.get(key) + 1); 
          } else {
             map.set(key, 1);
          }
      }
  } 
  //Check all map values and calculate number of pairs 
  //for every key with an associate value > 1
  let result = 0;
  for (const [key, value] of map) {
      if (value > 1) {
       result += countPairs(value);    
      }
  }
  return result;
}
