//Sudoku solver
const _ = require("lodash");

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

const blank = [
  { value: 0, x: 1, y: 1, options: [] },
  { value: 0, x: 2, y: 1, options: [] },
  { value: 0, x: 3, y: 1, options: [] },
  { value: 0, x: 4, y: 1, options: [] },
  { value: 0, x: 5, y: 1, options: [] },
  { value: 0, x: 6, y: 1, options: [] },
  { value: 0, x: 7, y: 1, options: [] },
  { value: 0, x: 8, y: 1, options: [] },
  { value: 0, x: 9, y: 1, options: [] },
  { value: 0, x: 1, y: 2, options: [] },
  { value: 0, x: 2, y: 2, options: [] },
  { value: 0, x: 3, y: 2, options: [] },
  { value: 0, x: 4, y: 2, options: [] },
  { value: 0, x: 5, y: 2, options: [] },
  { value: 0, x: 6, y: 2, options: [] },
  { value: 0, x: 7, y: 2, options: [] },
  { value: 0, x: 8, y: 2, options: [] },
  { value: 0, x: 9, y: 2, options: [] },
  { value: 0, x: 1, y: 3, options: [] },
  { value: 0, x: 2, y: 3, options: [] },
  { value: 0, x: 3, y: 3, options: [] },
  { value: 0, x: 4, y: 3, options: [] },
  { value: 0, x: 5, y: 3, options: [] },
  { value: 0, x: 6, y: 3, options: [] },
  { value: 0, x: 7, y: 3, options: [] },
  { value: 0, x: 8, y: 3, options: [] },
  { value: 0, x: 9, y: 3, options: [] },
  { value: 0, x: 1, y: 4, options: [] },
  { value: 0, x: 2, y: 4, options: [] },
  { value: 0, x: 3, y: 4, options: [] },
  { value: 0, x: 4, y: 4, options: [] },
  { value: 0, x: 5, y: 4, options: [] },
  { value: 0, x: 6, y: 4, options: [] },
  { value: 0, x: 7, y: 4, options: [] },
  { value: 0, x: 8, y: 4, options: [] },
  { value: 0, x: 9, y: 4, options: [] },
  { value: 0, x: 1, y: 5, options: [] },
  { value: 0, x: 2, y: 5, options: [] },
  { value: 0, x: 3, y: 5, options: [] },
  { value: 0, x: 4, y: 5, options: [] },
  { value: 0, x: 5, y: 5, options: [] },
  { value: 0, x: 6, y: 5, options: [] },
  { value: 0, x: 7, y: 5, options: [] },
  { value: 0, x: 8, y: 5, options: [] },
  { value: 0, x: 9, y: 5, options: [] },
  { value: 0, x: 1, y: 6, options: [] },
  { value: 0, x: 2, y: 6, options: [] },
  { value: 0, x: 3, y: 6, options: [] },
  { value: 0, x: 4, y: 6, options: [] },
  { value: 0, x: 5, y: 6, options: [] },
  { value: 0, x: 6, y: 6, options: [] },
  { value: 0, x: 7, y: 6, options: [] },
  { value: 0, x: 8, y: 6, options: [] },
  { value: 0, x: 9, y: 6, options: [] },
  { value: 0, x: 1, y: 7, options: [] },
  { value: 0, x: 2, y: 7, options: [] },
  { value: 0, x: 3, y: 7, options: [] },
  { value: 0, x: 4, y: 7, options: [] },
  { value: 0, x: 5, y: 7, options: [] },
  { value: 0, x: 6, y: 7, options: [] },
  { value: 0, x: 7, y: 7, options: [] },
  { value: 0, x: 8, y: 7, options: [] },
  { value: 0, x: 9, y: 7, options: [] },
  { value: 0, x: 1, y: 8, options: [] },
  { value: 0, x: 2, y: 8, options: [] },
  { value: 0, x: 3, y: 8, options: [] },
  { value: 0, x: 4, y: 8, options: [] },
  { value: 0, x: 5, y: 8, options: [] },
  { value: 0, x: 6, y: 8, options: [] },
  { value: 0, x: 7, y: 8, options: [] },
  { value: 0, x: 8, y: 8, options: [] },
  { value: 0, x: 9, y: 8, options: [] },
  { value: 0, x: 1, y: 9, options: [] },
  { value: 0, x: 2, y: 9, options: [] },
  { value: 0, x: 3, y: 9, options: [] },
  { value: 0, x: 4, y: 9, options: [] },
  { value: 0, x: 5, y: 9, options: [] },
  { value: 0, x: 6, y: 9, options: [] },
  { value: 0, x: 7, y: 9, options: [] },
  { value: 0, x: 8, y: 9, options: [] },
  { value: 0, x: 9, y: 9, options: [] }
];

