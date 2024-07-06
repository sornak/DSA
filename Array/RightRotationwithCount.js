function RightRotatebyOnePlace(arr) {
  let n = arr.length;
  let temp = arr[n - 1];
  for (i = n - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = temp;
  return arr;
}

function RightRotationBruteForce(arr, d) {
  let n = arr.length;
  d = d % n;

  let temp = [];
  for (let i = d; i < n; i++) {
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

function RightRotationwithCount(arr, d) {
  let n = arr.length;
  d = d % n;

  Reverse(arr, n - d, n - 1);
  Reverse(arr, 0, n - d - 1);
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

function RightRotationwithCount1(arr, d) {
  let n = arr.length;
  d = d % n;

  return arr.slice(d + 1).concat(arr.slice(0, d + 1));
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let result = RightRotationBruteForce(arr, 3);
console.log("RightRotationwithCount", result);

/* Explanation (Without inbuilt library)

  1) d%n to check the rotation possibility (needs to check count%length while should be less than length)

  2) As it's right rotate first reverse from the count to length then reverse from start to remaingin of count then reverse whole array

  4) Once reverse done return the array

*/
