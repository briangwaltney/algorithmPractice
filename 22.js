//Using names, an array containing over five-thousand first names, 
//begin by sorting it into alphabetical order. 
//Then working out the alphabetical value for each name, 
//multiply this value by its alphabetical position in the list to obtain a name score.

//For example, when the list is sorted into alphabetical order, 
//COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. 
//So, COLIN would obtain a score of 938 × 53 = 49714.

//What is the total of all the name scores in the file?

const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];

const tester = (n) => {
  let start = new Date();

  let sorted = n.sort((a, b) => a > b)
  let runningTotal = 0
  for (let i = 0; i < sorted.length; i++) {
    let total = 0
    const element = sorted[i];
    let arr = element.split("")
    for (let j = 0; j < arr.length; j++) {
      const element = arr[j];
      total += element.charCodeAt(0) - 64
    }
    runningTotal += total * (i + 1)
  }
  console.log('time:', new Date() - start)
  return runningTotal
}

console.log(tester(test1));
