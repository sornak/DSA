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

// TC - 0(N) SC - 0(1)
function DeleteDuplicatefromSorted(head, k) {
  if (!head || !head.next) return head;
  let temp = head;
  while (temp && temp.next) {
    if (temp.val === temp.next.val) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }
  return head;
}

let arr = [1, 2, 2, 3, 3, 3];
let head = ArraytoList(arr);
head = DeleteDuplicatefromSorted(head, 2);
printList(head);
