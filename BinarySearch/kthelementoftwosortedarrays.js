function kthelementBrute(arr1, arr2, k) {
  let n1 = arr1.length;
  let n2 = arr2.length;

  let temp = [];

  let i = 0;
  let j = 0;

  while (i < n1 && j < n2) {
    if (arr1[i] < arr2[j]) {
      temp.push(arr1[i++]);
    } else {
      temp.push(arr2[j++]);
    }
  }

  while (i < n1) {
    temp.push(arr1[i++]);
  }

  while (j < n2) {
    temp.push(arr2[j++]);
  }

  return temp[k - 1];
}

function kthelementBetter(arr1, arr2, k) {
  let n1 = arr1.length;
  let n2 = arr2.length;

  let i = 0;
  let j = 0;
  let cnt = 0;
  let ele = Number.MIN_VALUE;

  while (i < n1 && j < n2) {
    if (arr1[i] < arr2[j]) {
      if (cnt == k - 1) ele = arr1[i];
      cnt++;
      i++;
    } else {
      if (cnt == k - 1) ele = arr2[j];
      cnt++;
      j++;
    }
  }

  while (i < n1) {
    if (cnt == k - 1) ele = arr1[i];
    cnt++;
    i++;
  }

  while (j < n2) {
    if (cnt == k - 1) ele = arr2[j];
    cnt++;
    j++;
  }

  return ele;
}

function kthelementOptimal(arr1, arr2, k) {
  let n1 = arr1.length;
  let n2 = arr2.length;

  if (n1 > n2) return kthelementOptimal(arr2, arr1, k);
  let left = k;
  let n = n1 + n2;
  let low = Math.max(k - n2, 0);
  let high = Math.min(k, n1);

  while (low <= high) {
    let mid1 = Math.floor((low + high) / 2);
    let mid2 = left - mid1;

    let l1 = mid1 == 0 ? Number.MIN_VALUE : arr1[mid1 - 1];
    let l2 = mid2 == 0 ? Number.MIN_VALUE : arr2[mid2 - 1];

    let r1 = mid1 == n1 ? Number.MIN_VALUE : arr1[mid1];
    let r2 = mid2 == n2 ? Number.MIN_VALUE : arr2[mid2];

    if (l1 <= r2 && l2 <= r1) {
      return Math.max(l1, l2);
    } else if (l1 > r2) {
      high = mid1 - 1;
    } else {
      low = mid1 + 1;
    }
  }

  return 0;
}

let a = [2, 3, 6, 7, 9];
let b = [1, 4, 8, 10];
console.log(
  "The k-th element of two sorted arrays is: " + kthelementOptimal(a, b, 5)
);
