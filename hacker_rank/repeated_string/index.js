// Lilah = the person with the string (could be an infinite number of other different names).
// S = the string pattern we’re given some occurrences of “a” present
// S = Must be between 1 and 100 characters.
// N = The string character limit we need to meet.
// N = Must be between 1 and 1000000000000
// “a” = The letter we need to count the number of occurrences from our extended string pattern

// Write a function or functions that returns the total number of letter “a”’s found by repeating 
// the pattern (S) up to a length of (N)


// Solution #1 (not the best Big O)
// function repeatedString(s, n) {
//   const difference = n - s.length;
//   let str = s;
//   let aCount = 0;
//   for (let i = 0; i < difference; i++) {
//       str += str[i];
//   }
//   for (let i = 0; i < str.length; i++) {
//       if (str[i] === 'a') {
//           aCount++;
//       }
//   }
//   return aCount;
// }

// Solution #2 (preferred solution)
function aCount(str, length) { // helper function
  let count = 0;
  for (let i = 0; i < length; i++) {
      if (str[i] === 'a') {
          count++;
      }
  }
  return count;
}

function repeatedString(s, n) {
  return (
      aCount(s, s.length) * parseInt(n / s.length) + aCount(s, n % s.length)
  )
}
