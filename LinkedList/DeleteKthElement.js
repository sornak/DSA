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

function deleteKthElement(ele) {
  let arr = [6, 1, 3, 6, 4, 5, 6];
  let head = ArraytoList(arr);
  if (head !== null && head.val === ele) {
    head = head.next;
  }
  let prev = null;
  let temp = head;
  while (temp) {
    if (temp.val === ele) {
      prev.next = temp.next;
    } else {
      prev = temp;
    }
    temp = temp.next;
  }

  return head;
}

let newHead = deleteKthElement(6);
printList(newHead);
