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

// TC - 0(3n) SC - 0(1)

function Add1toNumberBrute(head1) {
  let head = Reverse(head1);
  let temp = head;
  let carry = 1;
  while (temp) {
    temp.val = temp.val + carry;
    if (temp.val < 10) {
      carry = 0;
      break;
    } else {
      temp.val = 0;
      carry = 1;
    }

    temp = temp.next;
  }

  if (carry == 1) {
    let Newnode = new ListNode(1);
    head = Reverse(head);
    Newnode.next = head;
    return Newnode;
  }

  head = Reverse(head);
  return head;
}

function Reverse(head) {
  if (!head || !head.next) return head;
  let temp = head;
  let prev = null;
  while (temp) {
    let front = temp.next;
    temp.next = prev;
    prev = temp;
    temp = front;
  }
  return prev;
}

// TC - 0(N) SC - 0(N)

function Add1toNumberOptimal(head) {
  let carry = helper(head);
  if (carry == 1) {
    let Newnode = new ListNode(1);
    Newnode.next = head;
    return Newnode;
  }
  return head;
}

function helper(head) {
  let temp = head;
  if (!temp) return 1;
  carry = helper(temp.next);
  temp.val = temp.val + carry;
  if (temp.val < 10) return 0;
  temp.val = 0;
  return 1;
}

let arr1 = [9, 1, 4, 6, 2];

let head1 = ArraytoList(arr1);

head = Add1toNumberOptimal(head1);
printList(head);
