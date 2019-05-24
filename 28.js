//Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

//21 22 23 24 25
//20  7  8  9 10
//19  6  1  2 11
//18  5  4  3 12
//17 16 15 14 13

//It can be verified that the sum of the numbers on the diagonals is 101.

//What is the sum of the numbers on the diagonals in a n by n spiral formed in the same way?

const tester = (n) => {
  let start = new Date();
  let total = 1
  if (n % 2 === 0) total = 0
  while (n > 1) {
    total += n * n
    let num = n * n
    for (let i = 1; i <= 3; i++) {
      total += num - (n - 1)
      num = num - (n - 1)
    }
    n -= 2
  }
  console.log('time:', new Date() - start)
  return total
}

console.log(tester(100));
