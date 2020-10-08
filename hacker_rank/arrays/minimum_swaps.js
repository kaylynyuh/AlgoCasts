// You are given an unordered array consisting of consecutive integers  
// [1, 2, 3, ..., n] without any duplicates. You are allowed to swap 
// any two elements. You need to find the minimum number of swaps 
// required to sort the array in ascending order.

// For example, given the array arr = [7, 1, 3, 2, 4, 5, 6] we perform the following steps:
// i   arr                         swap (indices)
// 0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
// 1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
// 2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
// 3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
// 4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
// 5   [1, 2, 3, 4, 5, 6, 7]
// this ^ took a total of 5 swaps

// Complete the function minimumSwaps in the editor below. It must return 
// an integer representing the minimum number of swaps to sort the array.
// minimumSwaps has the following parameter(s):  
//   * arr: an unordered array of integers

// There is a brute force approach to this but it is not a efficient
// A more efficient approach would be to:

// Look at each idx and compare the compare the idx position with the 
// element's value, if it's the same, then move onto the next element.

// If idx position, is not the same as the element's value, than treat
// the element value as the index value for finding the next element.

// If we come back to the visited element then there exists a cycle,
// count the size of the cycle (the number of swaps for particular cycle
// would be size - 1), repeat for all cycles, then add them together.

function minimumSwaps(arr) {
  let count = 0;
  for(let i = 0; i < arr.length; i++){
   let current = arr[i];
   let right = i + 1;
   if (current !== right) {
        // find the index of the right number in the array
        // only look from the current position up passing i to indexOf
        let rightIdx = arr.indexOf(right, i);
        // replace the other position with this position value
        arr[rightIdx] = arr[i];
        // replace this position with the right number
        arr[i] = right;
        // increment the swap count since a swap was done
        count++;
    }
  }
 return count;
}
