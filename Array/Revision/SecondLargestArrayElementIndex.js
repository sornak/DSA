/* Brute Force */

function SecondLargestArrayElementIndexBrute(arr) {
  // TC - 0(n2) SC - 0(1)

  let n = arr.length;
  let largest = arr[0];
  let secondlargest = Number.MIN_VALUE;
  for (let i = 0; i < n; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  for (let i = 0; i < n; i++) {
    if (arr[i] < largest && arr[i] > secondlargest) {
      secondlargest = arr[i];
    }
  }

  return secondlargest;
}

function SecondLargestArrayElementIndexOptimal(arr) {
  // TC - 0(n) SC - 0(1)

  let n = arr.length;
  let largest = arr[0];
  let secondlargest = -1;
  for (i = 1; i < n; i++) {
    if (arr[i] > largest) {
      secondlargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondlargest) {
      secondlargest = arr[i];
    }
  }

  return secondlargest;
}

/* With Javascript InBuild */

function SecondLargestArrayElementIndexInbuild(arr) {
  let sortedArray = [...arr].sort((a, b) => b - a);
  return arr.indexOf(sortedArray[1]);
}

let arr = [20, 19, 136, 110, 12];
let result = SecondLargestArrayElementIndexOptimal(arr);
console.log("SecondLargestArrayElementIndex", result);
