function subarraysumequalstok(arr, k) {
  // TC - 0(n2) SC - 0(1)
  let n = arr.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum == k) {
        count++;
      }
    }
  }

  return count;
}

function subarraysumequalstokbetter(arr, k) {
  // TC - 0(n) SC - 0(n)

  let n = arr.length;
  let hashmap = new Map();
  let count = 0;
  let sum = 0;
  hashmap.set(0, 1);
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (hashmap.has(sum - k)) {
      count += hashmap.get(sum - k);
    }
    hashmap.set(sum, (hashmap.get(sum) || 0) + 1);
  }

  return count;
}

function subarraysumequalstooptimal(arr, k) {
  // only for posticve it woil work sliding wndow
  // TC - 0(n) SC - 0(1)

  let n = arr.length;
  let left = 0;
  let right = 0;
  let count = 0;
  let sum = 0;

  while (right < n) {
    sum += arr[right];

    while (sum > k && left <= right) {
      sum -= arr[left];
      left++;
    }

    if (sum == k) {
      count++;
    }

    right++;
  }

  return sum;
}

let arr = [1, 1, 1];

console.log("sds", subarraysumequalstooptimal(arr, 2));
