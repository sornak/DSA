/* With out Javascript InBuild */

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

let arr = [20, 50, 10, 80, 90];
let result = RightRotationwithCount1(arr, 2);
console.log("RightRotationwithCount", result);

/* Explanation (Without inbuilt library)

  1) d%n to check the rotation possibility (needs to check count%length while should be less than length)

  2) As it's right rotate first reverse from the count to length then reverse from start to remaingin of count then reverse whole array

  4) Once reverse done return the array

*/
