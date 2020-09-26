// Implement a method to perform basic string compression
// using the counts of repeated characters. 

// For example: 'aabcccccaaa' would return 'a2b1c5a3'
// If you compressed string would not become smaller than 
// the original string, your method should return the 
// original string

function stringCompression(str) {
  let charMap = {}
  let temp = '';
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }
  for (let char in charMap) {
    temp += `${char}${charMap[char]}`
  }
  return temp
}

export default stringCompression; 