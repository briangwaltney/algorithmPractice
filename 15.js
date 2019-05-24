
//How many such routes are there through a given gridSize?
//the only possible movements are down and right

//alternative solution would be to construct pascals triangle and find
//the max on later n*2+1

const tester = (n) => {
  let start = new Date();
  let grid = []

  //creates grid
  for (let i = 0; i <= n; i++) {
    let col = []
    for (let j = 0; j <= n; j++) {
      col.push(0)
    }
    grid.push(col)
  }
  //fills edges
  for (let i = 0; i < n; i++) {
    grid[i][n] = 1
    grid[n][i] = 1
  }
  //fills rest
  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      grid[i][j] = grid[i][j + 1] + grid[i + 1][j]
    }
  }

  //displays grid
  // for (let i = 0; i <= n; i++) {
  //   console.log(grid[i])
  // }

  console.log('time:', new Date() - start)
  return grid[0][0]
}

console.log(tester(5));
