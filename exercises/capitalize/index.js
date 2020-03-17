// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const words = [];
  for(let word of str.split(' ')) {
    // Take the first letter of the word, capitalize it
    // and concatenate it with the rest of the word. Push
    // this tranformed word into the array
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(' ');
}

module.exports = capitalize;
