// TC - 0(N) SC - 0(1)
function RemoveOuterParthesis(string) {
  let result = "";
  let cnt = 0;
  for (char of string) {
    if (char == "(") {
      if (cnt > 0) {
        result += char;
      }
      cnt++;
    } else {
      cnt--;
      if (cnt > 0) {
        result += char;
      }
    }
    console.log(cnt);
  }
}

let string = "(())";
console.log("removeoutpar", RemoveOuterParthesis(string));
