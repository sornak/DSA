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

// TC - 0(2n) SC - 0(n)
function ReverseDoubleLinkeListBrute(head) {
  let temp = head;
  let st = [];
  while (temp) {
    st.push(temp.val);
    temp = temp.next;
  }
  temp = head;
  while (temp) {
    temp = st.pop();
    temp = temp.next;
  }

  return head;
}

// TC - 0(n) SC -0(1)

function ReverseDoubleLinkeListOptimal(head) {
  if (!head || !head.next) {
    return head;
  }
  let temp = head;
  let prev = null;
  while (temp) {
    prev = temp.back;
    temp.back = temp.next;
    temp.next = prev;
    temp = temp.back;
  }

  return prev.back;
}

let arr = [6, 1, 3, 4];
let head = ArraytoList(arr);
head = ReverseDoubleLinkeListOptimal(head);
printList(head);
