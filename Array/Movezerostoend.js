/* With out Javascript InBuild */

function Movezerostoend(arr) {
  let n = arr.length;
  let position = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] != 0) {
      let temp = arr[i];
      arr[i] = arr[position];
      arr[position] = temp;
      position++;
    }
  }
  return arr;
}

/* With Javascript InBuild */

function Movezerostoend1(arr) {
  let zeros = arr.filter((nums) => nums == 0);
  let nonzeros = arr.filter((nums) => nums != 0);

  return nonzeros.concat(zeros);
}

let arr = [20, 90, 0, 8, 7, 0, 9];
let result = Movezerostoend(arr);
console.log("Movezerostoend", result);

/* Explanation (Without inbuilt library)

 1) Start from index 0; for loop and check if value !=0 if not  equal to zero swap and increment the position and check for next

 2) Return Array once loop done


*/
