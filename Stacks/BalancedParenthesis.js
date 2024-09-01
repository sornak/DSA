// TC - 0(N) SC - 0(N)
function BalancedParenthesisBrute(string) {
  let stack = [];
  for (char of string) {
    if (char == "(" || char == "{" || char == "[") {
      stack.push(char);
    } else {
      if (stack.length == 0) return false;
      let ch = stack.pop();
      if (
        (ch == "(" && char == ")") ||
        (ch == "[" && char == "]") ||
        (ch == "{" && char == "}")
      ) {
        continue;
      } else {
        return false;
      }
    }
  }

  return stack.length == 0;
}

let str = "(()[]{{}})";
console.log(BalancedParenthesisBrute(str));
