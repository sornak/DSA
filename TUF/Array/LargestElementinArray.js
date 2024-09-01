function LargestElementinArrayBrute(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let largest = arr[0];
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > largest) {
        largest = arr[j];
      }
    }
    return largest;
  }
}

function LargestElementinArraySort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }
  return arr[n - 1];
}

let arr = [2, 5, 6, 7, 3];
let result = LargestElementinArraySort(arr);
console.log(result);
