// Problem Domain: https://www.hackerrank.com/challenges/the-hurdle-race

function hurdleRace(k, height) {
  let max = Math.max(...height);
  if (max <= k) return 0;
  return max - k;
}