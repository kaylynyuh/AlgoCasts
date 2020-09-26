// Write a function that replaces all of the spaces
// in a string with '%20'

function URLify(str) {
  let transformed = '';
  for(let char = 0; char < str.length; char++) {
    if (str[char] === ' ') {
      transformed += '%20'
    } else {
      transformed += str[char]
    }
  }
  return transformed;
}

export default URLify;