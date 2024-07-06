function SelectionSort(arr) {
  let n = arr.length;
  for (i = 0; i < n - 1; i++) {
    let Minimum = i;
    for (let j = i; j < n; j++) {
      if (arr[j] < arr[Minimum]) {
        Minimum = j;
      }
    }
    let temp = arr[Minimum];
    arr[Minimum] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

function BubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let didSwap = 0;
    for (let j = 0; j < n - i - 1; j++) {
      console.log("run");

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        didSwap = 1;
      }
    }
    if (didSwap == 0) {
      break;
    }
  }
  return arr;
}

function RecursiveBubbleSort(arr, n) {
  if (n == 1) return;
  for (i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  RecursiveBubbleSort(arr, n - 1);
  return arr;
}

function InsertionSort(arr) {
  let n = arr.length;
  for (i = 0; i < n; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }
  return arr;
}

function RecursiveInsertionSort(arr, i, n) {
  if (i == n) return;
  let j = i;
  while (j > 0 && arr[j - 1] > arr[j]) {
    let temp = arr[j - 1];
    arr[j - 1] = arr[j];
    arr[j] = temp;
    j--;
  }
  RecursiveInsertionSort(arr, i + 1, n);
  return arr;
}

function Merge(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] < arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = 0; i < temp.length; i++) {
    arr[low + i] = temp[i];
  }
}

function MS(arr, low, high) {
  while (low >= high) return;
  let mid = Math.floor((low + high) / 2);
  MS(arr, low, mid);
  MS(arr, mid + 1, high);
  Merge(arr, low, mid, high);
}

function MergeSort(arr) {
  let n = arr.length;
  MS(arr, 0, n - 1);
  return arr;
}

let arr = [13, 46, 24, 52, 20, 9];
console.log(RecursiveInsertionSort(arr, 0, 6));
