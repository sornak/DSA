class ListNode {
  constructor(val, next, back) {
    this.val = val;
    this.next = next;
    this.back = back;
  }
}

function printList(head) {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
}

function ArraytoList(arr) {
  let head = new ListNode(arr[0], null, null);
  let prev = head;

  for (let i = 1; i < arr.length; i++) {
    let temp = new ListNode(arr[i], null, prev);
    prev.next = temp;
    prev = temp;
  }

  return head;
}

// TC - 0(N) SC - 0(1)

function DeleteallOuccrance(head, k) {
  let temp = head;
  while (temp) {
    if (temp.val == k) {
      if (temp == head) {
        head = head.next;
      }

      let nextnode = temp.next;
      let prevnode = temp.back;
      if (nextnode) nextnode.back = prevnode;
      if (prevnode) prevnode.next = nextnode;
      temp = temp.next;
    } else {
      temp = temp.next;
    }
  }

  return head;
}

let arr = [10, 1, 10, 10, 10, 8, 9, 10];
let head = ArraytoList(arr);
head = DeleteallOuccrance(head, 10);
printList(head);