const expert1 = [
  { value: 0, x: 1, y: 1, options: [] },
  { value: 0, x: 2, y: 1, options: [] },
  { value: 0, x: 3, y: 1, options: [] },
  { value: 04, x: 4, y: 1, options: [] },
  { value: 0, x: 5, y: 1, options: [] },
  { value: 01, x: 6, y: 1, options: [] },
  { value: 0, x: 7, y: 1, options: [] },
  { value: 0, x: 8, y: 1, options: [] },
  { value: 0, x: 9, y: 1, options: [] },
  { value: 0, x: 1, y: 2, options: [] },
  { value: 0, x: 2, y: 2, options: [] },
  { value: 08, x: 3, y: 2, options: [] },
  { value: 0, x: 4, y: 2, options: [] },
  { value: 0, x: 5, y: 2, options: [] },
  { value: 0, x: 6, y: 2, options: [] },
  { value: 0, x: 7, y: 2, options: [] },
  { value: 02, x: 8, y: 2, options: [] },
  { value: 0, x: 9, y: 2, options: [] },
  { value: 0, x: 1, y: 3, options: [] },
  { value: 0, x: 2, y: 3, options: [] },
  { value: 0, x: 3, y: 3, options: [] },
  { value: 0, x: 4, y: 3, options: [] },
  { value: 0, x: 5, y: 3, options: [] },
  { value: 0, x: 6, y: 3, options: [] },
  { value: 0, x: 7, y: 3, options: [] },
  { value: 0, x: 8, y: 3, options: [] },
  { value: 0, x: 9, y: 3, options: [] },
  { value: 06, x: 1, y: 4, options: [] },
  { value: 0, x: 2, y: 4, options: [] },
  { value: 0, x: 3, y: 4, options: [] },
  { value: 03, x: 4, y: 4, options: [] },
  { value: 0, x: 5, y: 4, options: [] },
  { value: 0, x: 6, y: 4, options: [] },
  { value: 07, x: 7, y: 4, options: [] },
  { value: 0, x: 8, y: 4, options: [] },
  { value: 04, x: 9, y: 4, options: [] },
  { value: 0, x: 1, y: 5, options: [] },
  { value: 02, x: 2, y: 5, options: [] },
  { value: 0, x: 3, y: 5, options: [] },
  { value: 0, x: 4, y: 5, options: [] },
  { value: 05, x: 5, y: 5, options: [] },
  { value: 0, x: 6, y: 5, options: [] },
  { value: 0, x: 7, y: 5, options: [] },
  { value: 0, x: 8, y: 5, options: [] },
  { value: 0, x: 9, y: 5, options: [] },
  { value: 0, x: 1, y: 6, options: [] },
  { value: 0, x: 2, y: 6, options: [] },
  { value: 0, x: 3, y: 6, options: [] },
  { value: 0, x: 4, y: 6, options: [] },
  { value: 0, x: 5, y: 6, options: [] },
  { value: 0, x: 6, y: 6, options: [] },
  { value: 01, x: 7, y: 6, options: [] },
  { value: 0, x: 8, y: 6, options: [] },
  { value: 0, x: 9, y: 6, options: [] },
  { value: 0, x: 1, y: 7, options: [] },
  { value: 0, x: 2, y: 7, options: [] },
  { value: 0, x: 3, y: 7, options: [] },
  { value: 0, x: 4, y: 7, options: [] },
  { value: 03, x: 5, y: 7, options: [] },
  { value: 0, x: 6, y: 7, options: [] },
  { value: 0, x: 7, y: 7, options: [] },
  { value: 08, x: 8, y: 7, options: [] },
  { value: 0, x: 9, y: 7, options: [] },
  { value: 04, x: 1, y: 8, options: [] },
  { value: 07, x: 2, y: 8, options: [] },
  { value: 0, x: 3, y: 8, options: [] },
  { value: 0, x: 4, y: 8, options: [] },
  { value: 0, x: 5, y: 8, options: [] },
  { value: 0, x: 6, y: 8, options: [] },
  { value: 0, x: 7, y: 8, options: [] },
  { value: 0, x: 8, y: 8, options: [] },
  { value: 0, x: 9, y: 8, options: [] },
  { value: 01, x: 1, y: 9, options: [] },
  { value: 0, x: 2, y: 9, options: [] },
  { value: 06, x: 3, y: 9, options: [] },
  { value: 0, x: 4, y: 9, options: [] },
  { value: 0, x: 5, y: 9, options: [] },
  { value: 0, x: 6, y: 9, options: [] },
  { value: 0, x: 7, y: 9, options: [] },
  { value: 0, x: 8, y: 9, options: [] },
  { value: 0, x: 9, y: 9, options: [] }
];

