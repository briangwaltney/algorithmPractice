//By considering the terms in the Fibonacci sequence 
//whose values do not exceed nth term, 
//find the sum of the even-valued terms.
const problemTwo = (num) => {
  let fibs = [1, 2]
  let total = 2
  while (fibs.length <= num) {
    let next = fibs[fibs.length - 1] + fibs[fibs.length - 2]
    if (next % 2 === 0) total += next
    fibs.push(next)
  }
  return total
}

console.log(problemTwo(43));