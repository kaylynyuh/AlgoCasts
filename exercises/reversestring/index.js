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

// solution #2:
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
