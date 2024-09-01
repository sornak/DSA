function NumberofSubarrayswithXORKBetter(arr, k) {
  // TC - 0(n2) SC - 0(1)
  let n = arr.length;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    let XORR = 0;
    for (let j = i; j < n; j++) {
      XORR = XORR ^ arr[j];
      if (XORR == k) cnt++;
    }
  }
  return cnt;
}

function NumberofSubarrayswithXORKOptimal(arr, k) {
  let n = arr.length;
  let xr = 0;
  let hashmap = {};
  hashmap[xr] = 1;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    xr = xr ^ arr[i];
    const x = xr ^ k;
    if (hashmap[x]) {
      cnt += hashmap[x];
    }

    if (hashmap[xr]) {
      hashmap[xr]++;
    } else {
      hashmap[xr] = 1;
    }
  }

  return cnt;
}

const a = [4, 2, 2, 6, 4];
const k = 6;
const ans = NumberofSubarrayswithXORKOptimal(a, k);
console.log("The number of subarrays with XOR k is:", ans);
