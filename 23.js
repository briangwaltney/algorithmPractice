// A perfect number is a number for which the sum of its proper 
//divisors is exactly equal to the number. 
//For example, the sum of the proper divisors of 28 would be 
//1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

//Find the sum of all positive integers <= n which cannot be written as 
//the sum of two abundant numbers.


const tester = (n) => {
  let start = new Date();
  let abundants = []
  const isAbundant = (number) => {
    let factors = [0]
    let max = number
    for (let i = 1; i <= max; i++) {
      if (number % i === 0) {
        if (!factors.includes(i)) factors.push(i)
        if (!factors.includes(number / i)) factors.push(number / i)
        max = number / i
      }
    }
    factors.sort((a, b) => a - b)
    factors.pop()
    let total = factors.reduce((prev, curr) => prev += curr)
    if (total > number) return true
    return false
  }
  for (let i = 1; i < n; i++) {
    if (isAbundant(i)) abundants.push(i)
  }
  let abundantSums = []
  for (let i = 0; i < abundants.length; i++) {
    for (let j = i; j < abundants.length; j++) {
      let abundantSum = abundants[i] + abundants[j]
      if (abundantSum > n) break
      if (!abundantSums.includes(abundantSum)) abundantSums.push(abundantSum)
    }
  }
  let nonAbundantSums = 0
  for (let i = 1; i < n; i++) {
    if (!abundantSums.includes(i)) nonAbundantSums += i
  }



  console.log('time:', new Date() - start)
  //console.log(nonAbundantSums)
  return nonAbundantSums
}

console.log(tester(10000));