const hard2 = [
  { value: 05, x: 1, y: 1, options: [] },
  { value: 0, x: 2, y: 1, options: [] },
  { value: 0, x: 3, y: 1, options: [] },
  { value: 09, x: 4, y: 1, options: [] },
  { value: 0, x: 5, y: 1, options: [] },
  { value: 0, x: 6, y: 1, options: [] },
  { value: 06, x: 7, y: 1, options: [] },
  { value: 0, x: 8, y: 1, options: [] },
  { value: 0, x: 9, y: 1, options: [] },
  { value: 0, x: 1, y: 2, options: [] },
  { value: 0, x: 2, y: 2, options: [] },
  { value: 09, x: 3, y: 2, options: [] },
  { value: 02, x: 4, y: 2, options: [] },
  { value: 0, x: 5, y: 2, options: [] },
  { value: 0, x: 6, y: 2, options: [] },
  { value: 08, x: 7, y: 2, options: [] },
  { value: 03, x: 8, y: 2, options: [] },
  { value: 0, x: 9, y: 2, options: [] },
  { value: 0, x: 1, y: 3, options: [] },
  { value: 0, x: 2, y: 3, options: [] },
  { value: 0, x: 3, y: 3, options: [] },
  { value: 0, x: 4, y: 3, options: [] },
  { value: 01, x: 5, y: 3, options: [] },
  { value: 0, x: 6, y: 3, options: [] },
  { value: 0, x: 7, y: 3, options: [] },
  { value: 04, x: 8, y: 3, options: [] },
  { value: 0, x: 9, y: 3, options: [] },
  { value: 0, x: 1, y: 4, options: [] },
  { value: 09, x: 2, y: 4, options: [] },
  { value: 0, x: 3, y: 4, options: [] },
  { value: 0, x: 4, y: 4, options: [] },
  { value: 0, x: 5, y: 4, options: [] },
  { value: 0, x: 6, y: 4, options: [] },
  { value: 0, x: 7, y: 4, options: [] },
  { value: 0, x: 8, y: 4, options: [] },
  { value: 0, x: 9, y: 4, options: [] },
  { value: 0, x: 1, y: 5, options: [] },
  { value: 0, x: 2, y: 5, options: [] },
  { value: 0, x: 3, y: 5, options: [] },
  { value: 0, x: 4, y: 5, options: [] },
  { value: 0, x: 5, y: 5, options: [] },
  { value: 06, x: 6, y: 5, options: [] },
  { value: 0, x: 7, y: 5, options: [] },
  { value: 08, x: 8, y: 5, options: [] },
  { value: 04, x: 9, y: 5, options: [] },
  { value: 0, x: 1, y: 6, options: [] },
  { value: 01, x: 2, y: 6, options: [] },
  { value: 0, x: 3, y: 6, options: [] },
  { value: 0, x: 4, y: 6, options: [] },
  { value: 0, x: 5, y: 6, options: [] },
  { value: 0, x: 6, y: 6, options: [] },
  { value: 03, x: 7, y: 6, options: [] },
  { value: 0, x: 8, y: 6, options: [] },
  { value: 06, x: 9, y: 6, options: [] },
  { value: 0, x: 1, y: 7, options: [] },
  { value: 06, x: 2, y: 7, options: [] },
  { value: 02, x: 3, y: 7, options: [] },
  { value: 0, x: 4, y: 7, options: [] },
  { value: 07, x: 5, y: 7, options: [] },
  { value: 0, x: 6, y: 7, options: [] },
  { value: 0, x: 7, y: 7, options: [] },
  { value: 0, x: 8, y: 7, options: [] },
  { value: 05, x: 9, y: 7, options: [] },
  { value: 03, x: 1, y: 8, options: [] },
  { value: 0, x: 2, y: 8, options: [] },
  { value: 0, x: 3, y: 8, options: [] },
  { value: 05, x: 4, y: 8, options: [] },
  { value: 0, x: 5, y: 8, options: [] },
  { value: 0, x: 6, y: 8, options: [] },
  { value: 0, x: 7, y: 8, options: [] },
  { value: 02, x: 8, y: 8, options: [] },
  { value: 0, x: 9, y: 8, options: [] },
  { value: 0, x: 1, y: 9, options: [] },
  { value: 0, x: 2, y: 9, options: [] },
  { value: 0, x: 3, y: 9, options: [] },
  { value: 0, x: 4, y: 9, options: [] },
  { value: 0, x: 5, y: 9, options: [] },
  { value: 0, x: 6, y: 9, options: [] },
  { value: 0, x: 7, y: 9, options: [] },
  { value: 0, x: 8, y: 9, options: [] },
  { value: 0, x: 9, y: 9, options: [] }
];

