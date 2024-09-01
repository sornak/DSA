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

function removeduplicates(head) {
  let temp = head;
  while (temp && temp.next) {
    let nextnode = temp.next;
    while (nextnode && nextnode.val == temp.val) {
      nextnode = nextnode.next;
    }
    temp.next = nextnode;
    if (nextnode) nextnode.back = temp;
    temp = temp.next;
  }

  return head;
}

let arr = [2, 3, 4, 4, 5, 6, 6, 7];
let head = ArraytoList(arr);
head = removeduplicates(head);
printList(head);
