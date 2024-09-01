function LongestSumSubArraybrute(arr, K) {
  // TC - 0(n2) SC - 0(1)
  let n = arr.length;
  let length = 0;
  for (i = 0; i < n; i++) {
    let sum = 0;
    for (j = i; j < n; j++) {
      sum += arr[j];
      if (sum == K) {
        length = Math.max(length, j - i + 1);
      }
    }
  }
  return length;
}

function LongestSumSubArrayBetter(arr, k) {
  //Better solution if it's have only postive

  // Optimal solution if it have both positive and negtaive

  // TC - 0(NlogN) SC - 0(N)

  let hashmap = new Map();
  let maxlength = 0;
  let prefixsum = 0;
  for (let i = 0; i < arr.length; i++) {
    prefixsum += arr[i];
    if (prefixsum == k) {
      maxlength = Math.max(maxlength, i + 1);
    }

    let rem = prefixsum - k;

    if (hashmap.has(rem)) {
      let length = i - hashmap.get(rem);
      maxlength = Math.max(maxlength, length);
    }

    if (!hashmap.has(prefixsum)) {
      hashmap.set(prefixsum, i);
    }
  }

  return maxlength;
}

function LongestSumSubArrayoptimal(arr, K) {
  //TC - 0(N) SC - 0(1)
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
    if (sum == K) {
      max = Math.max(max, right - left + 1);
    }
    right++;
    sum += arr[right];
  }

  return max;
}

let arr = [-1, 1, 1];
console.log("sds", LongestSumSubArrayoptimal(arr, 1));
