function TwoSumIndexBrute(arr, target) {
  //SC 0(1)  TC 0(N2)
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j];
      }
    }
  }
  return {};
}

function TwoSumIndexBetter(arr, target) {
  //SC 0(N)  TC 0(N)
  let n = arr.length;
  let hashmap = {};
  for (let i = 0; i < n; i++) {
    let complement = target - arr[i];
    if (hashmap[complement]) {
      return [hashmap[complement], i];
    } else {
      hashmap[arr[i]] = i;
    }
  }
}

function TwoSumIndexOptimal(arr, target) {
  //SC 0(1)  TC 0(N)
  let n = arr.length;
  let left = 0;
  let right = n - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum == target) {
      return [left, right];
    }
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}

let arr = [10, 12, 0, 7, 9, 0, 8];
let result = TwoSumIndexOptimal(arr, 20);
console.log("sds", result);
