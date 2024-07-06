/* With out Javascript InBuild */

function PalindromeCheck(str) {
  let n = str.length;
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    if (str.charAt(low) != str.charAt(high)) {
      return false;
    }
    low++;
    high--;
  }
  return true;
}

/* With Javascript InBuild */

function PalindromeCheck1(str) {
  let rev = str.split("").reverse().join("");
  return rev === str;
}

let string = "abcba";
console.log("palindr", PalindromeCheck1(string));

/* Explanation (Without inbuilt library)

  1) simple idea here needs to check last with first like that low as 0 high as length-1; if not then return false loop will continue by next low and previosu high

*/
