// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size (take one larger array, and
// split into smaller sub-arrays)
// --- Examples
// in this first example, we pass in a size of 2, so we want to break
// this array into sub-arrays that each have a length (size) of 2
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// PsuedoCode Solution 1:
// Create an empty array to hold chunks called "chunked"
// For each element in the unchunked array:
// - retrieve the last element in chunked
// - if, the last element does not exist or if its length
//   is equal to the chunk size, push a new chunk into "chunked"
// - else, add the curent element into the chunk

// Solution 1
// function chunk(array, size) {
//   const chunked = [];
//   for (let element of array) {
//     const last = chunked[chunked.length - 1];
//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//   return chunked;
// }

// Solution 2
function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

module.exports = chunk;
