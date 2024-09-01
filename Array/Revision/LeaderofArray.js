function LeaderofArrayBrute(arr) {
  // TC - 0(n2) SC -0(1)

  let n = arr.length;
  let ans = [];
  for (let i = 0; i < n; i++) {
    let leader = true;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[i]) {
        leader = false;
        break;
      }
    }
    if (leader == true) {
      ans.push(arr[i]);
    }
  }

  return ans;
}

function LeaderofArrayOptimal(arr) {
  // TC - 0(n) SC -0(1)
  let ans = [];
  let max = arr[n - 1];
  ans.push(arr[n - 1]);

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > max) {
      max = arr[i];
      ans.push(arr[i]);
    }
  }

  return ans.reverse();
}

let arr = [4, 7, 1, 0];
console.log(LeaderofArrayOptimal(arr));
