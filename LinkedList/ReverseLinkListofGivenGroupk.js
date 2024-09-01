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

// TC - 0(2n) SC - 0(1)

function ReverseLinkListofGroupK(head, k) {
  let temp = head;
  let prevnode = null;
  while (temp) {
    let kthnode = findkthnode(temp, k);
    if (!kthnode) {
      if (prevnode) {
        prevnode.next = temp;
      }
      break;
    }
    let nextnode = kthnode.next;
    kthnode.next = null;
    Reverse(temp);
    if (temp == head) head = kthnode;
    else {
      prevnode.next = kthnode;
    }
    prevnode = temp;
    temp = nextnode;
  }
  return head;
}

function findkthnode(temp, k) {
  k -= 1;
  while (temp && k > 0) {
    k--;
    temp = temp.next;
  }
  return temp;
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

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let head1 = ArraytoList(arr1);

head = ReverseLinkListofGroupK(head1, 3);
printList(head);
