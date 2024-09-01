function ReversePairsBrute(arr) {
  // TC - 0(N2) Sc - 0(1)
  let n = arr.length;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > 2 * arr[j]) {
        cnt = cnt + 1;
      }
    }
  }
  return cnt;
}

function CountPairs(arr, low, mid, high) {
  let right = mid + 1;
  let cnt = 0;
  for (let i = low; i <= mid; i++) {
    while (right <= high && arr[i] > 2 * arr[right]) right++;
    cnt += right - (mid + 1);
  }
  return cnt;
}

function MS(arr, low, high) {
  let cnt = 0;
  if (low >= high) return cnt;
  let mid = Math.floor((low + high) / 2);
  cnt += MS(arr, low, mid);
  cnt += MS(arr, mid + 1, high);
  cnt += CountPairs(arr, low, mid, high);
  Merge(arr, low, mid, high);
  return cnt;
}

function Merge(arr, low, mid, high) {
  let left = low;
  let right = mid + 1;
  let temp = [];
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

function ReversePairsOptimal(arr) {
  //TC - O(2N*logN) SC - 0(N)
  let n = arr.length;
  return MS(arr, 0, n - 1);
}
let arr = [1, 3, 2, 3, 1];
console.log(ReversePairsOptimal(arr));
