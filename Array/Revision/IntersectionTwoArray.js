function IntersectionTwoArrayBrute(a1, a2) {
  let n1 = a1.length;
  let n2 = a2.length;

  let visited = new Array(n2).fill(0);
  let result = [];
  for (i = 0; i < n1; i++) {
    for (j = 0; j < n2; j++) {
      if (a1[i] == a2[j] && visited[j] == 0) {
        result.push(a1[i]);
        visited[j] = 1;
        break;
      }
      if (a2[j] > a1[i]) break;
    }
  }

  return result;
}

function IntersectionTwoArrayBetter(a1, a2) {
  let arr1 = new Set(a1);
  let arr2 = new Set(a2);

  let ans = [];

  for (let val of arr1) {
    if (arr2.has(val)) {
      ans.push(val);
    }
  }

  return ans;
}

function IntersectionTwoArrayOptimal(a1, a2) {
  let n1 = a1.length;
  let n2 = a2.length;

  let i = 0;
  let j = 0;
  let result = [];

  while (i < n1 && j < n2) {
    if (a1[i] < a2[j]) {
      i++;
    } else if (a2[j] < a1[i]) {
      j++;
    } else {
      if (result.length === 0 || result[result.length - 1] !== a[i]) {
        result.push(a[i]);
      }
      i++;
      j++;
    }
  }

  return result;
}

let a1 = [1, 2, 2, 3, 3, 4, 5, 6];
let a2 = [2, 3, 3, 5, 6, 6, 7];
let result = IntersectionTwoArrayBetter(a1, a2);
console.log("IntersectionTwoArrayOptimal", result);
