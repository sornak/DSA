function SelectionSort(arr) {
  let n = arr.length;
  for (i = 0; i < n - 1; i++) {
    let Minimum = i;
    for (j = i; j < n; j++) {
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
  for (i = 0; i < n - 1; i++) {
    let didSwap = 0;
    for (j = 0; j <= n - i - 1; j++) {
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

function InsertionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
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

function MS(arr, low, high) {
  if (low >= high) return;
  let mid = Math.floor((low + high) / 2);

  MS(arr, low, mid);
  MS(arr, mid + 1, high);
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

function MergeSort(arr) {
  MS(arr, 0, arr.length - 1);
  return arr;
}

function partition(arr, low, high) {
  let pivot = arr[low];

  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }

    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }

    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  let temp = arr[low];
  arr[low] = arr[j];
  arr[j] = temp;

  return j;
}

function QS(arr, low, high) {
  if (low >= high) return;

  let pIndex = partition(arr, low, high);
  QS(arr, low, pIndex - 1);
  QS(arr, pIndex + 1, high);
}

function QuickSort(arr) {
  QS(arr, 0, arr.length - 1);
  return arr;
}

let arr = [13, 46, 24, 52, 20, 9];
console.log(QuickSort(arr));
