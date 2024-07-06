/* With out Javascript InBuild */

function TrappingRainWater(arr) {
  let n = arr.length;
  let leftmax = [];
  let rightmax = [];
  let waterlevel = 0;

  leftmax[0] = arr[0];
  for (let i = 1; i < n; i++) {
    leftmax[i] = Math.max(arr[i], leftmax[i - 1]);
  }

  rightmax[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightmax[i] = Math.max(arr[i], rightmax[i + 1]);
  }

  for (let i = 0; i < n; i++) {
    waterlevel += Math.min(leftmax[i], rightmax[i]) - arr[i];
  }

  return waterlevel;
}

let arr = [3, 0, 1, 0, 4, 0, 2];
console.log("ress", TrappingRainWater(arr));

/* 
  can't able to store anything at the last index

  calcualte left & rightmax for each index

  Need Minimum of the above both

  Needs to remove the already occupied
*/
