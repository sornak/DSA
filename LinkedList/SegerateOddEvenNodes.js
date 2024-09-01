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

//TC - 0(2n) SC -0(n)
function SegerateOddEvenBrute(head) {
  if (!head || !head.next) return head;
  let temp = head;
  let arr = [];
  while (temp && temp.next) {
    arr.push(temp.val);
    temp = temp.next.next;
  }
  if (temp) arr.push(temp.val);
  temp = head.next;
  while (temp && temp.next) {
    arr.push(temp.val);
    temp = temp.next.next;
  }
  if (temp) arr.push(temp.val);
  i = 0;
  temp = head;
  while (temp) {
    temp.val = arr[i];
    temp = temp.next;
    i++;
  }

  return head;
}

//TC - 0(N) SC -0(1)
function SegerateOddEvenOptimal(head) {
  if (!head || !head.next) return head;
  let odd = head;
  let even = head.next;
  let evenHead = head.next;
  while (even && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;

    odd = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
}

//TC - 0(n) SC - 0(n)
function ReverseLinkListRecursion(head) {
  if (!head || !head.next) return head;
  let newHead = ReverseLinkListRecursion(head.next);
  let front = head.next;
  front.next = head;
  head.next = null;
  return newHead;
}

let arr = [9, 4, 5, 6, 8];
let head = ArraytoList(arr);
head = SegerateOddEvenOptimal(head);
printList(head);
