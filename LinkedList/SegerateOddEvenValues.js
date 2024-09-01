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

//TC - 0(N) SC -0(1)
function SegerateOddEvenOptimal(head) {
  if (!head || !head.next) return head;

  let oddHead = new ListNode(-1);
  let evenHead = new ListNode(-1);

  let oddTail = oddHead;
  let evenTail = evenHead;

  let curr = head;

  while (curr) {
    let temp = curr;
    curr = curr.next;
    temp.next = null;

    if (temp.val % 2 != 0) {
      oddTail.next = temp;
      oddTail = temp;
    } else {
      evenTail.next = temp;
      evenTail = temp;
    }
  }

  evenTail.next = oddHead.next;

  return evenHead.next;
}

let arr = [9, 4, 5, 6, 8];
let head = ArraytoList(arr);
head = SegerateOddEvenOptimal(head);
printList(head);
