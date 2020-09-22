function maxProfits(stocks) {
  if (stocks.length < 2) return;
  let minPrice = stocks[0];
  let maxProfit = stocks[1] - stocks[0];
  for (let i = 1; i < stocks.length; i++) {
    let current = stocks[i];
    let potentialProfit = current - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
    minPrice = Math.min(current, minPrice)
  }
  return maxProfit;
}