/* With out Javascript InBuild */
function LargestArrayElementIndex(arr) {
  let n = arr.length;
  let largestIndex = 0;
  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[largestIndex]) {
      largestIndex = i;
    }
  }
  return largestIndex;
}

/* With Javascript InBuild */

function LargestArrayElementIndex(arr) {
  let largestElement = Math.max(...arr);
  return arr.indexOf(largestElement);
}

let arr = [20, 19, 36, 10, 12];
let result = LargestArrayElementIndex(arr);
console.log("LargestArrayElementIndex", result);

/* Explanation (Without inbuilt library)

  1) Assume 0th index have largest element.

  2) looping the array and check whether the looping index have value greater than largest index. if yes assign largest index with looping index;

  3) Return largest

*/
