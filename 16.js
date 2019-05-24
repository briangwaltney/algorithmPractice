//2**15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
//What is the sum of the digits of the number 2exponent?

const tester = (n) => {
  let start = new Date();
  let product = [2]
  while (n - 1 > 0) {
    for (let i = 0; i < product.length; i++) {
      product[i] *= 2
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

console.log(tester(1000));
