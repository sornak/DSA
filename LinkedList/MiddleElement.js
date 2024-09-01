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

// TC - 0(N)+(N/2) SC - 0(1)
function MiddleofLinkListBrute(head) {
  if (!head) return null;

  let count = 0;
  let temp = head;
  while (temp) {
    temp = temp.next;
    count++;
  }
  let midnode = Math.floor(count / 2 + 1);
  temp = head;
  while (temp) {
    midnode--;
    if (midnode == 0) return temp.val;
    temp = temp.next;
  }

  return -1;
}

// TC - 0(N) SC - 0(1)

function MiddleofLinkListOptimal(head) {
  if (!head) return null;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

let arr = [9, 4, 5, 6, 8, 9];
let head = ArraytoList(arr);
let newHead = MiddleofLinkListBrute(head);
console.log("mideeleE", newHead);
