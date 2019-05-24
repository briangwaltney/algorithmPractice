// given a string, search an array of strings 




const tester = (n) => {
  let start = new Date();

  const strings = [
    'dear',
    'deet',
    'steve',
    'wrong',
    'right',
    'black'
  ]

  let matches = []
  strings.map(string => {
    if (string.substr(0, n.length) === n) matches.push(string)
  })

  console.log('time:', new Date() - start)
  return matches
}

console.log(tester('de'));
