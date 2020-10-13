// Problem Domain: https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting&h_r=next-challenge&h_v=zen

function maximumToys(prices, k) {
  let count = 0;
  let maxToys = 0;
  for (let i = 0; i < prices.length; i++) {
      if (maxToys <= k) {
          maxToys = maxToys + prices[i];
          count++;
      }
  }
  return count - 1;
}