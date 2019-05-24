//finds all prime numbers less than n

const getPrimes = (n) => {
  let start = new Date();

  let primes = [2]
  for (let i = 3; i <= n; i += 2) {
    let isPrime = true
    for (let j = 0; j < primes.length; j++) {
      if (i % primes[j] === 0) {
        isPrime = false
        break
      }
    }
    if (isPrime === true) primes.push(i)
  }
  console.log('loop time:', new Date() - start)
  return primes.length
}

console.log(getPrimes(10000));


const sievePrimes = (n) => {
  let start = new Date();
  let primes = Array.apply(null, { length: n - 1 }).map((n, i) => i + 2)
  for (let i = 0; i < primes.length; i++) {
    primes = primes.filter(num => num % primes[i] !== 0 || num === primes[i])
  }
  console.log('sieve time:', new Date() - start)
  return primes.length
}

console.log(sievePrimes(10000));

