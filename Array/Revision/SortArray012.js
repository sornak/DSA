function SortArrayBrute(arr) {
  let n = arr.length;
  MergeSort(arr, 0, n - 1);
  return arr;
}

function SortArrayBetter(arr) {
  // TC = 0(N)+0(N) SC - 0(1)
  let n = arr.length;
  let cnt0 = 0,
    cnt1 = 0,
    cnt2 = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] == 0) cnt0++;
    else if (arr[i] == 1) cnt1++;
    else cnt2++;
  }

  for (let i = 0; i < cnt0; i++) {
    arr[i] = 0;
  }

  for (let i = cnt0; i < cnt0 + cnt1; i++) {
    arr[i] = 1;
  }

  for (let i = cnt0 + cnt1; i < n; i++) {
    arr[i] = 2;
  }

  return arr;
}

function SortArrayOptimal(arr) {
  // TC = 0(N) SC - 0(1)

  let n = arr.length;
  let low = 0;
  let mid = 0;
  let high = n - 1;
  while (mid <= high) {
    if (arr[mid] == 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      high--;
    }
  }

  return arr;
}

function MergeSort(arr, low, high) {
  if (low >= high) return;

  let mid = Math.floor((low + high) / 2);

  MergeSort(arr, low, mid);
  MergeSort(arr, mid + 1, high);
  Merge(arr, low, mid, high);
}

function Merge(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= right) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

let arr = [2, 0, 2, 1, 1, 0];
console.log(SortArrayOptimal(arr));
