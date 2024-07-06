function MaximumConsecutiveones(arr) {
  let n = arr.length;
  let count = 0;
  let maxcount = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] == 1) {
      count++;
      maxcount = Math.max(count, maxcount);
    } else {
      count = 0;
    }
  }
  return maxcount;
}

let arr = [0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1];
let result = MaximumConsecutiveones(arr);
console.log("sds", result);
