// Given two sorted arrays nums1 and nums2 of size m and n respectively, 
// return the median of the two sorted arrays.

// Follow up: The overall run time complexity should be O(log (m+n)).

function medianTwoSortedArrays (nums1, nums2) {
  let currentIndexNums2 = 0;
  let currentIndexNums1 = 0;
  let currentIndexMerged = 0;
  let mergedArray = [];
  let sum = 0;

  while (currentIndexMerged < (nums1.length + nums2.length)) {
    // Case: nums1 is exhausted
    if (currentIndexNums1 >= nums1.length) {
      mergedArray[currentIndexMerged] = nums2[currentIndexNums2];
      currentIndexNums2++;
      // Case: nums2 array is exhausted
    } else if (currentIndexNums2 >= nums2.length) {
      mergedArray[currentIndexMerged] = nums1[currentIndexNums1];
      currentIndexNums1++;
      // Case: nums1 is next
    } else if (nums1[currentIndexNums1] < nums2[currentIndexNums2]) {
      mergedArray[currentIndexMerged] = nums1[currentIndexNums1];
      currentIndexNums1++;
      // Case: nums2 item is next
    } else {
      mergedArray[currentIndexMerged] = nums2[currentIndexNums2];
      currentIndexNums2++;
    }
    sum += mergedArray[currentIndexMerged];
    currentIndexMerged++;
  }
  return sum / (nums1.length + nums2.length);
}