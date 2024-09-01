/* With out Javascript InBuild */

function SortArray(arr) {
  let n = arr.length;
  let flag = false;
  while (!flag) {
    flag = true;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
        flag = false;
      }
    }
  }
  return arr;
}

/* With Javascript InBuild */

function SortArray(arr) {
  return arr.sort((a, b) => a - b);
}

let arr = [20, 50, 10, 80, 90];
let result = SortArray(arr);
console.log("SortArray", result);

/* Explanation (Without inbuilt library)

 1) Flag variable to false to check whether needs to continue the condition chekc or not

 2) for each and compare previous value with current value if  greater swap and make flag to false again and continue loop

 3) once flag get false after loop will return result

*/
