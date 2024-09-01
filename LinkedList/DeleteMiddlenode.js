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

// TC - 0(N+N/2) SC - 0(1)
function DeletemiddlenodeBrute(head) {
  let n = 0;
  if (!head || !head.next) return head;
  let temp = head;
  while (temp) {
    n++;
    temp = temp.next;
  }
  let mid = Math.floor(n / 2);
  temp = head;
  while (temp) {
    mid--;
    if (mid == 0) break;
    temp = temp.next;
  }
  temp.next = temp.next.next;
  return head;
}

//TC - 0(N/2) SC -0(1)
function DeletemiddlenodeOptimal(head) {
  let fast = head;
  let slow = head;
  fast = head.next.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  slow.next = slow.next.next;
  return head;
}

let arr = [9, 4, 5, 6, 8, 9];
let head = ArraytoList(arr);
head = DeletemiddlenodeOptimal(head, 2);
printList(head);
