function CountInversionBrute(arr) {
  //TC - 0(n2) SC - 0(1)
  let n = arr.length;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        cnt++;
      }
    }
  }

  return cnt;
}

function Merge(arr, low, high) {
  if (low >= high) return;
  let mid = Math.floor((low + high) / 2);
  Merge(arr, low, mid);
  Merge(arr, mid + 1, high);
  MergeSort(arr, low, mid, high);
}

let cnttt = 0;
function MergeSort(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      cnttt += mid - left + 1;
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

function CountInversionOptimal(arr) {
  //TC - 0(nlogn) SC - 0(n)
  let n = arr.length;
  Merge(arr, 0, n - 1);
  return cnttt;
}

let arr = [5, 3, 2, 4, 1];
console.log(CountInversionOptimal(arr));
