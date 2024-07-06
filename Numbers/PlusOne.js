function PlusOne(digits) {
  let n = digits.length;
  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] != 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
}

function PlusOne1(digits) {
  let num = BigInt(digits.join("")) + 1n;
  return Array.from(String(num), Number);
}

let numer = [1, 2, 3, 9];
let Result = PlusOne1(numer);
console.log(Result);

/* Explanation (Without inbuilt library)

  1) Needs to add +1 so loop start from last decrement loop

  2) if the loop elements is not equal to 9 then increment and return or else assign 0 for taht and proceed the loop proceed

  3) if the loop exit with out return then it will be lkie all add then unshift 1 which add 1 to start

*/
