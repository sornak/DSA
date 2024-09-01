function reversestringbetweeneach(str) {
  let n = str.length;
  console.log(n);
  let ans = [];
  for (let i = n - 1; i >= 0; i--) {
    if (str[i] == "(" || str[i] == ")") {
      n--;
    }
    if (str[i] != "(" || str[i] != ")") {
      ans.push(str);
    }
  }

  return ans;
}

let s = "(abcd)";
console.log(reversestringbetweeneach(s));
