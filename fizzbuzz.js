let fizzbuzz = (limit) => {

  for (let i = 3; i <= limit; i++) {
    if (i % 15 === 0) {
      console.log(i, 'fizzbuzz')
    } else if (i % 5 === 0) {
      console.log(i, 'buzz')
    } else if (i % 3 === 0) {
      console.log(i, 'fizz')
    }
  }

  return
}
console.time()
fizzbuzz(100)
console.timeEnd()

