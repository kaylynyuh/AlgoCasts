// Write a function that takes an array of characters
// and reverses the letters in place

function reverseChars(arrayOfChars) {
  let leftIndex = 0;
  let rightIndex = arrayOfChars.length - 1;
  while (leftIndex < rightIndex) {
    // Swap characters
    const temp = arrayOfChars[leftIndex];
    arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
    arrayOfChars[rightIndex] = temp;
    // Move towards middle
    leftIndex++;
    rightIndex--;
  }
}

export default reverseChars;