function permAlone(str) {
  let start = new Date();
  let perms = 0;
  let arr = str.split("")
  let findPerm = (arr) => {
    let variations = 0
    if (arr.length = 1) return


  }
  let variations = findPerm(arr)
  console.log(variations)
  console.log('time: ', new Date() - start)
  return perms;
}

console.log(permAlone('aab'));