// Problem Domain: https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

function activityNotifications(expenditure, d) {
  // get the trailingExpenditures
  let trailingExpenditures = expenditure.slice(0, d);
  // get all other expenditures, not include trailingExpenditures
  let expenditures = expenditure.slice(trailingExpenditures.length);
  // instantiate the medianTrailingExpediture
  let medianTrailingExpenditure = null;
  // determine if trailingExpenditures is of even length,
  // if it is, the medianTrailingExpenditure will be calculated
  // by grabbing the two middle most elements and getting their average
  let notificationsCount = 0;
  if (trailingExpenditures.length % 2 === 0) {
      medianTrailingExpenditure = 
          (trailingExpenditures[trailingExpenditures.length / 2] +
          trailingExpenditures[trailingExpenditures.length / 2 - 1]) / 2;
  } else {
      medianTrailingExpenditure = 
          trailingExpenditures[Math.floor(trailingExpenditures.length / 2)]
  }
  for (let i = 0; i < expenditures.length; i++) {
    if (expenditures[i] % medianTrailingExpenditure === 0) {
      notificationsCount++;
    }
  }
  return notificationsCount;
}