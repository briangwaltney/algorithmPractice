//Surprisingly there are only three numbers that can be written 
//as the sum of fourth powers of their digits:

//1634 = 1^4 + 6^4 + 3^4 + 4^4
//8208 = 8^4 + 2^4 + 0^4 + 8^4
//9474 = 9^4 + 4^4 + 7^4 + 4^4

//As 1 = 1^4 is not a sum it is not included.

//The sum of these numbers is 1634 + 8208 + 9474 = 19316.

//Find the sum of all the numbers that can be written as the sum of n powers of their digits


const tester = (n) => {
  let start = new Date();
  let total = 0
  let numbers = [0]
  for (let i = 2; i <= 195000; i++) {
    let str = i.toString().split('')
    let sum = 0
    for (let j = 0; j < str.length; j++) {
      sum += parseInt(str[j]) ** n
    }
    if (sum === i) numbers.push(i)
  }
  total = numbers.reduce((total, curr) => total += curr)
  console.log(numbers)
  console.log('time:', new Date() - start, 'milliseconds')
  return total
}

console.log(tester(5));
