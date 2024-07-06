function TwoSumIndex(arr, target) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j];
      }
    }
  }
}

function TwoSumIndex1(arr, target) {
  let n = arr.length;
  let hashmap = {};
  for (let i = 0; i < n; i++) {
    let complement = target - arr[i];
    if (hashmap.hasOwnProperty(complement)) {
      return [hashmap[complement], i];
    }
    hashmap[arr[i]] = i;
  }
  return null;
}

let arr = [10, 12, 0, 7, 9, 0, 8];
let result = TwoSumIndex1(arr, 20);
console.log("sds", result);
