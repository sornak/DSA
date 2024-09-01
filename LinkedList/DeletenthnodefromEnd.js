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

// TC - 0(2N) SC - 0(1)
function DeletenthnodeBrute(head, k) {
  let cnt = 0;
  if (!head || !head.next) return head;
  let temp = head;
  while (temp) {
    cnt++;
    temp = temp.next;
  }
  if (k == cnt) {
    let newhead = head.next;
    return newhead;
  }
  let res = cnt - k;
  temp = head;
  while (temp) {
    res--;
    if (res == 0) break;
    temp = temp.next;
  }
  temp.next = temp.next.next;
  return head;
}

//TC - 0(N) SC -0(1)
function DeletenthnodeOptimal(head, k) {
  let fast = head;
  let slow = head;
  for (let i = 0; i < k; i++) {
    fast = fast.next;
    if (!fast) return head.next;
    while (fast.next) {
      fast = fast.next;
      slow = slow.next;
    }
  }
  slow.next = slow.next.next;
  return head;
}

let arr = [9, 4, 5, 6, 8];
let head = ArraytoList(arr);
head = DeletenthnodeOptimal(head, 2);
printList(head);
