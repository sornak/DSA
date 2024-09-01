function MergeTwoSortedArraysWithoutSpaceBrute(arr1, arr2) {
  //TC - 0(m+n) SC - 0(m+n)
  let m = arr1.length;
  let n = arr2.length;
  let arr3 = new Array(m + n);
  let left = 0;
  let right = 0;
  let index = 0;
  while (left < m && right < n) {
    if (arr1[left] <= arr2[right]) {
      arr3[index++] = arr1[left++];
    } else {
      arr3[index++] = arr2[right++];
    }
  }

  while (left < m) {
    arr3[index++] = arr[left++];
  }

  while (right < n) {
    arr3[index++] = arr2[right++];
  }

  for (let i = 0; i < n + m; i++) {
    if (i < m) arr1[i] = arr3[i];
    else arr2[i - m] = arr3[i];
  }

  return arr2;
}

function MergeTwoSortedArraysWithoutSpaceOptimal1(arr1, arr2) {
  //TC - 0(min(m,n))+0(nlogn)+0(mlogn) SC - 0(1)
  let n = arr1.length;
  let m = arr2.length;
  let left = n - 1;
  let right = 0;

  while (left >= 0 && right < m) {
    if (arr1[left] > arr2[right]) {
      [arr1[left], arr2[right]] = [arr2[right], arr1[left]];
      left--;
      right++;
    } else {
      break;
    }
  }

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
}

function swapIfGreater(arr1, arr2, ind1, ind2) {
  if (arr1[ind1] > arr2[ind2]) {
    [arr1[ind1], arr2[ind2]] = [arr2[ind2], arr1[ind1]];
  }
}

function MergeTwoSortedArraysWithoutSpaceOptimal2(arr1, arr2) {
  // gap method from shell sorting techinque
  let n = arr1.length;
  let m = arr2.length;
  const len = n + m;
  let gap = Math.ceil(len) / 2;
  while (gap > 0) {
    let left = 0;
    let right = left + gap;
    while (right < len) {
      //arr1 and arr2
      if (left < n && right >= n) {
        swapIfGreater(arr1, arr2, left, right - n);
      }
      //arr2 and arr2
      else if (left >= n) {
        swapIfGreater(arr2, arr2, left - n, right - n);
      }
      //arr1 and arr1
      else {
        swapIfGreater(arr1, arr1, left, right);
      }
    }
  }
}

let arr = [1, 3, 6];
let arr1 = [2, 4, 5, 7];
console.log(MergeTwoSortedArraysWithoutSpaceOptimal(arr, arr1));
