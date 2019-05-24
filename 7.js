//What is the nth prime number?
const tester = (n) => {
  let primes = [2]
  let test = 3
  while (primes.length < n) {
    let isPrime = true
    let max = (Math.sqrt(test))

    for (let i = 0; primes[i] <= max; i++) {
      if (test % primes[i] === 0) {
        isPrime = false
        break
      }
    }
    if (isPrime) primes.push(test)
    test += 2
  }
  return primes[primes.length - 1]
}

console.log(tester(10001));