// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// It is best to generate the fibonacci sequence up until n
// so then you can simply return the last element which is n
// This solution is a linear runtime O(n)
function fib(n) {
  // since there is no way to possibly calculate the first
  // 2 nums in a fib sequence, manually add them since they
  // will always be 0 and 1
  const result = [0, 1];
  // i starts at 2 to account for the already set values in result
  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];
    result.push(a + b);
  }
  return result[result.length - 1];
}

// Runtime wise, this implementationis extremely poor.
// It runs in exponential time O(2 ^ n).
// One way to improve the runtime of this algorithm is
// through memoization (store the arguments of each function call
// along with the result, so if the function is called again with
// the same arguments, return the precomputed result instead of
// running the function again)
//
// Original function:
function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

// Memoized Helper function:
function memoize(fn) {
  const cache = {};
  // ...args says "I don't know how many arguments will be called
  // with this function so just take all of them put them in an array
  // and assign to args"
  return function(...args) {
    // check if the function has ever been called with these arguments
    // if it has, just return the value outright instead of making another
    // function call
    if (cache[args]) {
      return cache[args];
    };
    const result = fn.apply(this, args); // use apply since the fn was called with an array of args
    cache[args] = result; // create a key in the cache with the argument whose value is the result ^
    return result;
  };
}
fib = memoize(fib)

module.exports = fib;
