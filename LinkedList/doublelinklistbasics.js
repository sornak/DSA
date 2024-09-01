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

function DeleteHead(head) {
  if (!head || !head.next) return null;

  let prev = head;
  head = head.next;
  head.back = null;
  prev.next = null;

  return head;
}

function DeleteTail(head) {
  if (!head || !head.next) return null;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
  }
  let newTail = tail.back;
  newTail.next = null;
  tail.back = null;
  return head;
}

function DeletekthpositionElement(head, k) {
  if (head == null) return null;
  let cnt = 1;
  let temp = head;

  while (temp != null) {
    if (cnt == k) break;
    temp = temp.next;
    cnt++;
  }

  let prev = temp.back;
  let front = temp.next;

  if (prev == null && front == null) {
    return null;
  } else if (prev == null) {
    return DeleteHead(head);
  } else if (front == null) {
    return DeleteTail(head);
  }

  prev.next = front;
  front.back = prev;
  temp.next = null;
  temp.back = null;
  return head;
}

function DeletekthElement(k) {
  let arr = [12, 5, 8, 7];
  let head = ArraytoList(arr);
  if (head == null) return null;
  let temp = head;

  while (temp != null && temp.value !== k) {
    temp = temp.next;
  }

  if (temp == null) return head;

  // Delete the node
  if (prev == null) {
    // Node to be deleted is the head
    head = next;
    if (next) next.back = null;
  } else {
    // Node to be deleted is not the head
    prev.next = next;
    if (next) next.back = prev;
  }

  // Clear the deleted node's pointers
  temp.next = null;
  temp.back = null;

  return head;
}

function insertionBeforeHead(head, ele) {
  let newHead = new ListNode(ele, head, null);
  head.back = newHead;
  return newHead;
}

function insertionAfterHead(head, ele) {
  let next = head.next;
  let newHead = new ListNode(ele, next, head);
  head.next = newHead;
  return head;
}

function insertionBeforeTail(head, ele) {
  let tail = head;
  while (tail.next) {
    tail = tail.next;
  }

  let prev = tail.back;
  let newTail = new ListNode(ele, tail, prev);
  prev.next = newTail;
  return head;
}

function insertionAfterTail(head, ele) {
  let tail = head;
  while (tail.next) {
    tail = tail.next;
  }

  let newTail = new ListNode(ele, null, tail);
  tail.next = newTail;
  return head;
}

function insertBeforePosition(head, k, ele) {
  if (!head) return head;
  if (k == 1) {
    return insertionBeforeHead(head, ele);
  }
  let temp = head;
  let cnt = 1;
  while (temp) {
    if (cnt == k) break;
    temp = temp.next;
    cnt++;
  }
  let prev = temp.back;
  let newNode = new ListNode(ele, temp, prev);
  prev.next = newNode;
  temp.back = newNode;
  return head;
}

function insertBeforeElement(head, ele) {
  let prev = head.back;
  let newNode = new ListNode(ele, head, prev);
  prev.next = newNode;
  head.back = newNode;

  return head;
}

let arr = [6, 1, 3, 4];
let head = ArraytoList(arr);
head = insertBeforeElement(head.next, 16);
printList(head);
