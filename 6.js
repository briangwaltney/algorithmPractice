//Find the difference between the sum of the squares 
//of the first n natural numbers and the square of the sum.
const tester = (n) => {
  let sumOfSquares = 0
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i;
    sumOfSquares += i ** 2
  }
  let squareOfSums = sum ** 2
  return squareOfSums - sumOfSquares
}

console.log(tester(10));