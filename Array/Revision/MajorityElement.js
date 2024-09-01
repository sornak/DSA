function MajorityElementBrute(arr) {
  let n = arr.length;
  let MajorityElem = Math.floor(n / 2);
  for (let i = 0; i < n; i++) {
    let cnt = 0;
    for (let j = 0; j < n; j++) {
      if (arr[j] == arr[i]) {
        cnt++;
      }
    }
    if (cnt > MajorityElem) {
      return arr[i];
    }
  }
  return -1;
}

function MajorityElementBetter(arr) {
  //TC - 0(n) SC - 0(n)
  let n = arr.length;
  let hashmap = {};
  let MajorityElem = Math.floor(n / 2);

  for (let i = 0; i < n; i++) {
    if (!hashmap[arr[i]]) {
      hashmap[arr[i]] = 1;
    } else {
      hashmap[arr[i]]++;
    }

    if (hashmap[arr[i]] > MajorityElem) {
      return arr[i];
    }
  }

  return -1;
}

function MajorityElementOptimal(arr) {
  //TC - 0(n) SC - 0(1)

  let n = arr.length;
  let cnt = 0;
  let ele = "";
  let MajorityElem = Math.floor(n / 2);

  for (let i = 0; i < n; i++) {
    if (cnt == 0) {
      ele = arr[i];
      cnt == 1;
    } else if (ele == arr[i]) {
      cnt++;
    } else {
      cnt--;
    }
  }

  let cnt1 = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] == ele) {
      cnt1++;
    }
  }

  if (cnt1 > MajorityElem) {
    return ele;
  }

  return -1;
}
function MajorityElement(arr) {
  let n = arr.length;
  let hashmap = {};
  let MajorityEle = Math.floor(n / 2);
  for (let i = 0; i < n; i++) {
    if (!hashmap[arr[i]]) {
      hashmap[arr[i]] = 1;
    } else {
      hashmap[arr[i]]++;
    }

    if (hashmap[arr[i]] > MajorityEle) {
      return arr[i];
    }
  }
  return -1;
}

let arr = [2, 2, 1, 1, 1, 2, 2, 1, 1];
let result = MajorityElementOptimal(arr);
console.log("majorityElement", result);

/*
    Note - it should be more than half of an array size; (7/2)=>3
 */
