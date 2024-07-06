/* Wiht Brute force  */

function LargestArrayElementIndexSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr.indexOf(arr[n - 1]);
}

/* Optimal */

function LargestArrayElementIndexOptimal(arr) {
  let n = arr.length;
  let largestElement = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] > largestElement) {
      largestElement = arr[i];
    }
  }
  return largestElement;
}

/* With Javascript InBuild */

function LargestArrayElementIndexInbuild(arr) {
  let largestElement = Math.max(...arr);
  return arr.indexOf(largestElement);
}

let arr = [100, 12, 200, 500, 800, 950, 2000];
let result = LargestArrayElementIndexOptimal(arr);
console.log("LargestArrayElementIndex", result);
