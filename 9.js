//There exists exactly one Pythagorean triplet for which a + b + c = 1000. 
//Find the product abc such that a + b + c = n.
const tester = (n) => {

  let product = 0
  for (let i = 1; i <= n - 2; i++) {

    for (let j = 1; j < n - i - j; j++) {

      let k = n - i - j
      if (i ** 2 + j ** 2 === k ** 2) {
        product = i * j * k
        break
      }
    }
    if (product) break
  }
  return product
}

console.log(tester(1000));