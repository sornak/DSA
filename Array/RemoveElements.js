/* With out Javascript InBuild */

function RemoveElements(arr, val) {
  let n = arr.length;
  let index = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] != val) {
      arr[index] = arr[i];
      index++;
    }
  }
  arr.length = index;
  return arr;
}

/* With Javascript InBuild */

function RemoveElements(arr, val) {
  return arr.filter((nums) => nums != val);
}

let arr = [12, 45, 89, 50, 30];
let result = RemoveElements(arr, 89);
console.log("RemoveElements", result);

/* Explanation (Without inbuilt library)

  1) set start position loop array and check if arr value not equal to val what mentioned to remove then assign arr of the position to the arr value and increment that position

  2) hashmap push is to chekc that item is already visited item or not

*/
