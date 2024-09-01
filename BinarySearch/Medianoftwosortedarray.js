function medianOfTwoSortedArrays(arr1, arr2) {
  let n1 = arr1.length;
  let n2 = arr2.length;
  let i = 0;
  let j = 0;
  let n = n1 + n2;
  let index2 = Math.floor(n / 2);
  let index1 = index2 - 1;
  let cnt = 0;

  let index1elem = -1;
  let index2elem = -1;

  while (i < n1 && j < n2) {
    let nextElem;
    if (arr1[i] < arr2[j]) {
      nextElem = arr1[i++];
    } else {
      nextElem = arr2[j++];
    }
    if (cnt == index1) index1elem = nextElem;
    if (cnt == index2) index2elem = nextElem;
    cnt++;
  }

  while (i < n1) {
    if (cnt == index1) index1elem = arr1[i];
    if (cnt == index2) index2elem = arr1[i];
    i++;
    cnt++;
  }

  while (j < n2) {
    if (cnt == index1) index1elem = arr2[j];
    if (cnt == index2) index2elem = arr2[j];
    j++;
    cnt++;
  }

  if (n % 2 == 1) {
    return index2elem;
  } else {
    return (index1elem + index2elem) / 2.0;
  }
}

function medianOfTwoSortedArraysOptimal(arr1, arr2) {
  let n1 = arr1.length;
  let n2 = arr2.length;

  if (n1 > n2) medianOfTwoSortedArraysOptimal(n2, n1);

  let n = n1 + n2;

  let left = Math.floor((n1 + n2 + 1) / 2);

  let low = 0;
  high = n1;

  while (low <= high) {
    let mid1 = Math.floor((low + high) / 2);
    let mid2 = left - mid1;
    let l1 = Number.MIN_VALUE;
    let l2 = Number.MIN_VALUE;
    let r1 = Number.MAX_VALUE;
    let r2 = Number.MAX_VALUE;

    if (mid1 < n1) r1 = arr1[mid1];
    if (mid2 < n2) r2 = arr2[mid2];
    if (mid1 - 1 >= 0) l1 = arr1[mid1 - 1];
    if (mid2 - 1 >= 0) l2 = arr2[mid2 - 1];

    if (l1 <= r2 && l2 <= r1) {
      if (n % 2 == 1) return Math.max(l1, l2);
      else return (Math.max(l1, l2) + Math.min(r1, r2)) / 2.0;
    } else if (l1 > r2) high = mid1 - 1;
    else low = mid1 + 1;
  }

  return 0;
}

let a = [1, 4, 7, 10, 12];
let b = [2, 3, 6, 15];

console.log(medianOfTwoSortedArraysOptimal(a, b));
