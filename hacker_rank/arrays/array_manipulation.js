
// Starting with an indexed array of zeros and a list of operations, 
// for each operation add the value to each of the arrays of elements 
// between two given indices, inclusive. Once all operations have been 
// performed, return the maximum value in your array.

// For example, the length of your array of zeros n=10. Your list of queries is as follows:
//     a b k
//     1 5 3
//     4 8 7
//     6 9 1

// Add the values of k between the indices a and b inclusive:

// index->	 1 2 3  4  5 6 7 8 9 10
// Zeros-> [0,0,0, 0, 0,0,0,0,0, 0]
// 	[3,3,3, 3, 3,0,0,0,0, 0] -> Iteration 1
// 	[3,3,3,10,10,7,7,7,0, 0] -> Iteration 2
// 	[3,3,3,10,10,8,8,8,1, 0] -> Iteration 3

// The largest value is 10 after all operations are performed.


function arrayManipulation(n, queries) {
  const arr = Array(n + 1);
  let maxValue = 0;
  letcurrentNumber = 0;
  queries.forEach(([startRange, endRange, value]) => {
    arr[startRange] = arr[startRange] || { start: 0, end: 0 };
    arr[endRange] = arr[endRange] || { start: 0, end: 0 };
    arr[startRange].start += value;
    arr[endRange].end += value;
   });
    arr.forEach((cell) => {
      if (cell) {
        currentNumber += cell.start;
        if (currentNumber > maxValue) {
            maxValue = currentNumber;
        }
        currentNumber -= cell.end;
    }
  });
  return maxValue;
}