//find sum of all the multiples of 3 or 5 below the provided number
const problemOne = (num) => {
  const factorTotal = (factor) => {
    let total = 0
    let i = factor
    while (i < num) {
      total += i
      i += factor
    }
    return total
  }
  return factorTotal(3) + factorTotal(5) - factorTotal(15)
}

console.log(problemOne(1000));