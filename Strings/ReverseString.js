/* With out Javascript InBuild */

function ReverseString(str) {
  let arr = str.split("");
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
  return arr.join("");
}

/* With Javascript InBuild */

function ReverseString(str) {
  return str.split("").reverse().join("");
}
let string = "sorna";
let Result = ReverseString(string);
console.log("string " + string, Result);

/* Explanation (Without inbuilt library)

  1) Convert string to array with split Swapping the element with low index and high index

  2) Run while loop with low less than high condition

  3) Return array after swap done

*/
