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

//TC - 0(2n) SC -0(1)

function RotateaLL(head, k) {
  if (!head || !head.next) return head;
  let len = 1;
  let temp = head;
  while (temp && temp.next) {
    len++;
    temp = temp.next;
  }
  if (k % len == 0) return head;
  k = k % len;

  temp.next = head;
  let newLastNode = findnthnode(head, len - k);
  head = newLastNode.next;
  newLastNode.next = null;
  return head;
}

function findnthnode(temp, k) {
  let cnt = 1;
  while (temp) {
    if (cnt == k) return temp;
    cnt++;
    temp = temp.next;
    console.log(temp);
  }
  return temp;
}

let arr = [1, 2, 3, 4, 5];
let head = ArraytoList(arr);
head = RotateaLL(head, 2);
printList(head);
