//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
const problem5 = (num) => {
  let lcm = 1
  const findGcd = (n1, n2) => {
    if (n2 === 0) return n1
    return findGcd(n2, n1 % n2)
  }
  for (let i = 2; i <= num; i++) {
    lcm = (lcm * i) / (findGcd(lcm, i))
  }
  return lcm
}

console.log(problem5(20));