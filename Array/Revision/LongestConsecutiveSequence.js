function linearSearch(a, num) {
  let n = a.length;
  for (let i = 0; i < n; i++) {
    if (a[i] == num) return true;
  }
  return false;
}
function LongestConsecutiveSequenceBrute(arr) {
  // TC - 0(n2) SC -0(1)
  let n = arr.length;
  let longest = 1;
  for (let i = 0; i < n; i++) {
    let x = arr[i];
    let cnt = 1;
    while (linearSearch(arr, x + 1) == true) {
      cnt += 1;
      x += 1;
    }

    longest = Math.max(longest, cnt);
  }

  return longest;
}

function LongestConsecutiveSequenceBetter(arr) {
  // TC - 0(nlogn) SC -0(1)

  let n = arr.length;
  let longest = 1;
  let cnt = 0;
  let LastMin = Number.MIN_SAFE_INTEGER;

  arr.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (arr[i] - 1 == LastMin) {
      cnt += 1;
      LastMin = arr[i];
    } else if (LastMin != arr[i]) {
      cnt = 1;
      LastMin = arr[i];
    }

    longest = Math.max(longest, cnt);
  }

  return longest;
}

function LongestConsecutiveSequenceOptimal(arr) {
  // TC - 0(3n) SC -0(1)

  let n = arr.length;
  if (n == 0) return 0;
  let longest = 1;
  let set = new Set(arr);

  for (let it of set) {
    if (!set.has[it - 1]) {
      let cnt = 1;
      let x = it;

      while (set.has(x + 1)) {
        cnt += 1;
        x += 1;
      }

      longest = Math.max(longest, cnt);
    }
  }

  return longest;
}

let array = [100, 200, 1, 2, 3, 4];
console.log(LongestConsecutiveSequenceOptimal(array));
