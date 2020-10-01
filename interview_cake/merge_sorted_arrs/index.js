// We have our lists of orders sorted numerically already, in arrays. 
// Write a function to merge our arrays of orders into one sorted array.

function mergeSortedArrays(arr1, arr2) {
  let merged = [];
  let currentArr1 = 0;
  let currentArr2 = 0;
  let currentIdxMerged = 0;
  while (currentIdxMerged < (arr1.length + arr2.length)) {
    // Case: if arr1 is exhausted
    if (currentIdxMerged >= arr1.length) {
      merged[currentIdxMerged] = arr2[currentArr2];
      currentArr2++;
    }
    // Case: if arr2 is exhausted
    if (currentIdxMerged >= arr2.length) {
      merged[currentIdxMerged] = arr1[currentArr1];
      currentArr1++;
    }
    // Case: arr1 is next
    if (arr1[currentArr1] < arr2[currentArr2]) {
      merged[currentIdxMerged] = arr[currentArr1];
      currentArr1++;
    } 
    // Case: arr 2 is next 
    else {
      merged[currentIdxMerged] = arr2[currentArr2];
      currentArr2++;
    }
  }
}

export default mergeSortedArrays;