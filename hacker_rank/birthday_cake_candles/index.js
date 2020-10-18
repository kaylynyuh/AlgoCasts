// Problem Domain: https://www.hackerrank.com/challenges/birthday-cake-candles/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

function birthdayCakeCandles(candles) {
  let max = Math.max(...ar);    
  let result = candles.filter(c => c === max);    
  return result.length;
}