function checkArraySorted(arr) {
  // TC - 0(n) SC - 0(1)
  let n = arr.length;
  let ascending = true;
  let descending = true;
  for (let i = 1; i < n; i++) {
    if (arr[i] < arr[i - 1]) {
      ascending = false;
    }
    if (arr[i] > arr[i - 1]) {
      descending = false;
    }
  }

  return ascending || descending;
}

//check array is osorted and rotated

function checkArraySorted(arr) {
  // TC - 0(n) SC - 0(1)

  let order = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[i + 1]) {
      order++;
    }
  }

  if (arr[0] < arr[n - 1]) {
    order++;
  }

  return order < 2;
}

let arr = [4, 5, 1, 2, 3];
let result = checkArraySorted(arr);
console.log("checkArraySorted", result);
