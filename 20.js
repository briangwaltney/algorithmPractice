// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits n!

const tester = (n) => {
  let start = new Date();
  let product = [1]
  while (n > 0) {
    for (let i = 0; i < product.length; i++) {
      product[i] *= n
    }
    for (let i = 0; i < product.length; i++) {
      if (product[i] > 9) {
        if (i + 1 > product.length - 1) {
          product.push(Math.floor((product[i] / 10)))
        } else {
          product[i + 1] += Math.floor((product[i] / 10))
        }
        product[i] = product[i] % 10
      }
    }
    n--
  }
  let sum = product.reduce((prev, cur) => prev += cur)
  console.log('time:', new Date() - start)
  return sum
}

console.log(tester(100));
