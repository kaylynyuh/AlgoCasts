// Problem Domain: https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting&h_r=next-challenge&h_v=zen

function maximumToys(prices, k) {
  let count = 0;
  let maxToys = 0;
  // sort the prices from least to greatest. this will
  // avoid a situation where the maxToys is miscalculated
  // by numerical values that are out of chronological order
  let sorted = prices.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
      if (maxToys <= k) {
          maxToys += prices[i];
          count++;
      }
  }
  return count - 1;
}