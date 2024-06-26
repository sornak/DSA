/* With out Javascript InBuild */

function LeftRotationwithCount(arr, d) {
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

let arr = [20, 50, 10, 80, 90];
let result = LeftRotationwithCount(arr, 2);
console.log("LeftRotationwithCount", result);

/* Explanation (Without inbuilt library)

  1) d%n to check the rotation possibility (needs to check count%length while should be less than length)

  2) if yes first reverse the elements based on mentioned count if 3 (from 0 to 2) then reverse remaining for that reverse the whole array

  4) Once reverse done return the array

*/
