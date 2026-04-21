/*
Description:
    -Given a 2D integer array mat[][] and a number x, find whether element x is present in the matrix or not.
Ex: 
    Input: mat[][] = [[6, 23, 21],[4, 45, 32],[69, 11, 87]], x = 32
    Output: true
    Explanation: 32 is present in the matrix, so the output is 1.
*/

function searchMatrix(mat, x) {
  // code here
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === x) {
        return `Presented number ${mat[i][j]} is true.`;
      }
    }
  }
}

console.log(
  searchMatrix(
    [
      [6, 23, 21],
      [4, 45, 32],
      [69, 11, 87],
    ],
    32,
  ),
);
