class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function Basics() {
  let arr = [9, 4, 5, 6];
  let y = new ListNode(arr[1]);
  return y;
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

function TraversalinArray() {
  let arr = [9, 4, 5, 6];
  let head = ArraytoList(arr);
  let temp = head;
  while (temp) {
    console.log(temp.val);
    temp = temp.next;
  }
}

function LengthofLinkedList() {
  let arr = [9, 4, 5, 6];
  let head = ArraytoList(arr);
  let temp = head;
  let cnt = 0;
  while (temp) {
    temp = temp.next;
    cnt++;
  }

  return cnt;
}

function checkElementpresent(val) {
  let arr = [9, 4, 5, 6];
  let head = ArraytoList(arr);
  let temp = head;
  while (temp) {
    if (temp.val == val) return 1;
    temp = temp.next;
  }
  return 0;
}

function deleteLinkListHead() {
  let arr = [9, 4, 5, 6];
  let head = ArraytoList(arr);
  if (!head) return head;
  head = head.next;
  return head;
}

function insertLinkListHead(ele) {
  let arr = [9, 4, 5, 6];
  let head = ArraytoList(arr);
  return new ListNode(ele, head);
}

function deleteLinkListTail() {
  let arr = [9, 4, 5, 6];
  let head = ArraytoList(arr);
  if (!head || !head.next) return null;
  let temp = head;
  while (temp.next.next) {
    temp = temp.next;
  }
  temp.next = null;
  return head;
}

function insertLinkListTail(ele) {
  let arr = [9, 4, 5, 6];
  let head = ArraytoList(arr);
  if (!head) return new ListNode(ele);
  let temp = head;
  while (temp.next) {
    temp = temp.next;
  }
  temp.next = new ListNode(ele);
  return head;
}

function deleteKthPosition(k) {
  let arr = [9, 4, 5, 6];
  let head = ArraytoList(arr);
  if (!head) return null;
  let temp = head;

  if (k == 1) {
    head = head.next;
    return head;
  }
  let cnt = 1;
  let prev = null;
  while (temp) {
    if (cnt == k) {
      prev.next = prev.next.next;
      break;
    } else {
      prev = temp;
      temp = temp.next;
      cnt++;
    }
  }

  return head;
}

function insertkthPostition(k, ele) {
  let arr = [9, 4, 5, 6];
  let head = ArraytoList(arr);
  if (!head) {
    if (k == 1) {
      return new ListNode(ele);
    }
  }
  if (k == 1) {
    let temp = new ListNode(ele, head);
    return temp;
  }
  let temp = head;
  let cnt = 1;
  while (temp) {
    if (cnt == k - 1) {
      let x = new ListNode(ele);
      x.next = temp.next;
      temp.next = x;
      break;
    } else {
      temp = temp.next;
      cnt++;
    }
  }

  return head;
}

function insertkthElement(k, val) {
  let arr = [9, 4, 5, 6];
  let head = ArraytoList(arr);
  if (!head) return null;
  if (head.val == k) {
    return new ListNode(val, head);
  }
  let temp = head;
  while (temp.next) {
    if (temp.val == k) {
      let x = new ListNode(val);
      x.next = temp.next;
      temp.next = x;
      break;
    } else {
      temp = temp.next;
    }
  }

  return head;
}

function deleteKthElement(ele) {
  let arr = [9, 4, 5, 6];
  let head = ArraytoList(arr);
  while (head !== null && head.val === ele) {
    head = head.next;
  }
  let prev = null;
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

function printList(head) {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
}

let newHead = deleteKthElement(9, 100);
printList(newHead);
