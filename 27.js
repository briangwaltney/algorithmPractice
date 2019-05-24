// Euler published the remarkable quadratic formula: n² + n + 41
// It turns out that the formula will produce 40 primes for the consecutive values
// n = 0 to 39. However, when n = 40, 402 + 40 + 41 = 40(40 + 1) + 41 
//is divisible by 41, and certainly when n = 41, 41² + 41 + 41 is 
//clearly divisible by 41.

//Using computers, the incredible formula  n² – 79n + 1601 was discovered, 
//which produces 80 primes for the consecutive values n = 0 to 79. 
//The product of the coefficients, -79 and 1601, is -126479.

// Considering quadratics of the form:

// n² + an + b, where |a| < 1000 and |b| < 1000 where |n| 
//is the modulus/absolute value of n
// e.g. |11| = 11 and |-4| = 4
// Find the product of the coefficients, a and b, 
//for the quadratic expression that produces the maximum number of primes 
//for consecutive values of n, starting with n = 0.



const tester = (n) => {
  let start = new Date();

  let primes = [2]
  for (let i = 3; i <= n ** 2 + 1000 * n + 1000; i += 2) {
    let isPrime = true
    for (let j = 0; j < primes.length; j++) {
      if (i % primes[j] === 0) {
        isPrime = false
        break
      }
    }
    if (isPrime === true) primes.push(i)
  }
  let result = [0, 0, 0]
  for (let a = -1 * n; a <= n; a++) {
    for (let b = -1 * n; b <= n; b++) {
      let x = 0
      while (primes.includes(Math.abs(x ** 2 + a * x + b))) {
        x++
      }
      if (x > result[0]) result = [x, a, b]
    }
  }
  //console.log(primes)
  console.log(result)
  console.log('time:', new Date() - start)
  return result[1] * result[2]
}

console.log(tester(500));
