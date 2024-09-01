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

// TC - 0(N+NlogN+N) SC - 0(N)
function SortLinkListBrute(head) {
  let n = 0;
  if (!head || !head.next) return head;
  let temp = head;
  let arr = [];
  while (temp) {
    arr.push(temp.val);
    temp = temp.next;
  }
  arr.sort((a, b) => a - b);
  temp = head;
  i = 0;
  while (temp) {
    temp.val = arr[i];
    i++;
    temp = temp.next;
  }
  return head;
}

//TC - 0(logN*(N+N/2)) SC -0(1)
function SorLinkListOptimal(head) {
  if (!head || !head.next) return head;
  let middle = findmiddle(head);
  let left = head;
  let right = middle.next;
  middle.next = null;
  left = SorLinkListOptimal(left);
  right = SorLinkListOptimal(right);
  return MergeTwoList(left, right);
}

function findmiddle(head) {
  let slow = head;
  let fast = head;
  fast = fast.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function MergeTwoList(left, right) {
  let dummyNode = new ListNode(-1);
  let temp = dummyNode;
  while (left && right) {
    if (left.val < right.val) {
      temp.next = left;
      temp = left;
      left = left.next;
    } else {
      temp.next = right;
      temp = right;
      right = right.next;
    }
  }
  if (left) temp.next = left;
  else temp.next = right;

  return dummyNode.next;
}

let arr = [9, 4, 5, 6, 8];
let head = ArraytoList(arr);
head = SorLinkListOptimal(head);
printList(head);
