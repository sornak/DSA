function markRow(matrix, m, i) {
  // set all non-zero elements as -1 in the row i:
  for (let j = 0; j < m; j++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = -1;
    }
  }
}

function markCol(matrix, n, j) {
  // set all non-zero elements as -1 in the col j:
  for (let i = 0; i < n; i++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = -1;
    }
  }
}

function SetMatrixzero(matrix, n, m) {
  // Set -1 for rows and cols that contains 0. Don't mark any 0 as -1:
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        markRow(matrix, n, m, i);
        markCol(matrix, n, m, j);
      }
    }
  }
  // Finally, mark all -1 as 0:
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === -1) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}

function SetMatrixzeroBetter(matrix, n, m) {
  // TC - 0(2*n*m) SC - 0(n)*0(m)
  let row = new Array(n).fill(0);
  let col = new Array(m).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] == 0) {
        row[i] = 1;
        col[j] = 1;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}

function SetMatrixzeroOptimal(matrix, n, m) {
  // TC - 0(2*n*m) SC - 0(1)

  let col0 = 1;
  for (let i = 0; i < n; i++) {
    for (j = 0; j < m; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = 0;

        if (j != 0) {
          matrix[0][j] = 0;
        } else {
          col0 = 0;
        }
      }
    }
  }

  for (let i = 1; i < n; i++) {
    for (j = 1; j < m; j++) {
      if (matrix[i][j] != 0) {
        if (matrix[i][0] == 0 || matrix[0][j] == 0) {
          matrix[i][j] = 0;
        }
      }
    }
  }

  if (matrix[0][0] == 0) {
    for (let j = 0; j < m; j++) {
      matrix[0][j] = 0;
    }
  }

  if (col0 == 0) {
    for (let i = 0; i < n; j++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
}

let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
const n = matrix.length;
const m = matrix[0].length;

console.log(SetMatrixzeroOptimal(matrix, n, m));
