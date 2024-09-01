function RotateMatrix90Brute(matrix, n, m) {
  //TC - 0(n*m) SC - 0(n*m)
  const ans = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      ans[j][n - i - 1] = matrix[i][j];
    }
  }

  return ans;
}

function RotateMatrix90Optimal(matrix, n, m) {
  //TC - 0(n*m) SC - 0(1)
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }

  return matrix;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const n = matrix.length;
const m = matrix[0].length;

console.log(RotateMatrix90Optimal(matrix, n, m));
