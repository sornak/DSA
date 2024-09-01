function RemoveDuplicatesfromString(str) {
  let result = [];
  let hashmap = {};
  for (let i = 0; i < str.length; i++) {
    if (!hashmap[str[i]]) {
      hashmap[str[i]] = true;
      result.push(str[i]);
    }
  }

  return result.join("");
}

let string = "soorrnnnaaaa";
let Result = RemoveDuplicatesfromString(string);
console.log("string " + string, Result);
