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

let arr = [2, 2, 1, 1, 1, 2, 2];
let result = MajorityElement(arr);
console.log("majorityElement", result);

/*
    Note - it should be more than half of an array size; (7/2)=>3
 */
