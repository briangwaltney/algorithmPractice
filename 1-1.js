const test = (n) => {
  let total = 0
  for (let i = 1; i < n; i++) {
    if (i % 2 === 0) {
      total += i
    } else if (i % 3 === 0) {
      total += i
    } else if (i % 7 === 0) {
      total += i
    }
  }
  return total
}

console.log(test(1000))

const multArr = (value, n) => {
  let total = []
  for (let i = 0; i < n; i++) {
    if (i % value === 0)
      total.push(i)
  }
  return total
}

const sumMultArr = (arr, n) => {
  total = []
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let newArr = multArr(element, n)
    total = [...total, ...newArr].sort((a, b) => a - b)
  }
  total = [...new Set(total)]
  return total.reduce((total, next) => total += next)
}

console.log(sumMultArr([3, 5], 1000));