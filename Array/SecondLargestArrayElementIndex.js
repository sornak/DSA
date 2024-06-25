/* With out Javascript InBuild */

function SecondLargestArrayElementIndex(arr) {
  let n = arr.length;
  let largestIndex = 0;
  let secondLargestIndex = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] != arr[largestIndex]) {
      if (arr[i] > arr[largestIndex]) {
        secondLargestIndex = largestIndex;
        largestIndex = i;
      } else if (arr[i] < arr[largestIndex]) {
        if (secondLargestIndex == -1 || arr[i] > arr[secondLargestIndex]) {
          secondLargestIndex = i;
        }
      }
    }
  }
  return secondLargestIndex;
}

function SecondLargestArrayElementIndex(arr) {
  let sortedArray = [...arr].sort((a, b) => b - a);
  return arr.indexOf(sortedArray[1]);
}

let arr = [20, 19, 136, 110, 12];
let result = SecondLargestArrayElementIndex(arr);
console.log("SecondLargestArrayElementIndex", result);

/* Explanation (Without inbuilt library)

  1) Assume 0th index have largest element.

  2) Have secondlargest as -1 as we have no idea initally

  3) have two condition looping if current element greater than largest in this replace largest with current index and second largets with already largest

  4) if current element is less than largest, needs to check if secondlargest==-1 or current element is greater than second largest index element if yes replace already existing secondlargest with current index

*/
