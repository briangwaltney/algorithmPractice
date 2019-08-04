//Sudoku solver
const _ = require("lodash");

const easyObj = [
  { value: 5, x: 1, y: 1, options: [] },
  { value: 4, x: 2, y: 1, options: [] },
  { value: 3, x: 3, y: 1, options: [] },
  { value: 9, x: 4, y: 1, options: [] },
  { value: 0, x: 5, y: 1, options: [] },
  { value: 0, x: 6, y: 1, options: [] },
  { value: 0, x: 7, y: 1, options: [] },
  { value: 0, x: 8, y: 1, options: [] },
  { value: 0, x: 9, y: 1, options: [] },
  { value: 0, x: 1, y: 2, options: [] },
  { value: 2, x: 2, y: 2, options: [] },
  { value: 7, x: 3, y: 2, options: [] },
  { value: 0, x: 4, y: 2, options: [] },
  { value: 5, x: 5, y: 2, options: [] },
  { value: 1, x: 6, y: 2, options: [] },
  { value: 0, x: 7, y: 2, options: [] },
  { value: 0, x: 8, y: 2, options: [] },
  { value: 0, x: 9, y: 2, options: [] },
  { value: 0, x: 1, y: 3, options: [] },
  { value: 0, x: 2, y: 3, options: [] },
  { value: 8, x: 3, y: 3, options: [] },
  { value: 0, x: 4, y: 3, options: [] },
  { value: 7, x: 5, y: 3, options: [] },
  { value: 0, x: 6, y: 3, options: [] },
  { value: 2, x: 7, y: 3, options: [] },
  { value: 5, x: 8, y: 3, options: [] },
  { value: 6, x: 9, y: 3, options: [] },
  { value: 0, x: 1, y: 4, options: [] },
  { value: 0, x: 2, y: 4, options: [] },
  { value: 9, x: 3, y: 4, options: [] },
  { value: 5, x: 4, y: 4, options: [] },
  { value: 6, x: 5, y: 4, options: [] },
  { value: 0, x: 6, y: 4, options: [] },
  { value: 4, x: 7, y: 4, options: [] },
  { value: 0, x: 8, y: 4, options: [] },
  { value: 0, x: 9, y: 4, options: [] },
  { value: 0, x: 1, y: 5, options: [] },
  { value: 8, x: 2, y: 5, options: [] },
  { value: 0, x: 3, y: 5, options: [] },
  { value: 3, x: 4, y: 5, options: [] },
  { value: 0, x: 5, y: 5, options: [] },
  { value: 2, x: 6, y: 5, options: [] },
  { value: 9, x: 7, y: 5, options: [] },
  { value: 1, x: 8, y: 5, options: [] },
  { value: 5, x: 9, y: 5, options: [] },
  { value: 0, x: 1, y: 6, options: [] },
  { value: 0, x: 2, y: 6, options: [] },
  { value: 2, x: 3, y: 6, options: [] },
  { value: 1, x: 4, y: 6, options: [] },
  { value: 0, x: 5, y: 6, options: [] },
  { value: 7, x: 6, y: 6, options: [] },
  { value: 6, x: 7, y: 6, options: [] },
  { value: 8, x: 8, y: 6, options: [] },
  { value: 0, x: 9, y: 6, options: [] },
  { value: 0, x: 1, y: 7, options: [] },
  { value: 3, x: 2, y: 7, options: [] },
  { value: 0, x: 3, y: 7, options: [] },
  { value: 0, x: 4, y: 7, options: [] },
  { value: 0, x: 5, y: 7, options: [] },
  { value: 9, x: 6, y: 7, options: [] },
  { value: 0, x: 7, y: 7, options: [] },
  { value: 6, x: 8, y: 7, options: [] },
  { value: 0, x: 9, y: 7, options: [] },
  { value: 2, x: 1, y: 8, options: [] },
  { value: 0, x: 2, y: 8, options: [] },
  { value: 0, x: 3, y: 8, options: [] },
  { value: 7, x: 4, y: 8, options: [] },
  { value: 0, x: 5, y: 8, options: [] },
  { value: 0, x: 6, y: 8, options: [] },
  { value: 0, x: 7, y: 8, options: [] },
  { value: 9, x: 8, y: 8, options: [] },
  { value: 8, x: 9, y: 8, options: [] },
  { value: 0, x: 1, y: 9, options: [] },
  { value: 0, x: 2, y: 9, options: [] },
  { value: 4, x: 3, y: 9, options: [] },
  { value: 0, x: 4, y: 9, options: [] },
  { value: 8, x: 5, y: 9, options: [] },
  { value: 5, x: 6, y: 9, options: [] },
  { value: 0, x: 7, y: 9, options: [] },
  { value: 3, x: 8, y: 9, options: [] },
  { value: 0, x: 9, y: 9, options: [] }
];

