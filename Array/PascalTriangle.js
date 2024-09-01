function PascalTriangle(r, c) {
  const ele = ncr(r - 1, c - 1);
  return ele;
}

function ncr(n, r) {
  let res = 1;

  for (let i = 0; i < r; i++) {
    res = res * (n - i);
    res = res / (i + 1);
  }

  return res;
}

function PascalTrianglerow(n) {
  for (let col = 1; col <= n; col++) {
    console.log(ncr(n - 1, col - 1));
  }
}

function PrintPascalTriangle(n) {
  let ans = [];
  for (let row = 1; row <= n; row++) {
    let templist = [];
    for (let col = 1; col <= row; col++) {
      templist.push(ncr(row - 1, col - 1));
    }
    ans.push(templist);
  }

  return ans;
}

function generateRow(row) {
  let ans = 1;
  let ansRow = [1];

  for (let col = 0; col < row; col++) {
    console.log(row, col);
    ans = ans * (row - col);
    ans = ans / col + 1;
    ansRow.push(ans);
  }

  return ansRow;
}

function pascalTriangle(n) {
  let ans = [];

  for (let row = 1; row <= n; row++) {
    ans.push(generateRow(row));
  }
  return ans;
}

const r = 5;
const c = 3;
const element = pascalTriangle(4);
for (i = 0; i < element.length; i++) {
  console.log(element[i].join(","));
}
