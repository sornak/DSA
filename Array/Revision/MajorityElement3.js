function MajorityElementBrute(arr) {
  let n = arr.length;
  let Majority = Math.floor(n / 3);
  let ls = [];
  for (let i = 0; i < n; i++) {
    if (ls.length == 0 || ls[0] != arr[i]) {
      let cnt = 0;
      for (let j = 0; j < n; j++) {
        if (arr[i] == arr[j]) {
          cnt++;
        }
      }
      if (cnt > Majority) {
        ls.push(arr[i]);
      }
    }
    if (ls.length == 2) break;
  }

  return ls;
}
function MajorityElementBetter(arr) {
  // TC - 0(N) SC - 0(N)
  let n = arr.length;
  let Majority = Math.floor(n / 3);
  let hashmap = {};
  for (let i = 0; i < n; i++) {
    if (!hashmap[arr[i]]) {
      hashmap[arr[i]] = 1;
    } else {
      hashmap[arr[i]]++;
    }

    if (hashmap[arr[i]] > Majority) {
      return arr[i];
    }
  }

  return -1;
}

function MajorityElementOptimal(arr) {
  // TC - 0(N) SC - 0(1)
  let n = arr.length;
  let MajorityEle = Math.floor(n / 3);

  var cnt1 = 0;
  let ele1 = " ";
  var cnt2 = 0;
  let ele2 = " ";
  let ls = [];
  for (let i = 0; i < n; i++) {
    if (cnt1 == 0 && ele2 != arr[i]) {
      ele1 = arr[i];
      cnt1 = 1;
    } else if (cnt2 == 0 && ele1 != arr[i]) {
      ele2 = arr[i];
      cnt2 = 1;
    } else if (ele1 == arr[i]) cnt1++;
    else if (ele2 == arr[i]) cnt2++;
    else {
      cnt1--;
      cnt2--;
    }
  }

  var cnt1 = 0;
  var cnt2 = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] == ele1) {
      cnt1++;
    }

    if (arr[i] == ele2) {
      cnt2++;
    }
  }

  if (cnt1 > MajorityEle) {
    ls.push(ele1);
  }

  if (cnt2 > MajorityEle) {
    ls.push(ele2);
  }

  return ls;
}

let arr = [1, 2, 2, 3, 2, 4, 4, 4];
console.log(MajorityElementOptimal(arr));
