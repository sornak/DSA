function findMissingRepeatingNumbersBrute(arr) {
  // TC - 0(n2) SC - 0(1)
  let n = arr.length;
  let missing = -1;
  let repeating = -1;
  for (let i = 1; i <= n; i++) {
    let cnt = 0;
    for (let j = 0; j < n; j++) {
      if (arr[j] == i) {
        cnt++;
      }
    }
    if (cnt == 0) missing = i;
    else if (cnt == 2) repeating = i;

    if (missing != -1 && repeating != -1) break;
  }

  return [missing, repeating];
}

function findMissingRepeatingNumbersBetter(arr) {
  // TC - 0(2n) SC - 0(n)
  let n = arr.length;
  let hashmap = new Array(n + 1).fill(0);
  let missing = -1;
  let repeating = -1;

  for (let i = 0; i < n; i++) {
    hashmap[arr[i]]++;
  }

  for (let i = 1; i <= n; i++) {
    if (hashmap[i] == 2) {
      repeating = i;
    }
    if (hashmap[i] == 0) {
      missing = i;
    }

    if (repeating != -1 && missing != -1) break;
  }

  console.log(hashmap);

  return { repeating, missing };
}

function findMissingRepeatingNumbersOptimal(arr) {
  // TC - 0(n) SC -0(1)
  let n = arr.length;
  let sN = (n * (n + 1)) / 2;
  let s2N = (n * (n + 1) * (2 * n + 1)) / 6;
  let s = 0;
  let s2 = 0;

  for (let i = 0; i < n; i++) {
    s += arr[i];
    s2 += arr[i] * arr[i];
  }

  let val1 = s - sN;
  let val2 = s2 - s2N;

  let x = (val1 + val2 / val1) / 2;
  let y = x - val1;

  return [parseInt(x), parseInt(y)];
}

let arr = [2, 2];
let result = findMissingRepeatingNumbersBetter(arr);
console.log("MaximumconsecutiveonesBrute", result);
