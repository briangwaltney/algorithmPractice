//Sudoku solver
const _ = require('lodash')
const blank = [
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
]

const easy1 = [
  [
    [4, 6, 8],
    [0, 9, 0],
    [1, 2, 0]
  ],
  [
    [0, 2, 0],
    [0, 8, 6],
    [5, 3, 0]
  ],
  [
    [0, 9, 0],
    [0, 0, 2],
    [0, 0, 0]
  ],
  [
    [0, 0, 9],
    [0, 0, 0],
    [6, 1, 0]
  ],
  [
    [3, 0, 0],
    [0, 0, 0],
    [0, 0, 2]
  ],
  [
    [0, 6, 8],
    [0, 0, 0],
    [4, 0, 0]
  ],
  [
    [0, 0, 0],
    [7, 0, 0],
    [0, 3, 0]
  ],
  [
    [0, 1, 8],
    [2, 9, 0],
    [0, 5, 0]
  ],
  [
    [0, 3, 5],
    [0, 8, 0],
    [9, 7, 1]
  ],
]

const hard1 = [
  [
    [0, 0, 0],
    [5, 9, 0],
    [6, 7, 2]
  ],
  [
    [0, 1, 0],
    [0, 0, 6],
    [0, 4, 0]
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 1, 0]
  ],
  [
    [4, 0, 8],
    [0, 0, 0],
    [0, 5, 0]
  ],
  [
    [0, 0, 3],
    [0, 6, 0],
    [4, 0, 0]
  ],
  [
    [0, 6, 0],
    [0, 0, 0],
    [8, 0, 3]
  ],
  [
    [0, 8, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  [
    [0, 2, 0],
    [9, 0, 0],
    [0, 7, 0]
  ],
  [
    [1, 5, 7],
    [0, 4, 6],
    [0, 0, 0]
  ],
]



const tester = (puzzle) => {
  let start = new Date();

  const printPuzzle = puzzle => {

    for (let i = 0; i <= 6; i += 3) {
      for (let j = 0; j < 3; j++) {
        console.log(puzzle[i][j], 'Vert', puzzle[i + 1][j], 'Vert', puzzle[i + 2][j])
      }
      console.log('-----------------------------------')
    }
  }

  let flattenPuzzle = puzz => {
    let flatPuzzle = [].concat.apply([], puzzle)
    return [].concat.apply([], flatPuzzle)
  }

  let findMissing = (arr) => {
    let flat = buildCube(arr)
    let missing = []
    for (let i = 1; i <= 9; i++) {
      if (!flat.includes(i)) missing.push(i)
    }
    return missing
  }

  let buildCube = (arr) => {
    return [].concat.apply([], arr)
  }

  let buildHoriz = (arr, x, y) => {
    let horz = []
    let row = Math.floor(x / 3) * 3
    for (let i = row; i < row + 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!Array.isArray(arr[i][y][j]))
          horz.push(arr[i][y][j])
      }
    }
    return horz
  }

  let buildVert = (arr, x, z) => {
    let vert = []
    while (x > 2) {
      x -= 3
    }
    for (let i = x; i <= x + 6; i = i + 3) {
      for (let j = 0; j < 3; j++) {
        if (!Array.isArray(arr[i][j][z]))
          vert.push(arr[i][j][z])
      }
    }
    return vert
  }

  const setOptions = (puzz) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          if (puzz[i][j][k] === 0) {
            let missing1 = findMissing(puzz[i])
            let horz = buildHoriz(puzz, i, j)
            let missing2 = findMissing(horz)
            let vert = buildVert(puzz, i, k)
            let missing3 = findMissing(vert)
            let options = missing1.filter(value => missing2.includes(value)).filter(value => missing3.includes(value))
            puzz[i][j][k] = options
          }
        }
      }
    }
    return puzz
  }

  const filterSingles = puzz => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          if (Array.isArray(puzz[i][j][k]) && puzz[i][j][k].length === 1)
            puzz[i][j][k] = puzz[i][j][k][0]
        }
      }
    }
    return puzz
  }

  const filterDoubles = puzz => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          if (Array.isArray(puzz[i][j][k]) && puzz[i][j][k].length === 2) {
            let cube = buildCube(puzz[i]).filter(item => Array.isArray(item))
            if (cube.includes)
              console.log(cube)
          }
        }
      }
    }
    return puzz
  }

  let solution = setOptions(puzzle)
  solution = filterSingles(solution)
  solution = filterDoubles(solution)

  //printPuzzle(solution)
  console.log('time:', new Date() - start, 'milliseconds')
  return 0
}

console.log(tester(easy1));
