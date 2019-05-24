// give n number of steps, and x number of options of how many steps to take,
//find the number of ways up the stair case.

//if n = 4, and x = [1, 2], num ways = 4

const tester = (n, x) => {
  let start = new Date();

  //recursive
  let count = 0
  const findWays = (stairs) => {

    for (let i = 0; i < x.length; i++) {
      if (stairs - x[i] < 0) continue
      if (stairs - x[i] === 0) {
        count++
      } else {
        findWays(stairs - x[i])
      }
    }
    return
  }
  findWays(n)
  console.log('recursion time:', new Date() - start)

  start = new Date();
  //dynamic programming
  let routes = [1]
  for (let i = 1; i <= n; i++) {
    let total = 0
    for (let j = 0; j < x.length; j++) {
      if (i - x[j] >= 0) total += routes[i - x[j]]
    }
    routes[i] = total
  }




  console.log('dynamic time:', new Date() - start)
  console.log(routes[n])
  return count
}

console.log(tester(30, [1, 3, 2]));
