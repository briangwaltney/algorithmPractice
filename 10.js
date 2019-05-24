function primeSummation(n) {
  // Good luck!
  let start = new Date();
  let primes = [2]
  let total = 2
  let i = 3
  while (i < n) {
    let max = Math.ceil(Math.sqrt(i))
    let isPrime = true
    for (let j = 0; primes[j] <= max; j++) {
      if (i % primes[j] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime === true) {
      primes.push(i)
      total += i
    }

    i += 2
  }
  console.log('time:', new Date() - start)
  return (total)
}

console.log(primeSummation(140759));