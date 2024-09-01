function findUpperBounce(arr, target) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let ans = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

let arr = [3, 4, 9, 9, 9, 12, 16, 17];
console.log(findLowerBounce(arr, 9));
