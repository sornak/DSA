function LongestSubarraywith0sumBrute(arr) {
  // TC - 0(n2) SC - 0(1)

  let n = arr.length;
  let max = 0;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum == 0) {
        max = Math.max(max, j - i + 1);
      }
    }
  }

  return max;
}

function LongestSubarraywith0sumOptimal(arr) {
  // TC - 0(n) SC - 0(n)

  let n = arr.length;
  let max = 0;
  let sum = 0;
  let hashmap = {};

  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (sum === 0) {
      max = i + 1;
    } else {
      if (hashmap.hasOwnProperty(sum)) {
        max = Math.max(max, i - hashmap[sum]);
      } else {
        hashmap[sum] = i;
      }
    }
  }

  return max;
}

let a = [15, -2, 2, -8, 1, 7, 10, 23];
console.log(LongestSubarraywith0sumOptimal(a));
