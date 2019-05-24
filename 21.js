// Let d(n) be defined as the sum of proper divisors of n 
//(numbers less than n which divide evenly into n).

// If d(a) = b and d(b) = a, where a ≠ b, 
//then a and b are an amicable pair and each of a and b are called amicable numbers.

// For example, the proper divisors of 220 are 
//1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; 
//therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 
//and 142; so d(284) = 220.

// Evaluate the sum of all the amicable numbers under n.


const tester = (n) => {
  let start = new Date();
  let amicables = [0]
  const sumFactors = (number) => {
    let factors = [0]
    let max = Math.sqrt(number)
    for (let i = 1; i <= max; i++) {
      if (number % i === 0) {
        if (!factors.includes(i))
          factors.push(i)
        if (!factors.includes(number / i))
          factors.push(number / i)
        max = number / i
      }
    }
    factors.sort((a, b) => a - b)
    factors.pop()
    return factors.reduce((prev, curr) => prev += curr)
  }
  for (let i = n; i > 1; i--) {
    let num1 = sumFactors(i)
    let num2 = sumFactors(num1)
    if (i === num2 && i !== num1 && !amicables.includes(i)) {

      amicables.push(num1, num2)
    }
  }

  let total = amicables.reduce((prev, curr) => prev += curr)


  console.log('time:', new Date() - start)
  return total
}

console.log(tester(100000));
