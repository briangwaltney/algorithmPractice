// Given weights and values of n items, put these items in a knapsack of 
//capacity W to get the maximum total value in the knapsack.
// In other words, given two integer arrays val[0..n-1] and wt[0..n-1] 
//which represent values and weights associated with n items respectively. 
//Also given an integer W which represents knapsack capacity, 
//find out the maximum value subset of val[] such that sum of the weights of 
//this subset is smaller than or equal to W. 
//You cannot break an item, either pick the complete item, 
//or don’t pick it (0-1 property).


const tester = (w, x) => {
  let start = new Date();

  let totalValue = 0
  let totalWeight = 0
  for (let i = x[0].length - 1; i >= 0; i--) {
    let quant = Math.floor((w - totalWeight) / x[0][i])
    if (quant > 0) {
      totalValue += quant * x[1][i]
      totalWeight += quant * x[0][i]
    }

  }

  console.log('Run Time:', new Date() - start)
  return totalValue
}

const limit = 1500
const testArr = [[10, 20, 30, 47], [60, 100, 120, 200]]

console.log(tester(limit, testArr));