// Problem Domain: https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem
// https://medium.com/@646634/how-to-solve-hackerranks-climbing-the-leaderboard-javascript-64a94975f768

function rankBinarySearch(score, uniqueScores) {
  let start = 0;
  let end = uniqueScores.length - 1;
  while (true) {
      let mid = Math.floor((start + end) / 2);
      // base cases
      if (uniqueScores[mid] === score) {
          return mid + 1;
      } 
      else if (uniqueScores[mid] > score && uniqueScores[mid + 1] < score) {
          return mid + 2;
      }
      else if (uniqueScores[mid] < score && uniqueScores[mid - 1 > score]) {
          return mid - 1;
      }
      // recursion
      if (score < uniqueScores[mid]) {
          start = mid + 1;
      } else {
          end = mid - 1;
      }
  }
}

function climbingLeaderboard(scores, alice) {
  let result = [];
  let uniqueScores = [...new Set(scores)];
  for (let score of alice) {
      // since uniqueScores is already sorted, uniqueScores[0]
      // will always be the maximum possible score
      if (score >= uniqueScores[0]) {
          result.push(1);

      } 
      // if one of alice's scores is lower than the lowest possible
      // score in uniqueScores, increase uniqueScores by 1 to accomodate
      // the new value
      else if (score < uniqueScores[uniqueScores.length - 1]) {
          result.push(uniqueScores.length + 1);
      } 
      else {
          result.push(rankBinarySearch(score, uniqueScores));
      }
  }
  return result;
}