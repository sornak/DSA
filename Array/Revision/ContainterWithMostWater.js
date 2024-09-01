function ContainterWithMostWaterBrute(arr) {
  let n = arr.length;
  let Max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let Water = (j - i) * Math.min(nums[i], nums[j]);
      Max = Math.max(Water, Max);
    }
  }

  return Max;
}

function ContainterWithMostWaterOptimal(arr) {
  // TC - 0(n) SC -0(1)
  let n = arr.length;
  let left = 0;
  let right = n - 1;
  let Max = 0;

  while (left <= right) {
    let Water = (right - left) * Math.min(arr[left], arr[right]);
    Max = Math.max(Max, Water);
    if (arr[left] < arr[right]) left++;
    else right--;
  }

  return Max;
}

let nums = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(ContainterWithMostWaterOptimal(nums));
