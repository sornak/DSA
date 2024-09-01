function MaximumSumSubArrayBrute(arr) {
  // TC - 0(n2) SC -0(1)
  let n = arr.length;
  let maxi = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
    }
    maxi = Math.max(maxi, sum);
  }
  return maxi;
}

function MaximumSumSubArrayOptimal(arr) {
  // TC - 0(n) SC -0(1)

  let n = arr.length;
  let sum = 0;
  let max = arr[0];
  let ansStart = -1;
  let ansEnd = -1;
  let start = -1;
  for (let i = 0; i < n; i++) {
    if (sum == 0) {
      start = i;
    }
    sum += arr[i];
    if (sum > max) {
      max = sum;
      ansStart = start;
      ansEnd = i;
    }
    if (sum < 0) {
      sum = 0;
    }
  }

  for (let i = ansStart; i <= ansEnd; i++) {
    console.log(arr[i]);
  }

  if (maxi < 0) maxi = 0;

  return max;
}

let arr = [4, 3, 1, 5, 6];
let result = MaximumSumSubArrayOptimal(arr);
console.log("sds", result);
