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
function ReverseLinkedListBrute(head) {
  if (!head || !head.next) return head;
  let st = [];
  let temp = head;
  while (temp) {
    st.push(temp.val);
    temp = temp.next;
  }
  temp = head;
  while (temp) {
    temp.val = st.pop();
    temp = temp.next;
  }

  return head;
}

//TC - 0(N) SC -0(1)
function ReverseLinkedListOptimal(head) {
  if (!head || !head.next) return head;
  let temp = head;
  let prev = null;
  while (temp) {
    console.log(temp);
    console.log(temp.next);
    console.log(prev);
    console.log("..........");
    let front = temp.next;
    temp.next = prev;
    prev = temp;
    temp = front;
  }
  return prev;
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

let arr = [1, 2, 3];
let head = ArraytoList(arr);
head = ReverseLinkedListOptimal(head);
printList(head);