const hard = [
  { value: 08, x: 1, y: 1, options: [] },
  { value: 03, x: 2, y: 1, options: [] },
  { value: 01, x: 3, y: 1, options: [] },
  { value: 06, x: 4, y: 1, options: [] },
  { value: 0, x: 5, y: 1, options: [] },
  { value: 0, x: 6, y: 1, options: [] },
  { value: 0, x: 7, y: 1, options: [] },
  { value: 0, x: 8, y: 1, options: [] },
  { value: 07, x: 9, y: 1, options: [] },
  { value: 0, x: 1, y: 2, options: [] },
  { value: 07, x: 2, y: 2, options: [] },
  { value: 0, x: 3, y: 2, options: [] },
  { value: 0, x: 4, y: 2, options: [] },
  { value: 0, x: 5, y: 2, options: [] },
  { value: 0, x: 6, y: 2, options: [] },
  { value: 0, x: 7, y: 2, options: [] },
  { value: 0, x: 8, y: 2, options: [] },
  { value: 0, x: 9, y: 2, options: [] },
  { value: 0, x: 1, y: 3, options: [] },
  { value: 0, x: 2, y: 3, options: [] },
  { value: 0, x: 3, y: 3, options: [] },
  { value: 0, x: 4, y: 3, options: [] },
  { value: 02, x: 5, y: 3, options: [] },
  { value: 0, x: 6, y: 3, options: [] },
  { value: 0, x: 7, y: 3, options: [] },
  { value: 0, x: 8, y: 3, options: [] },
  { value: 0, x: 9, y: 3, options: [] },
  { value: 0, x: 1, y: 4, options: [] },
  { value: 0, x: 2, y: 4, options: [] },
  { value: 0, x: 3, y: 4, options: [] },
  { value: 0, x: 4, y: 4, options: [] },
  { value: 0, x: 5, y: 4, options: [] },
  { value: 0, x: 6, y: 4, options: [] },
  { value: 08, x: 7, y: 4, options: [] },
  { value: 0, x: 8, y: 4, options: [] },
  { value: 0, x: 9, y: 4, options: [] },
  { value: 0, x: 1, y: 5, options: [] },
  { value: 0, x: 2, y: 5, options: [] },
  { value: 0, x: 3, y: 5, options: [] },
  { value: 02, x: 4, y: 5, options: [] },
  { value: 0, x: 5, y: 5, options: [] },
  { value: 0, x: 6, y: 5, options: [] },
  { value: 0, x: 7, y: 5, options: [] },
  { value: 0, x: 8, y: 5, options: [] },
  { value: 05, x: 9, y: 5, options: [] },
  { value: 0, x: 1, y: 6, options: [] },
  { value: 08, x: 2, y: 6, options: [] },
  { value: 0, x: 3, y: 6, options: [] },
  { value: 07, x: 4, y: 6, options: [] },
  { value: 0, x: 5, y: 6, options: [] },
  { value: 0, x: 6, y: 6, options: [] },
  { value: 0, x: 7, y: 6, options: [] },
  { value: 09, x: 8, y: 6, options: [] },
  { value: 06, x: 9, y: 6, options: [] },
  { value: 0, x: 1, y: 7, options: [] },
  { value: 0, x: 2, y: 7, options: [] },
  { value: 0, x: 3, y: 7, options: [] },
  { value: 01, x: 4, y: 7, options: [] },
  { value: 0, x: 5, y: 7, options: [] },
  { value: 05, x: 6, y: 7, options: [] },
  { value: 04, x: 7, y: 7, options: [] },
  { value: 0, x: 8, y: 7, options: [] },
  { value: 0, x: 9, y: 7, options: [] },
  { value: 04, x: 1, y: 8, options: [] },
  { value: 0, x: 2, y: 8, options: [] },
  { value: 0, x: 3, y: 8, options: [] },
  { value: 0, x: 4, y: 8, options: [] },
  { value: 0, x: 5, y: 8, options: [] },
  { value: 0, x: 6, y: 8, options: [] },
  { value: 0, x: 7, y: 8, options: [] },
  { value: 07, x: 8, y: 8, options: [] },
  { value: 0, x: 9, y: 8, options: [] },
  { value: 09, x: 1, y: 9, options: [] },
  { value: 0, x: 2, y: 9, options: [] },
  { value: 0, x: 3, y: 9, options: [] },
  { value: 0, x: 4, y: 9, options: [] },
  { value: 0, x: 5, y: 9, options: [] },
  { value: 04, x: 6, y: 9, options: [] },
  { value: 0, x: 7, y: 9, options: [] },
  { value: 06, x: 8, y: 9, options: [] },
  { value: 01, x: 9, y: 9, options: [] }
];

