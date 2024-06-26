/* With out Javascript InBuild */

function RemoveDuplicates(str) {
  let n = str.length;
  let hashmap = {};
  let result = [];
  for (let i = 0; i < n; i++) {
    if (!hashmap[str[i]]) {
      hashmap[str[i]] = true;
      result.push(str[i]);
    }
  }
  return result.join("");
}

/* With Javascript InBuild */

function RemoveDuplicates(str) {
  let cnv_str = str.split("");
  //console.log("dfd", new Set(cnv_str));
  let rearr = cnv_str.filter((item, index) => cnv_str.indexOf(item) == index);
  return rearr.join("");
}

let string = "soorrnnnaaaa";
let Result = RemoveDuplicates(string);
console.log("string " + string, Result);

/* Explanation (Without inbuilt library)

  1) Create a hashmap to mark the already visited item. if not that element in hashmap push ito hashmap and array

  2) hashmap push is to chekc that item is already visited item or not

*/
