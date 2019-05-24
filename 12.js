//WWhat is the value of the first triangle number to have over n divisors?
//The sequence of triangle numbers is generated by adding the natural numbers. 
//So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28.

const tester = (n) => {
  let num = 1
  let triangle = 0
  let length = 0
  for (num = 1; length < n; num++) {
    triangle += num
    let max = triangle
    let factors = [1, triangle]
    for (let i = 2; i <= max; i++) {
      if (triangle % i === 0) {
        if (!factors.includes(i)) factors.push(i)
        if (!factors.includes(triangle / i)) factors.push(triangle / i)
        max = triangle / i
      }
    }
    length = factors.length
  }
  return triangle
}

console.log(tester(23));
