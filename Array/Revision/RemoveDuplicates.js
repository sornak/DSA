function RemoveDuplicateBrute(arr) {
  // TC - 0(N) SC - 0(N)
  let n = arr.length;
  let set = new Set();
  for (let i = 0; i < n; i++) {
    set.add(arr[i]);
  }
  return Array.from(set);
}

function RemoveDuplicatesOptimal1(arr) {
  // TC - 0(N) SC - 0(1)
  let n = arr.length;
  let index = 1;
  for (let i = 1; i < n; i++) {
    if (arr[i] != arr[i - 1]) {
      arr[index] = arr[i];
      index++;
    }
  }
  arr.length = index - 1;
  return arr;
}

function RemoveDuplicatesOptimal2(arr) {
  // TC - 0(N) SC - 0(n)

  let n = arr.length;
  let hashmap = {};
  let result = [];

  for (let i = 0; i < n; i++) {
    if (!hashmap[arr[i]]) {
      hashmap[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  return result;
}

function RemoveDuplicatesInbuild(arr) {
  let remove_duplicate = new Set(arr);
  //return remove_duplicate;

  return arr.filter((item, index) => arr.indexOf(item) == index);
}

/* With Javascript InBuild */

let arr = [1, 1, 2, 4, 5, 6, 6, 7, 6];
let result = RemoveDuplicatesOptimal1(arr);
console.log("RemoveDuplicates", result);
