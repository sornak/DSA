function MinimumElement(arr) {
  let low = 0;
  let high = arr.length - 1;
  let ans = Number.MAX_VALUE;
  let index = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[low] <= arr[high]) {
      if (arr[low] < ans) {
        ans = arr[low];
        index = low;
      }
      break;
    }
    if (arr[low] <= arr[mid]) {
      if (arr[low] < ans) {
        ans = arr[low];
        index = low;
      }
      low = mid + 1;
    } else {
      high = mid - 1;
      if (arr[mid] < ans) {
        ans = arr[mid];
        index = mid;
      }
    }
  }

  return index;
}

let arr = [4, 5, 5, 1, 2, 3];
console.log(MinimumElement(arr));
