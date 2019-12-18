// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
// You can use the following technique for similar type questions:
// What is the most common character in the string?
// Does string A have the same characters as string B (is it an anagram?)
// Does the given string have any repeated characters in it?

function maxChar(str) {
  const charMap = {};
  for (let char of str) {
    // if charMap[char] already exists, increment
    if (charMap[char]) {
      charMap[char]++;
    } else {
      // else if charMap[char] does NOT exist, set
      // its value to 1
      charMap[char] = 1;
    }
  }
  console.log(charMap);
}

module.exports = maxChar;
