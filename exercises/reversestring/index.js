// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// solution #1:
// turn str into an array
// reverse the array
// join back together to a string
// return the result
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// solution #2: O(n)
// loop through all the characters
// create a an string called "reversed"
// for each character in the str, add it to the start of "reversed"
// return "reversed"
// function reverse(str) {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// solution #3:
// reduce() is used to condense all the values of an array into a single value
// reduce() takes 2 arguments, an arrow function and a starting value
// on the first pass through, the starting argument when will be fed into the function
// and then whatever gets returned from the inner function will be used as the new
// starting argument
// function reverse(str) {
//   return str.split('').reduce((reversed, character) => {
//     return character + reversed;
//   }, '');
// }
// *** the above solution as a one liner *** //
function reverse(str) {
  return str.split('').reduce((reverse, char) => char + reverse, '');
}

module.exports = reverse;


// *** STRETCH GOALS *** //

// solved in python:
// def reverse(text):
//   if(text.length === 0) return;
//   reversed = ''
//   for char in text:
//     reversed = char + reversed
//   return reversed

// reversed in place with an arrayOfChars as an argument
// function reverse(arrayOfChars) {
//   let leftIndex = arrayOfChars[0];
//   let rightIndex = arrayOfChars.length - 1;

//   while (leftIndex < rightIndex) {
//     // Swap characters
//     const temp = arrayOfChars[leftIndex];
//     arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
//     arrayOfChars[rightIndex] = temp;
//     // Move towards middle
//     leftIndex++;
//     rightIndex--;
//   }
// }