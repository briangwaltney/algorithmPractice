//Which starting number, under the given limit, 
//produces the longest chain?
//n → n/2 (n is even)
//n → 3n + 1 (n is odd)

const tester = (n) => {
  let start = new Date();
  let max = [0, 0]
  for (let i = n - 1; i > 1; i--) {
    let test = i
    let testArr = []
    while (test > 1) {
      testArr.push(test)
      if (test % 2 === 0) {
        test = test / 2
      } else {
        test = 3 * test + 1
      }
    }
    if (testArr.length > max[1]) max = [i, testArr.length]
    console.log(i, testArr.length)
  }
  console.log('time:', new Date() - start)
  return max[0]

}

console.log(tester(50));
