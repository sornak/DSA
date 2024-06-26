/* With out Javascript InBuild */

function RemoveDuplicates(arr) {
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

function RemoveDuplicates(arr) {
  let remove_duplicate = new Set(arr);
  //return remove_duplicate;

  return arr.filter((item, index) => arr.indexOf(item) == index);
}

/* With Javascript InBuild */

let arr = [0, 0, 1, 1, 2, 2, 3, 3, 4];
let result = RemoveDuplicates(arr);
console.log("RemoveDuplicates", result);

/* Explanation (Without inbuilt library)

  1) Create a hashmap to mark the already visited item. if not that element in hashmap push ito hashmap and array

  2) hashmap push is to chekc that item is already visited item or not

*/
