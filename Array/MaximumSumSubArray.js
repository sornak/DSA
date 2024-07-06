function MaximumSumSubArray(arr) {
  let n = arr.length;
  let result = 0;
  for (i = 0; i < n; i++) {
    let currentvalue = 0;
    for (j = i; j < n; j++) {
      currentvalue = currentvalue + arr[j];
      result = Math.max(result, currentvalue);
    }
  }
  return result;
}

function MaximumSumSubArray1(arr) {
  let n = arr.length;
  let sum = 0;
  let max = 0;
  for (i = 0; i < n; i++) {
    sum += arr[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}

function MaximumSumSubArray2(arr) {
  let n = arr.length;
  let sum = 0;
  let max = 0;
  let maxEnd = arr[0];
  let res = arr[0];
  for (i = 0; i < n; i++) {
    maxEnd = Math.max(arr[i], maxEnd + arr[i]);
    res = MAth.max(max, maxEnd);
    // sum += arr[i];
    // if (sum > max) {
    //   max = sum;
    // }
    // if (sum < 0) {
    //   sum = 0;
    // }
  }
  return res;
}

let arr = [2, 3, -8, 7, -1, 2, 3];
let result = MaximumSumSubArray1(arr);
console.log("sds", result);
