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

// TC - 0(Max(n1,n2)) SC - 0(Max(n1,n2))

function Add2NumberBrute(head1, head2) {
  let dummyNode = new ListNode(-1);
  let curr = dummyNode;
  let t1 = head1;
  let t2 = head2;

  let carry = 0;

  while (t1 || t2) {
    let sum = carry;

    if (t1) sum += t1.val;
    if (t2) sum += t2.val;

    let Newnode = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);

    curr.next = Newnode;
    curr = curr.next;

    if (t1) t1 = t1.next;
    if (t2) t2 = t2.next;
  }

  if (carry) {
    let Newnode = new ListNode(carry);
    curr.next = Newnode;
  }

  return dummyNode.next;
}

let arr1 = [9, 9, 9, 9, 9, 9, 9];
let arr2 = [9, 9, 9, 9];

let head1 = ArraytoList(arr1);
let head2 = ArraytoList(arr2);

head = Add2NumberBrute(head1, head2);
printList(head);
