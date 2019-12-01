// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// solution #1:
// turn str into an array
// reverse the array
// join back together to a string
// return true if the result === the original string
// function palindrome(str) {
//   return str === str.split('').reverse().join('');
// }

// solution #2:
// loop through all the characters
// create a an string called "reversed"
// for each character in the str, add it to the start of "reversed"
// return true if "reversed" === the original string
// function palindrome(str) {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   if (str === reversed) {
//     return true;
//   } else {
//     return false;
//   }
// }

// solution #3:
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
