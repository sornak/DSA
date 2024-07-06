function findonceinalltwicebrute(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let cnt = 0;
    for (let j = 0; j < n; j++) {
      if (arr[j] == arr[i]) {
        cnt++;
      }
    }

    if (cnt == 1) {
      return arr[i];
    }
  }
}

function findonceinalltwiceoptimal(arr) {
  let n = arr.length;
  let XOR = 0;
  for (i = 0; i < n; i++) {
    XOR = XOR ^ arr[i];
  }
  return XOR;
}

let arr = [1, 1, 2, 3, 3, 4, 2, 4, 6];
let result = findonceinalltwiceoptimal(arr);
console.log(result);
