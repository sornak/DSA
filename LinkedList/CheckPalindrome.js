class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
function ArraytoList(arr) {
  let head = new ListNode(arr[0]);
  let mover = head;
  for (let i = 1; i < arr.length; i++) {
    let temp = new ListNode(arr[i]);
    mover.next = temp;
    mover = temp;
  }

  return head;
}

function printList(head) {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
}

// TC - 0(N*2*log(N)) SC - 0(N)
function CheckPalindromeBrute(head) {
  if (!head || !head.next) return head;
  let temp = head;
  let st = [];
  while (temp) {
    st.push(temp.val);
    temp = temp.next;
  }
  temp = head;
  while (temp) {
    if (temp.val !== st.pop()) {
      return false;
    }
    temp = temp.next;
  }
  return true;
}

// TC - 0(2N) SC - 0(1)
function CheckPalindromeOptimal(head) {
  if (!head || !head.next) return true;

  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let newHead = reverse(slow.next);
  let first = head;
  let second = newHead;

  while (second) {
    if (first.next != second.next) {
      reverse(newHead);
      return false;
    }
    first = first.next;
    second = second.next;
  }
  reverse(newHead);
  return true;
}

function reverse(head) {
  if (!head || !head.next) return head;

  let temp = head;
  let prev = null;
  while (temp) {
    let front = temp.next;
    temp.next = prev;
    prev = temp;
    temp = front;
  }
  return prev;
}

let arr = [1, 5, 2, 5, 1];
let head = ArraytoList(arr);
let newHead = CheckPalindromeOptimal(head);
console.log("mideeleE", newHead);
