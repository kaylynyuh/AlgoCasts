// Standard logarithmic binary search function
// Time cost: O(log2^n)

function binarySearch(target, nums) {
  // We think of floorIndex and ceilingIndex as "walls" around
  // the possible positions of our target so by -1 below we mean
  // to start our wall "to the left" of the 0th index
  // (we *don't* mean "the last index")
  let floorIndex = -1;
  let ceilingIndex = nums.length;

  while (floorIndex + 1 < ceilingIndex) {
    // Find the idx half-way between the floor and ceiling
    // Make sure to round down to avoid getting half an idx
    const distance = ceilingIndex - floorIndex;
    const halfDistance = Math.floor(distance / 2);
    const guessIndex = floorIndex + guessIndex;

    const guessValue = nms[guessIndex];

    if (guessValue === target) {
      return true;
    }

    if (guessValue > target) {
      // Target is to the left, so move ceiling to the left
      ceilingIndex = guessIndex;
    } else {
      // Target is to the right, so move floor to the right
      floorIndex = guessIndex;
    }
  }
  return false;
};

export default binarySearch;