function BuySellStockBrute(arr) {
  // TC - 0(n2) SC - 0(1)
  let n = arr.length;
  let maxProfit = 0;
  for (i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[i]) {
        console.log(arr[i]);

        maxProfit = Math.max(arr[j] - arr[i], maxProfit);
      }
    }
  }

  return maxProfit;
}
function BuySellStock(arr) {
  // TC - 0(n) SC - 0(1)

  let n = arr.length;

  let min = arr[0];
  let profit = 0;
  for (i = 1; i < n; i++) {
    let cost = arr[i] - min;
    profit = Math.max(profit, cost);
    min = Math.min(min, arr[i]);
  }

  return profit;
}

function BuySellStockOptimal(prices) {
  // TC - 0(n) SC - 0(1)

  let maxProfit = 0;
  let minPrice = Infinity;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;
}

function BuySellStockmultipleOptimal(prices) {
  // TC - 0(n) SC - 0(1)
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (arr[i] > arr[i - 1]) {
      maxProfit += arr[i] - arr[i - 1];
    }
  }

  return maxProfit;
}

function BuySellStockCooldownOptimal(prices) {
  // TC - 0(n) SC - 0(1)
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (arr[i] > arr[i - 1]) {
      maxProfit += arr[i] - arr[i - 1];
    }
  }

  return maxProfit;
}

let arr = [7, 1, 5, 3, 6, 4];
console.log("reso", BuySellStockCooldownOptimal(arr));
