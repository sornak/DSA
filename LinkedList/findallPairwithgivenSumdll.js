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

// TC - 0(N2) SC - 0(N)

function findallPairwithgivensumsortedBrute(head, sum) {
  let temp1 = head;
  let res = [];
  while (temp1) {
    let temp2 = temp1.next;
    while (temp2 && temp1.val + temp2.val <= sum) {
      if (temp1.val + temp2.val == sum) {
        res.push(temp1.val, temp2.val);
      }

      temp2 = temp2.next;
    }

    temp1 = temp1.next;
  }

  return res;
}

// TC - 0(2N) SC - 0(N)

function findallPairwithgivensumsortedOptimal(head, sum) {
  let left = head;
  let right = findTail(head);
  let res = [];
  while (left.val < right.val) {
    if (left.val + right.val == sum) {
      res.push(left.val, right.val);
      left = left.next;
      right = right.back;
    } else if (left.val + right.val < sum) {
      left = left.next;
    } else {
      right = right.back;
    }
  }

  return res;
}

function findTail(head) {
  let tail = head;
  while (tail.next) {
    tail = tail.next;
  }
  return tail;
}

let arr = [2, 3, 4];
let head = ArraytoList(arr);
head = findallPairwithgivensumsortedOptimal(head, 7);
console.log(head);
