// Implement an algorithm that will determine
// if a String has all unique characters

function isUnique(str) {
  let transformed = str.toLowerCase();
  let unique = '';
  for (let char = 0; char <= transformed.length; char++) {
    if (unique.includes(transformed[char])) {
      return false;
    } else {
      unique += transformed[char];
    }
  }
  return true;
}

export default isUnique();