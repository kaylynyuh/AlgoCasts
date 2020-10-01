// Given a String, write a function that checks
// if it is a permutation of a palindrome 

// A palindrome is a word or phrase that is the
// same forwards and backwards. A permutation is
// a rearrangement of letters. We know a string
// is a palindrome permutation if it has at MOST
// only one unique character.

// There are a number of different ways to approach this problem.
// 1) You can simply leverage built-in JS methods to reverse the 
// the str and compare the reversed to the original str, if they 
// are the same, then palindrome is true. See /palindrome/index.js
//
// 2) ^ Leveraging a similar approach, instead getting there w/o
// using built in methods and taking a more iterative approach
// See /palindrome/index.js
//
// 3) Utilize a Set(). Since a Set() only stores unique values,
// If the set only has 1 or less values, than we know the str
// was a palindrome.


function hasPalindromePermutation(theString) {
  // Track characters we've seen an odd number of times
  const unpairedCharacters = new Set();
  for (let char of theString) {
    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      unpairedCharacters.add(char);
    }
  }
  // The string has a palindrome permutation if it
  // has one or zero characters without a pair
  return unpairedCharacters.size <= 1;
}

export default hasPalindromePermutation;