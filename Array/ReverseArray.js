/* With Out Library */

function ReverseArray(arr) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;

  while (low < high) {
    let temp = arr[low];
    arr[low] = arr[high];
    arr[high] = temp;
    low++;
    high--;
  }
  return arr;
}

function ReverseArray(arr) {
  return arr.reverse();
}

let arr = [20, 19, 36, 10, 12];
let result = ReverseArray1(arr);
console.log("ReverseArray", result);

/* Explanation (Without inbuilt library)

  1) Swapping the element with low index and high index

  2) Run while loop with low less than high condition

  3) Return array after swap done

*/
