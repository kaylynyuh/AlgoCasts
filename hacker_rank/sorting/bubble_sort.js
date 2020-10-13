// Problem Domain: https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

// Write a function that uses bubble sort to sort an array in 
// ascending order.

// Complete the countSwaps function below.

function countSwaps(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length - 1; j++) {
          // Swap adjacent elements if they are in decreasing order
          if (a[j] > a[j + 1]) {
              let temp = a[j];
              a[j] = a[j + 1];
              a[j + 1] = temp;
              count++;
          }
      }
  }
  console.log(`Array is sorted in ${count} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[a.length - 1]}`);
}
