function Printspiral(matrix) {
  let ans = [];
  let n = matrix.length;
  let m = matrix[0].length;

  let top = 0,
    left = 0,
    bottom = n - 1,
    right = m - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i]);
    }

    top++;

    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][right]);
    }

    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        ans.push(matrix[bottom][i]);
      }
    }

    bottom--;

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        ans.push(matrix[i][left]);
      }
    }

    left++;
  }

  return ans;
}

let mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let ans = Printspiral(mat);
console.log(ans);
