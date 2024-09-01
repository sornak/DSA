function findOccurance(arr, target, occ) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let result = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == target) {
      result = mid;
      if (occ == "first") {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return result;
}

let arr = [3, 4, 9, 9, 9, 12, 16, 17];
console.log(findOccurance(arr, 18, "last"));
