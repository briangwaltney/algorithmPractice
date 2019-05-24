//What is the largest prime factor of the given number?
const problem3 = (num) => {
  let primes = [2]
  let test = 3
  while (primes[primes.length - 1] < num) {
    let isPrime = true
    for (let i = 0; i < primes.length; i++) {
      //if (num % primes[i] === 0) num /= primes[i]
      if (test % primes[i] === 0) {
        isPrime = false;
        break
      }
    }
    if (isPrime === true) primes.push(test)
    test += 2
  }
  let max = 1
  primes.map(prime => {
    if (num % prime === 0 && prime > max) max = prime
  })
  return max
}

console.log(problem3(13195));