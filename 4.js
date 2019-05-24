//Find the largest palindrome made from the product of two n-digit numbers.


//incomplete answer
const problem4 = (num) => {
  let max = 10 ** num - 1
  let min = 10 ** (num - 1)
  let upperLimit = max * min
  let right = upperLimit % (max + 1)
  let left = upperLimit / (max + 1) * 10

  console.log(upperLimit, left, right)
  let res = [0, 0, 0]
  let count = 0
  for (let i = max; i >= min; i--) {
    count++
    if (i * i < res[0]) break
    for (let j = i; j >= min; j--) {
      count++
      if (i * j < res[0]) break
      let test = (i * j).toString().split('')
      let rev = [...test].reverse()
      if (test.join('') === rev.join('') && res[0] < i * j) {
        res = [i * j, i, j]
      }
    }
  }
  console.log(count)
  return res
}

console.log(problem4(4));

//works, but slow
const problem4slow = (num) => {
  let max = 10 ** num - 1
  let min = 10 ** (num - 1)
  let res = [0, 0, 0]
  let count = 0
  for (let i = max; i >= min; i--) {
    count++
    if (i * i < res[0]) break
    for (let j = i; j >= min; j--) {
      count++
      if (i * j < res[0]) break
      let test = (i * j).toString().split('')
      let rev = [...test].reverse()
      if (test.join('') === rev.join('') && res[0] < i * j) {
        res = [i * j, i, j]
      }
    }
  }
  console.log(count)
  return res[0] % 1337
}

//console.log(problem4slow(5));