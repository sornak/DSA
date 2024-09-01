function FourSumBrute(arr, target) {
  let n = arr.length;
  let ans = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        for (let l = k + 1; l < n; l++) {
          if (arr[i] + arr[j] + arr[k] + arr[l] == target) {
            let temp = [arr[i], arr[j], arr[k], arr[l]];
            temp.sort((a, b) => a - b);
            ans.push(temp);
          }
        }
      }
    }
  }

  let st = new Set(ans.map(JSON.stringify));
  return Array.from(st).map(JSON.parse);
}

function FourSumBetter(arr, target) {
  let n = arr.length;
  let ans = [];
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 2; j++) {
      let hashmap = {};
      for (let k = j + 1; k < n; k++) {
        let sum = target - (arr[i] + arr[j] + arr[k]);
        if (hashmap[sum]) {
          let temp = [arr[i], arr[j], arr[k], sum];
          temp.sort((a, b) => a - b);
          ans.push(temp);
        } else {
          hashmap[arr[k]] = true;
        }
      }
    }
  }

  let st = new Set(ans.map(JSON.stringify));
  return Array.from(st).map(JSON.parse);
}

function FourSumOptimal(arr, target) {
  // TC - 0(n2) sc - 0(n)
  let n = arr.length;
  arr.sort((a, b) => a - b);
  let ans = [];
  for (let i = 0; i < n; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    for (let j = i + 1; j < n; j++) {
      if (j > i + 1 && arr[j] === arr[j - 1]) continue;
      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        let sum = arr[i] + arr[j] + arr[left] + arr[right];
        if (sum == target) {
          ans.push([arr[i], arr[j], arr[left], arr[right]]);
          left++;
          right--;
          while (left < right && arr[left] == arr[left - 1]) left++;
          while (left < right && arr[right] == arr[right + 1]) right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return ans;
}

let nums = [4, 3, 3, 4, 4, 2, 1, 2, 1, 1];
console.log(FourSumOptimal(nums, 9));
