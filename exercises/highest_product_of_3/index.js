// Given an array of integers, find the highest 
// product you can get from three of the integers.

// The input arrayOfInts will always have at least three integers.

function highestProductOf3(arrayOfInts) {
  if (arrayOfInts.length < 3) throw new Error('Less than 3 items!');
  // initialize the first possible highest and lowest values
  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);
  // initialize the first possible highestProdcutOf2 and 
  // lowestProductOf2 
  let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  // initialize with the first *3 possible items
  let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
  // loop through items starting at index 2
  for (let i = 2; i < arrayOfInts.length; i++) {
    // keep track of current
    let current = arrayOfInts[i];
    // do we have the highest product of 3?
    highestProductOf3 = Math.max(
      highestProductOf3,
      highestProductOf2 * current,
      lowestProductOf2 * current
    );
    // do we have a new highest product of 2?
    highestProductOf2 = Math.max(
      highestProductOf2, 
      highest * current,
      lowest * current
    );
    // do we have a new lowest product of 2?
    lowestProductOf2 = Math.min(
      lowestProductOf2,
      highest * current,
      lowest * current
    );
    // do we have a new highest?
    highest = Math.max(highest, current);
    // do we have a new lowest?
    lowest = Math.min(lowest, current);
  }
  return highestProductOf3;
}

export default highestProductOf3;



