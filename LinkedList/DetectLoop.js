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
function DetectLoopBrute(head) {
  if (!head || !head.next) return null;

  let temp = head;
  let visited = new Map();
  while (temp) {
    if (visited.has(temp)) return true;
    visited.set(temp, true);
    temp = temp.next;
  }
  return false;
}

// TC - 0(N) SC - 0(1)
function DetectLoopOptimal(head) {
  if (!head || !head.next) return null;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) return true;
  }

  return false;
}

let arr = [9, 4, 5, 6, 8, 9];
let head = ArraytoList(arr);
let newHead = MiddleofLinkListBrute(head);
console.log("mideeleE", newHead);
