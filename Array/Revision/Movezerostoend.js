function Movezerostoend(arr) {
  //TC - 0(N) SC -0(1)
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

function Movezerostoendbrute(arr) {
  //TC - 0(2N) SC -0(n)

  let n = arr.length;
  let temp = [];
  for (i = 0; i < n; i++) {
    if (arr[i] != 0) {
      temp.push(arr[i]);
    }
  }

  let n2 = temp.length;

  for (i = 0; i < n2; i++) {
    arr[i] = temp[i];
  }

  for (i = n2; i < n; i++) {
    arr[i] = 0;
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
