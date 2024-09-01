function Movenegativetostart(arr) {
  //TC - 0(N) SC -0(1)

  let n = arr.length;
  let position = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] < 0) {
      let temp = arr[i];
      arr[i] = arr[position];
      arr[position] = temp;
      position++;
    }
  }

  return arr;
}

function Movenegativetostart(arr) {
  let negatives = arr.filter((nums) => nums < 0);
  let positives = arr.filter((nums) => nums > 0);

  return negatives.concat(positives);
}

let arr = [20, 90, -1, 8, -8, -7, -11];
let result = Movenegativetostart(arr);
console.log("Movenegativetostart", result);

/* Explanation (Without inbuilt library)

 1) Start from index 0; for loop and check if array value of index >0 if yes  equal to swap and increment the position and check for next

 2) Return Array once loop done


*/
