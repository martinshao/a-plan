/****************************** ******************************/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

  const len = prices.length
  let profit = 0

  for (let i = 0; i < len - 1; i++) {
    const buyPrice = prices[i]
    for (let j = i + 1; j < len; j++) {
      const sellPrice = prices[j]
      profit = Math.max(profit, sellPrice - buyPrice)
    }

  }

  return profit
};

const prices = [7,6,4,3,1]

console.info(maxProfit(prices))

/****************************** ******************************/

/****************************** ******************************/
let maxProfit = function(prices) {
  let max = 0, minprice = prices[0]
  for(let i = 1; i < prices.length; i++) {
      minprice = Math.min(prices[i], minprice)
      max = Math.max(max, prices[i] - minprice)
  }
  return max
}
/****************************** ******************************/