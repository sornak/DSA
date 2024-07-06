function LeftLessRightMore(arr) {
  let n = arr.length;
  let Left_max = [];
  let Right_max = [];

  Left_max[0] = arr[0];
  for (let i = 1; i < n; i++) {
    Left_max[i] = Math.max(arr[i - 1], Left_max[i - 1]);
  }
  console.log("leftmax", Left_max);

  Right_max[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    Right_max[i] = Math.max(arr[i + 1], Right_max[i + 1]);
  }

  for (i = 0; i < n; i++) {
    if (arr[i] > Left_max[i] && arr[i] < Right_max[i]) {
      return arr[i];
    }
  }
}

let arr = [4, 3, 2, 1, 5, 9, 8, 7];
let result = LeftLessRightMore(arr);
console.log("leftlessrightmore", result);
