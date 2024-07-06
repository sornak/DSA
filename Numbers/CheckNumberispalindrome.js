/* With out Javascript InBuild */

function CheckNumberispalindrome(number) {
  if (number < 0) return 0;

  let original = number;
  let reverse = 0;

  while (number > 0) {
    reverse = reverse * 10 + (number % 10);
    number = Math.floor(number / 10);
  }
  return original === reverse ? 1 : 0;
}

/* With Javascript InBuild */
function CheckNumberispalindrome1(number) {
  let str = number.toString();
  let reverse_str = str.split("").reverse().join("");
  return str === reverse_str;
}

let Num = 16461;
let Result = CheckNumberispalindrome1(Num);
console.log("Num " + Num, Result);

/* Explanation (Without inbuilt library)

 1) have variable to store original & reversed numbers

 2) while loop needs to run until number>0 met

 3) assign reverse with reverse*10 with Number%10 (will get last digit)

 4) assign number with number/10 when check Math.floor for this will return remaining numbers after the left over one digit 


*/
