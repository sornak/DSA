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

// TC - 0(N)+(2NlogN) SC - 0(N)
function StartingPointofLoopBrute(head) {
  if (!head) return null;

  let visited = new Map();
  let temp = head;
  while (temp) {
    if (visited.has(temp)) {
      return temp;
    }
    visited.set(temp, true);
    temp = temp.next;
  }

  return NULL;
}

// TC - 0(N) SC - 0(1)

function StartingPointofLoopOptimal(head) {
  if (!head) return null;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      slow = head;
      while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }

  return NULL;
}

let arr = [9, 4, 5, 6, 8, 9];
let head = ArraytoList(arr);
let newHead = StartingPointofLoopOptimal(head);
console.log("mideeleE", newHead);
