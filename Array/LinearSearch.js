function LinearSearch(arr, d) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] == d) {
      return i;
    }
  }
  return -1;
}

let arr = [20, 90, 0, 8, 7, 0, 9];
let result = LinearSearch(arr, 0);
console.log("LinearSearch", result);
