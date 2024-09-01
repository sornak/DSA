function UnionTwoArrayBrute(a1, a2) {
  //SC 0(n+n1)  TC 0(n+n1)
  let n = a1.length;
  let n1 = a2.length;
  let Union = new Set();

  /* 0(n) */
  for (let i = 0; i < n; i++) {
    Union.add(a1[i]);
  }

  /* 0(n1) */

  for (let i = 0; i < n1; i++) {
    Union.add(a2[i]);
  }

  /*0(m)*/
  return Array.from(Union);
}

function UnionTwoArrayOptimal(a1, a2) {
  //SC 0(n+n1)  TC 0(n+n1)
  let n = a1.length;
  let n1 = a2.length;
  let i = 0;
  let j = 0;
  let Union = [];

  while (i < n && j < n1) {
    if (a1[i] <= a2[j]) {
      if (Union.length == 0 || Union[Union.length - 1] != a1[i]) {
        Union.push(a1[i]);
      }

      i++;
    } else {
      if (Union.length == 0 || Union[Union.length - 1] != a2[j]) {
        Union.push(a2[j]);
      }

      j++;
    }
  }

  while (i < n) {
    if (Union.length == 0 || Union[Union.length - 1] != a1[i]) {
      Union.push(a1[i]);
    }

    i++;
  }

  while (j < n1) {
    if (Union.length == 0 || Union[Union.length - 1] != a2[j]) {
      Union.push(a2[j]);
    }

    j++;
  }

  return Union;
}

let a1 = [1, 1, 2, 3, 4, 5];
let a2 = [2, 3, 4, 5, 6, 7];
let result = UnionTwoArrayOptimal(a1, a2);
console.log("UnionTwoArrayOptimal", result);