const printPuzzle = puzzle => {
  //Prints the puzzle in the console in a rows of 9
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

const findIndividualOption = (x, y, puzz) => {
  //setup initial variables
  let cube = [];
  let vert = [];
  let horiz = [];
  //key is used for filtering possible solutions
  const key = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //this sets the x and y cube block
  let xLimit = Math.ceil(x / 3);
  let yLimit = Math.ceil(y / 3);

  //test every element in the puzzle to see
  //if it influences the point in question
  puzz.forEach(item => {
    //adds any known values to the cube
    if (Math.ceil(item.x / 3) === xLimit && Math.ceil(item.y / 3) === yLimit)
      cube.push(item.value);
    //adds known values to the verticals
    if (item.x === x) vert.push(item.value);
    //adds known values to the horizontals
    if (item.y === y) horiz.push(item.value);
  });
  //create the options by finding the numbers that aren't
  //included in the cube, horiz, or vert.
  let options = key.filter(
    number =>
      !cube.includes(number) &&
      !horiz.includes(number) &&
      !vert.includes(number)
  );
  return options;
};

const findOptions = puzz => {
  //Finds options for every empty cell in the grid
  let min = 9;

  //test every value in the puzzle
  puzz.forEach(item => {
    //value === 0 indicates empty cell
    if (item.value === 0) {
      //find options for that cell
      item.options = findIndividualOption(item.x, item.y, puzz);

      //reset min with new option length if it's shorter than min now.
      if (item.options.length < min) min = item.options.length;

      //if there are no options, return 0.
      //there is no reason to continue.
      if (item.options.length === 0) {
        //console.log("no options", item);
        return [0, puzz];
      }
    }
  });
  return [min, puzz];
};

const sudokuSolver = puzzle => {
  //copy of the puzzle used in manipulation, so the original
  //isn't modified during recursion
  let copy = _.cloneDeep(puzzle);

  //min is the smallest number of options for a cell.
  //this is used when making the guess.
  //making a guess when there are two options is far better than if there are 9.
  let [min, puzz] = findOptions(copy);

  //if there is a cell that has no options, the guess was bad.
  if (min === 0) {
    return false;
  }

  //check every element in the puzzle
  for (let i = 0; i < puzz.length; i++) {
    const element = puzz[i];

    //find empty cells with the minimum number of options.
    if (element.value === 0 && element.options.length === min) {
      //Loop through the options and make a guess
      for (let j = 0; j < element.options.length; j++) {
        const guess = element.options[j];
        //set the value
        element.value = guess;

        //call the solver with the value set.
        let res = sudokuSolver(puzz);

        //if a puzzle is returned, the solution works and should stop.
        if (res) return res;

        //if the res is false and all guesses have been checked, return false
        if (!res && j === element.options.length - 1) return false;
      }
    }
  }
  return puzz;
};

console.time("Run Time");
printPuzzle(expert1);
let solution = sudokuSolver(expert1);
printPuzzle(solution);
console.timeEnd("Run Time");
