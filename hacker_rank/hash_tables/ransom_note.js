// Harold is a kidnapper who wrote a ransom note, but now he is worried 
// it will be traced back to him through his handwriting. He found a 
// magazine and wants to know if he can cut out whole words from it and 
// use them to create an untraceable replica of his ransom note. The words 
// in his note are case-sensitive and he must use only whole words available 
// in the magazine. He cannot use substrings or concatenation to create the words he needs.

// Given the words in the magazine and the words in the ransom note, print 
// Yes if he can replicate his ransom note exactly using whole words from 
// the magazine; otherwise, print No.

// For example, the note is "Attack at dawn". The magazine contains only "attack at dawn". 
// The magazine has all the right words, but there's a case mismatch. The answer is No.

// Function Description

// Complete the checkMagazine function in the editor below. It must print Yes
// if the note can be formed using the magazine, or No.

// checkMagazine has the following parameters:

// magazine: an array of strings, each a word in the magazine
// note: an array of strings, each a word in the ransom note

function checkMagazine(magazine, note) {
  for (let word of note) {
      const idx = magazine.indexOf(word)
      if (idx !== -1) {
          magazine[idx] = ""
      } else {
          return console.log('No')
      }
  }
  console.log('Yes')
}