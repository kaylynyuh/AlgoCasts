// Your team is scrambling to decipher a recent message, 
// worried it's a plot to break into a major European National 
// Cake Vault. The message has been mostly deciphered, but all 
// the words are backward! Your colleagues have handed off the last step to you.

// Write a function reverseWords() that takes a message as 
// an array of characters and reverses the order of the words in place. ↴

function reverseWords(message) {
  reverseChars(message, 0, message.length - 1);
  let currentWordStartIndex = 0;
  for(let i = 0; i <= message.length; i++) {
    if(i === message.length || message[i] === ' ') {
      reverseChars(message, currentWordStartIndex, i - 1);
      currentWordStartIndex = i + 1;
    }
  }
}   

// helper function
function reverseChars(message, leftIndex, rightIndex) {
  while (leftIndex < rightIndex) {
    let temp = message[leftIndex];
    message[leftIndex] = message[rightIndex];
    message[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
}
