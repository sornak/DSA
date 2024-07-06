/* Back Tracking */
function f(i, n) {
  if (i < 1) return;
  f(i - 1, n);
  console.log(i);
}
function a(n) {
  f(n, n);
}
//a(3);

function f1(i, n) {
  if (i > n) return;
  f1(i + 1, n);
  console.log(i);
}
function b(n) {
  f1(1, n);
}
//b(3);

/* Parameterized */
function sumrecursionparameterized(n, sum) {
  if (n < 1) {
    console.log(sum);
    return;
  }
  sumrecursionparameterized(n - 1, sum + n);
}

function sumofnospareme(n) {
  sumrecursionparameterized(n, 0);
}

function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}

function factt(n) {
  return factorial(n);
}

function reverse(i, arr, n) {
  if (i >= n / 2) return;
  swap(arr[i], arr[n - i - 1]);
  reverse(i + 1, arr, n);
}

function reversebyrecursion(arr) {
  let n = arr.length;
  reverse(0, arr, n);
}

console.log(reversebyrecursion([2, 5, 7, 8, 9]));
