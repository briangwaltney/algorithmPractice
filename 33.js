//The fraction 49/98 is a curious fraction, 
//as an inexperienced mathematician in attempting 
//to simplify it may incorrectly believe that 49/98 = 4/8, 
//which is correct, is obtained by cancelling the 9s.

//We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

//There are exactly four non-trivial examples 
//of this type of fraction, less than one in value, 
//and containing two digits in the numerator and denominator.

//If the product of these four fractions is 
//given in its lowest common terms, find the value of the denominator.

//Surprisingly there are only three numbers that can be written 
//as the sum of fourth powers of their digits:

//1634 = 1^4 + 6^4 + 3^4 + 4^4
//8208 = 8^4 + 2^4 + 0^4 + 8^4
//9474 = 9^4 + 4^4 + 7^4 + 4^4

//As 1 = 1^4 is not a sum it is not included.

//The sum of these numbers is 1634 + 8208 + 9474 = 19316.

//Find the sum of all the numbers that can be written as the 
//sum of n powers of their digits


const tester = () => {
  let start = new Date();
  for (let i = 11; i <= 99; i++) {
    for (let j = 11; j <= 99; j++) {

    }
  }
  console.log('time:', new Date() - start, 'milliseconds')
  return
}

console.log(tester());
