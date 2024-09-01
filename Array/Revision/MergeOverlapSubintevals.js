function MergeOverlapSubintevalsBrute(arr) {
  //TC - N(logN)+0(2N) SC - 0(N)
  let n = arr.length;
  arr.sort((a, b) => a[0] - b[0]);
  let ans = [];
  for (let i = 0; i < n; i++) {
    let start = arr[i][0];
    let end = arr[i][1];
    if (ans.length && end <= ans[ans.length - 1][1]) {
      continue;
    }
    for (let j = i + 1; j < n; j++) {
      if (arr[j][0] <= end) {
        end = Math.max(end, arr[j][1]);
      } else {
        break;
      }
    }

    ans.push([start, end]);
  }
  return ans;
}

function MergeOverlapSubintevalsOptimal(arr) {
  //TC - N(logN)0(N) SC - 0(N)
  let n = arr.length;
  arr.sort((a, b) => a[0] - b[0]);
  let ans = [arr[0]];
  console.log(ans);
  for (let i = 1; i < n; i++) {
    let last = ans[ans.length - 1];
    let curr = arr[i];

    console.log("l", last);
    console.log("c", curr);

    if (curr[0] <= last[1]) {
      last[1] = Math.max(last[1], curr[1]);
    } else {
      ans.push(curr);
    }
  }
  return ans;
}

let arr = [
  [1, 3],
  [2, 6],
  [8, 9],
  [9, 11],
  [8, 10],
  [2, 4],
  [15, 18],
  [16, 17],
];

console.log(MergeOverlapSubintevalsBrute(arr));
