function RemoveDuplicateBrute(arr) {
  let n = arr.length;
  let set = new Set();
  for (let i = 0; i < n; i++) {
    set.add(arr[i]);
  }
  return Array.from(set);
}

function RemoveDuplicatesOptimal1(arr) {
  let n = arr.length;
  let i = 0;
  for (let j = 1; j < n; j++) {
    if (arr[i] != arr[j]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }
  return arr.slice(0, i + 1);
}

function RemoveDuplicatesOptimal2(arr) {
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

let arr = [1, 1, 2];
let result = RemoveDuplicatesOptimal1(arr);
console.log("RemoveDuplicates", result);
