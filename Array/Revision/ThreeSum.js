function ThreeSumBrute(arr) {
  //TC - 0(n3) SC - 0(n)
  let n = arr.length;
  let ans = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] == 0) {
          let temp = [arr[i], arr[j], arr[k]];
          temp.sort((a, b) => a - b);
          ans.push(temp);
        }
      }
    }
  }

  let set = new Set(ans.map(JSON.stringify));
  ans = Array.from(set).map(JSON.parse);
  return set;
}

function ThreeSumBetter(arr) {
  let n = arr.length;
  let ans = [];

  // TC - 0(n2) SC - 0(n)

  for (let i = 0; i < n; i++) {
    let hashmap = {};
    for (let j = i + 1; j < n; j++) {
      let third = -(arr[i] + arr[j]);
      if (hashmap[third]) {
        let temp = [arr[i], arr[j], third];
        temp.sort((a, b) => a - b);
        ans.push(temp);
      } else {
        hashmap[arr[j]] = true;
      }
    }
  }

  let set = new Set(ans.map(JSON.stringify));
  ans = Array.from(set).map(JSON.parse);

  return ans;
}

function ThreeSumOptimal(arr) {
  // TC - 0(n2) SC - 0(1)

  let n = arr.length;
  let ans = [];
  arr.sort((a, b) => a - b);

  for (i = 0; i < n; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) continue;
    let j = i + 1;
    let k = n - 1;

    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        let temp = [arr[i], arr[j], arr[k]];
        ans.push(temp);
        j++;
        k--;
        while (j < k && arr[j] == arr[j - 1]) j++;
        while (j < k && arr[k] == arr[k + 1]) k--;
      }
    }
  }
  return ans;
}

let nums = [-1, 0, 1, 2, -1, -4];
console.log(ThreeSumOptimal(nums));
