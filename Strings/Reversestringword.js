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

// TC - 0(N) SC - 0(N)
function ReverseWordBrute(str) {
  let stack = [];
  let result = "";
  let str1 = "";
  for (char of str) {
    if (char == " ") {
      stack.push(str1);
      str1 = "";
    } else {
      str1 += char;
    }
  }
  while (stack.length > 0) {
    result += stack.pop() + " ";
  }
  return result;
}

function ReverseWordOptimal(str) {
  let result = "";
  let str1 = "";
  for (char of str) {
  }
}

/* With Javascript InBuild */

function ReverseStringinbuild(str) {
  return str.split("").reverse().join("");
}
let string = "this is an amazing program";
let Result = ReverseWordBrute(string);
console.log(Result);

/* Explanation (Without inbuilt library)

  1) Convert string to array with split Swapping the element with low index and high index

  2) Run while loop with low less than high condition

  3) Return array after swap done

*/