const easyObj2 = [
  { value: 5, x: 1, y: 1, options: [] },
  { value: 4, x: 2, y: 1, options: [] },
  { value: 3, x: 3, y: 1, options: [] },
  { value: 9, x: 4, y: 1, options: [] },
  { value: 0, x: 5, y: 1, options: [] },
  { value: 0, x: 6, y: 1, options: [] },
  { value: 0, x: 7, y: 1, options: [] },
  { value: 0, x: 8, y: 1, options: [] },
  { value: 0, x: 9, y: 1, options: [] },
  { value: 0, x: 1, y: 2, options: [] },
  { value: 2, x: 2, y: 2, options: [] },
  { value: 7, x: 3, y: 2, options: [] },
  { value: 0, x: 4, y: 2, options: [] },
  { value: 5, x: 5, y: 2, options: [] },
  { value: 1, x: 6, y: 2, options: [] },
  { value: 03, x: 7, y: 2, options: [] },
  { value: 04, x: 8, y: 2, options: [] },
  { value: 09, x: 9, y: 2, options: [] },
  { value: 0, x: 1, y: 3, options: [] },
  { value: 0, x: 2, y: 3, options: [] },
  { value: 8, x: 3, y: 3, options: [] },
  { value: 04, x: 4, y: 3, options: [] },
  { value: 7, x: 5, y: 3, options: [] },
  { value: 03, x: 6, y: 3, options: [] },
  { value: 2, x: 7, y: 3, options: [] },
  { value: 5, x: 8, y: 3, options: [] },
  { value: 6, x: 9, y: 3, options: [] },
  { value: 03, x: 1, y: 4, options: [] },
  { value: 0, x: 2, y: 4, options: [] },
  { value: 9, x: 3, y: 4, options: [] },
  { value: 5, x: 4, y: 4, options: [] },
  { value: 6, x: 5, y: 4, options: [] },
  { value: 0, x: 6, y: 4, options: [] },
  { value: 4, x: 7, y: 4, options: [] },
  { value: 02, x: 8, y: 4, options: [] },
  { value: 0, x: 9, y: 4, options: [] },
  { value: 0, x: 1, y: 5, options: [] },
  { value: 8, x: 2, y: 5, options: [] },
  { value: 06, x: 3, y: 5, options: [] },
  { value: 3, x: 4, y: 5, options: [] },
  { value: 04, x: 5, y: 5, options: [] },
  { value: 2, x: 6, y: 5, options: [] },
  { value: 9, x: 7, y: 5, options: [] },
  { value: 1, x: 8, y: 5, options: [] },
  { value: 5, x: 9, y: 5, options: [] },
  { value: 04, x: 1, y: 6, options: [] },
  { value: 05, x: 2, y: 6, options: [] },
  { value: 2, x: 3, y: 6, options: [] },
  { value: 1, x: 4, y: 6, options: [] },
  { value: 09, x: 5, y: 6, options: [] },
  { value: 7, x: 6, y: 6, options: [] },
  { value: 6, x: 7, y: 6, options: [] },
  { value: 8, x: 8, y: 6, options: [] },
  { value: 03, x: 9, y: 6, options: [] },
  { value: 0, x: 1, y: 7, options: [] },
  { value: 3, x: 2, y: 7, options: [] },
  { value: 05, x: 3, y: 7, options: [] },
  { value: 02, x: 4, y: 7, options: [] },
  { value: 0, x: 5, y: 7, options: [] },
  { value: 9, x: 6, y: 7, options: [] },
  { value: 0, x: 7, y: 7, options: [] },
  { value: 6, x: 8, y: 7, options: [] },
  { value: 04, x: 9, y: 7, options: [] },
  { value: 2, x: 1, y: 8, options: [] },
  { value: 06, x: 2, y: 8, options: [] },
  { value: 0, x: 3, y: 8, options: [] },
  { value: 7, x: 4, y: 8, options: [] },
  { value: 03, x: 5, y: 8, options: [] },
  { value: 04, x: 6, y: 8, options: [] },
  { value: 05, x: 7, y: 8, options: [] },
  { value: 9, x: 8, y: 8, options: [] },
  { value: 8, x: 9, y: 8, options: [] },
  { value: 09, x: 1, y: 9, options: [] },
  { value: 0, x: 2, y: 9, options: [] },
  { value: 4, x: 3, y: 9, options: [] },
  { value: 06, x: 4, y: 9, options: [] },
  { value: 8, x: 5, y: 9, options: [] },
  { value: 5, x: 6, y: 9, options: [] },
  { value: 0, x: 7, y: 9, options: [] },
  { value: 3, x: 8, y: 9, options: [] },
  { value: 02, x: 9, y: 9, options: [] }
];

