// Problem Domain: https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

function activityNotifications(expenditure, d) {
  let trailingExpenditures = expenditure.slice(0, d);
  console.log('trailingExpenditures', trailingExpenditures)
  let medianTrailingExpenditure = null;
  if (trailingExpenditures.length % 2 === 0) { // if arr is even length, get median of 2 most middle elements
      medianTrailingExpenditure = 
          (trailingExpenditures[trailingExpenditures.length / 2] +
          trailingExpenditures[trailingExpenditures.length / 2 - 1]) / 2;
  } else {
      medianTrailingExpenditure =  // if arr is odd length, grab the middle most element
          trailingExpenditures[Math.floor(trailingExpenditures.length / 2)]
  }
  console.log('medianTrailingExpenditure', medianTrailingExpenditure)
  for (let i = 0; i < expenditure.length; i++) {
      
  }
}