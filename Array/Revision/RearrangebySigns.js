function RearrangebySignsBrute(arr) {
  // TC - O(N+N/2) SC - 0(N)
  let n = arr.length;
  let pos = [];
  let neg = [];

  for (i = 0; i < n; i++) {
    if (arr[i] > 0) {
      pos.push(arr[i]);
    } else {
      neg.push(arr[i]);
    }
  }

  for (i = 0; i < n / 2; i++) {
    arr[2 * i] = pos[i];
    arr[2 * i + 1] = neg[i];
  }

  return arr;
}

function RearrangebySignsOptimal(arr) {
  // TC - O(N) SC - 0(N)

  let n = arr.length;
  let posIndex = 0;
  let negIndex = 1;
  let ans = new Int32Array(n).fill(0);

  for (i = 0; i < n; i++) {
    if (arr[i] > 0) {
      ans[posIndex] = arr[i];
      posIndex += 2;
    } else {
      ans[negIndex] = arr[i];
      negIndex += 2;
    }
  }

  return ans;
}

function RearrangebySignsnotequal(arr) {
  // TC - 0(2*N) SC - 0(N/2)
  let n = arr.length;
  let pos = [];
  let neg = [];

  for (i = 0; i < n; i++) {
    if (arr[i] > 0) {
      pos.push(arr[i]);
    } else {
      neg.push(arr[i]);
    }
  }

  if (pos.length < neg.length) {
    for (i = 0; i < pos.length; i++) {
      arr[2 * i] = pos[i];
      arr[2 * i + 1] = neg[i];
    }

    let Index = pos.length * 2;
    for (let i = pos.length; i < neg.length; i++) {
      arr[Index] = neg[i];
      Index++;
    }
  } else {
    for (i = 0; i < neg.length; i++) {
      arr[2 * i] = pos[i];
      arr[2 * i + 1] = neg[i];
    }

    let Index = neg.length * 2;
    for (let i = neg.length; i < pos.length; i++) {
      arr[Index] = pos[i];
      Index++;
    }
  }

  return arr;
}

let arr = [1, 2, -4, -5, -9, -12, 3];
console.log("ress", RearrangebySignsnotequal(arr));