const hard1 = [
  [[0, 0, 0], [5, 9, 0], [6, 7, 2]],
  [[0, 1, 0], [0, 0, 6], [0, 4, 0]],
  [[0, 0, 0], [0, 0, 0], [0, 1, 0]],
  [[4, 0, 8], [0, 0, 0], [0, 5, 0]],
  [[0, 0, 3], [0, 6, 0], [4, 0, 0]],
  [[0, 6, 0], [0, 0, 0], [8, 0, 3]],
  [[0, 8, 0], [0, 0, 0], [0, 0, 0]],
  [[0, 2, 0], [9, 0, 0], [0, 7, 0]],
  [[1, 5, 7], [0, 4, 6], [0, 0, 0]]
];

const printPuzzle = puzzle => {
  console.log("Puzzle Starting");
  let i = 1;
  while (i < 10) {
    let row = [];
    puzzle.map(position => {
      if (position.y === i) return row.push(position.value);
    });
    console.log(row);
    i++;
  }
  console.log("Puzzle Ending");
};
const findIndividualOption = (x, y, puzzle) => {
  let cube = [];
  let vert = [];
  let horiz = [];
  const key = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let xLimit = Math.ceil(x / 3);
  let yLimit = Math.ceil(y / 3);
  puzzle.map(item => {
    if (Math.ceil(item.x / 3) === xLimit && Math.ceil(item.y / 3) === yLimit)
      cube.push(item.value);
    if (item.x === x) vert.push(item.value);
    if (item.y === y) horiz.push(item.value);
  });
  let options = key.filter(
    number =>
      !cube.includes(number) &&
      !horiz.includes(number) &&
      !vert.includes(number)
  );
  return options;
};

const findOptions = puzzle => {
  let newPuzz = puzzle.map(item => {
    if (item.value === 0) {
      item.options = findIndividualOption(item.x, item.y, puzzle);
    }
    if (item.options.length === 1) {
      item.value = item.options[0];
      item.options = [];
    }
    return item;
  });
  return newPuzz;
};

const makeGuess = puzzle => {
  printPuzzle(puzzle);
  for (let i = 0; i < puzzle.length; i++) {
    //console.log(i);
    printPuzzle(puzzle);
    let element = puzzle[i];
    if (element.value === 0) {
      let options = findIndividualOption(element.x, element.y, puzzle);
      console.log(options, element);
      if (options.length === 0) {
        return false;
      } else if (options.length === 1) {
        element.value = options[0];
        element.options = [];
      } else {
        for (let j = 0; j < options.length; j++) {
          let guess = true;
          element.value = options[j];
          guess = makeGuess(puzzle);
          if (guess === true) return puzzle;
        }
      }
    }
  }
  return puzzle;
};

const tester = puzzle => {
  printPuzzle(puzzle);

  //findOptions(puzzle);
  let newPuzz = makeGuess(puzzle);
  //if (newPuzz) printPuzzle(newPuzz);
  console.log(newPuzz);

  return;
};

console.time("Run Time");
tester(easyObj2);
console.timeEnd("Run Time");
