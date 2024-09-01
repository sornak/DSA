function LeftRotatebyOneplace(arr) {
  let n = arr.length;
  let temp = arr[0];
  for (let i = 1; i < n; i++) {
    arr[i - 1] = arr[i];
  }
  arr[n - 1] = temp;
  return arr;
}

function LeftRotationBruteforce(arr, d) {
  /* TC - 0(d)+0(n-d)+0(d) = 0(n+d) SC- 0(d)*/

  let n = arr.length;
  d = d % n;

  let temp = [];

  for (i = d; i < n; i++) {
    temp.push(arr[i]);
  }

  for (i = 0; i < d; i++) {
    temp.push(arr[i]);
  }

  for (i = 0; i < n; i++) {
    arr[i] = temp[i];
  }

  return arr;
}

function LeftRotationwithCountOptimal(arr, d) {
  /* TC - 0(2n) SC- 0(1)*/

  let n = arr.length;
  d = d % n;

  Reverse(arr, 0, d - 1);
  Reverse(arr, d, n - 1);
  Reverse(arr, 0, n - 1);

  return arr;
}

function Reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }

  return arr;
}

/* With Javascript InBuild */

function LeftRotationwithCount(arr, d) {
  let n = arr.length;
  d = d % n;

  return arr.slice(d).concat(arr.slice(0, d));
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let result = LeftRotationwithCountOptimal(arr, 3);
console.log("LeftRotationwithCount", result);
