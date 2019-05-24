export const pascalsTriangle = (layers) => {
  let start = new Date();
  let triangle = []
  //create triangle
  for (let i = 0; i < layers; i++) {
    let row = []
    for (let j = 0; j < i + 1; j++) {
      row.push(1)
    }
    triangle.push(row)
  }
  //fills in triangle
  for (let i = 2; i < layers; i++) {
    for (let j = 1; j < triangle[i].length - 1; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j]
    }
  }

  console.log('time:', new Date() - start)
  return triangle
}


console.log(pascalsTriangle(11))