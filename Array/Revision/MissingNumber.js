function findMissingNumberBrute(arr, N) {
  for (i = 1; i <= N; i++) {
    let flag = 0;
    for (j = 0; j < N - 1; j++) {
      if (arr[j] == i) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) return i;
  }

  return -1;
}

function findMissingNumberbetter(arr, N) {
  let n = arr.length;
  let hashmap = new Array(N + 1).fill(0);
  for (let i = 0; i < N - 1; i++) {
    hashmap[arr[i]] = 1;
  }

  for (let i = 1; i <= N; i++) {
    if (hashmap[i] == 0) {
      return i;
    }
  }

  return -1;
}

function findMissingNumberoptimal(arr, N) {
  // TC - 0(N) SC - 0(1)

  let sum = (N * (N + 1)) / 2;

  let s2 = 0;

  for (let i = 0; i < arr.length; i++) {
    s2 += arr[i];
  }

  return sum - s2;
}

function findMissingNumberoptimal2(arr, N) {
  // TC - 0(N) SC - 0(1)
  let XOR1 = 0;
  let XOR2 = 0;

  for (let i = 0; i < N; i++) {
    XOR2 = XOR2 ^ arr[i];
    XOR1 = XOR1 ^ (i + 1);
  }

  return XOR1 ^ XOR2;
}

let a = [1, 2, 3, 5];
let N = 5;
let result = findMissingNumberoptimal2(a, N);
console.log(result);
