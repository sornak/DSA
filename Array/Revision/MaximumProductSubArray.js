function MaximumProductSubArrayBetter(arr) {
  //TC - 0(N2), SC - 0(1)
  let n = arr.length;
  let result = 1;
  for (let i = 0; i < n; i++) {
    let prod = 1;
    for (let j = i; j < n; j++) {
      prod *= arr[j];
    }
    result = Math.max(result, prod);
  }

  return result;
}

function MaximumProductSubArrayOptimal(arr) {
  //TC - 0(N), SC - 0(1)

  let n = arr.length;
  let prefix = 1;
  let suffix = 1;
  let max = Number.MIN_VALUE;

  for (let i = 0; i < n; i++) {
    if (prefix == 0) prefix = 1;
    if (suffix == 0) suffix = 1;

    prefix = prefix * arr[i];
    suffix = suffix * arr[n - i - 1];

    max = Math.max(max, Math.max(prefix, suffix));
  }

  return max;
}

function MaximumProductSubArrayKAdens(nums) {
  //TC - 0(N), SC - 0(1)

  let n = nums.length;
  let prod1 = nums[0];
  let prod2 = nums[0];
  let result = nums[0];

  for (let i = 1; i < n; i++) {
    let temp = Math.max(nums[i], prod1 * nums[i], prod2 * nums[i]);
    prod2 = Math.min(nums[i], prod1 * nums[i], prod2 * nums[i]);
    prod1 = temp;

    result = Math.max(result, prod1);
  }

  return result;
}

let nums = [1, 2, -3, 0, -4, -5];
console.log(
  "The maximum product subarray: " + MaximumProductSubArrayKAdens(nums)
);
