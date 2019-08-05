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
  let cube = [];
  let vert = [];
  let horiz = [];
  const key = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let xLimit = Math.ceil(x / 3);
  let yLimit = Math.ceil(y / 3);
  puzz.forEach(item => {
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

const findOptions = puzz => {
  let min = 9;
  puzz.forEach(item => {
    if (item.value === 0) {
      item.options = findIndividualOption(item.x, item.y, puzz);
      if (item.options.length < min) min = item.options.length;
      if (item.options.length === 0) {
        //console.log("no options", item);
        return [0, puzz];
      }
    }
  });
  return [min, puzz];
};

const makeGuess = puzzle => {
  //printPuzzle(puzzle);
  for (let i = 0; i < puzzle.length; i++) {
    //console.log(i);
    //printPuzzle(puzzle);
    let element = puzzle[i];
    if (element.value === 0) {
      let options = findIndividualOption(element.x, element.y, puzzle);
      //console.log(options, element);
      if (options.length === 0) {
        //element.value = 0;
        return false;
      } else {
        for (let j = 0; j < options.length; j++) {
          let guess = true;
          //console.log(j);
          //printPuzzle(puzzle);
          element.value = options[j];
          guess = makeGuess(puzzle);
          if (guess === false) element.value = 0;
          //if (guess !== true) return puzzle;
        }
        //return false;
      }
    }
  }
  return puzzle;
};

const sudokuSolver = puzzle => {
  let copy = _.cloneDeep(puzzle);

  let [min, puzz] = findOptions(copy);
  if (min === 0) {
    return false;
  }

  for (let i = 0; i < puzz.length; i++) {
    const element = puzz[i];
    if (element.value === 0 && element.options.length === min) {
      for (let j = 0; j < element.options.length; j++) {
        // if (min === 1) console.log("only option", element);
        // if (min > 1 && min < 9) console.log("guess", element);
        // if (j > 0) console.log("changing guess", element);
        const guess = element.options[j];
        element.value = guess;
        let res = sudokuSolver(puzz);
        if (res) return res;
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
