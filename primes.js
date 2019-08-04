//finds all prime numbers less than n

const getPrimes = (n) => {

  let primes = [2]
  for (let i = 3; i <= n; i += 2) {
    let isPrime = true
    for (let j = 0; j < primes.length; j++) {
      if (i % primes[j] === 0) {
        isPrime = false
        break
      }
    }
    if (isPrime) primes.push(i)
  }
  return primes.length
}
console.time()
console.log('loop: ', getPrimes(10000));
console.timeEnd()

const sievePrimes = (n) => {
  let primes = Array.apply(null, { length: n - 1 }).map((n, i) => i + 2)
  for (let i = 0; i < primes.length; i++) {
    primes = primes.filter(num => num % primes[i] !== 0 || num === primes[i])
  }
  return primes.length
}

console.time()
console.log('Sieve: ', sievePrimes(10000));
console.timeEnd()


///
showPrimes = (limit) => {
  const isPrime = (num) => {
    for (let j = 0; j < primes.length; j++)
      if (num % primes[j] === 0)
        return false
    return true
  }

  let primes = [2]
  for (let i = 3; i <= limit; i += 2) {
    if (isPrime(i)) primes.push(i)
  }
  return primes.length
}



console.time()
console.log('Better Loop: ', showPrimes(10000))
console.timeEnd()
