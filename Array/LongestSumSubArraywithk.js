function LongestSumSubArraybrute(arr, K) {
  let n = arr.length;
  let length = 0;
  for (i = 0; i < n; i++) {
    let sum = 0;
    for (j = i; j < n; j++) {
      sum += arr[j];
      if (sum == k) {
        length = Math.max(length, j - 1 + 1);
      }
    }
  }
  return length;
}

function LongestSumSubArrayoptimal(arr, K) {
  let n = arr.length;
  let left = 0;
  let right = 0;
  let sum = arr[0];
  let max = 0;

  while (right < n) {
    if (sum > K && left <= right) {
      sum -= arr[left];
      left++;
    }
    right++;
    sum += arr[right];
    if (sum == K) {
      max = Math.max(max, right - left + 1);
    }
  }

  return max;
}

let arr = [1, 2, 3, 1, 1, 1, 1, 1, 4, 2, 3];
console.log("sds", LongestSumSubArrayoptimal(arr, 3));
