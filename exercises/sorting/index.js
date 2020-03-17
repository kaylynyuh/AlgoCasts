// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; i < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    // Assume that i is the lowest number
    let indexOfMin = i;
    for(let j = i + 1; i < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        // This means that we must have found an element
        // that is less than indexOfMin, so update indexOfMin
        indexOfMin = j;
      }
    }
    if(indexOfMin !== i) {
      // indexOfMin points to the absolute lowest value
      let lesser = arr[indexOfMin];
      // this handles the actual "swapping"
      arr[indexOfMin] = lesser;
      lesser = arr[i];
    }
  }
  return arr;
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
