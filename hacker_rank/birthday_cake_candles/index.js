// Problem Domain: https://www.hackerrank.com/challenges/birthday-cake-candles

function birthdayCakeCandles(candles) {
  let sorted = candles.sort();
  let max = candles[sorted.length - 1];
  let maxFrequency = 0;
  for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] === max) {
          maxFrequency++;
      }
  }
  return maxFrequency;
}