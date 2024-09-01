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

// TC - 0(2N) SC - 0(1)
function SortLinkList012Brute(head) {
  let cnt0 = 0;
  let cnt1 = 0;
  let cnt2 = 0;
  if (!head || !head.next) return head;
  let temp = head;
  while (temp) {
    if (temp.val == 0) cnt0++;
    else if (temp.val == 1) cnt1++;
    else cnt2++;
    temp = temp.next;
  }
  temp = head;
  while (temp) {
    if (cnt0 != 0) {
      temp.val = 0;
      cnt0--;
    } else if (cnt1 != 0) {
      temp.val = 1;
      cnt1--;
    } else {
      temp.val = 2;
      cnt2--;
    }
    temp = temp.next;
  }

  return head;
}

//TC - 0(N) SC - 0(1)
function SorLinkListOptimal(head) {
  if (!head || !head.next) return head;

  let zeroHead = new ListNode(-1);
  let oneHead = new ListNode(-1);
  let twoHead = new ListNode(-1);

  let zero = zeroHead;
  let one = oneHead;
  let two = twoHead;

  let temp = head;
  while (temp) {
    if (temp.val == 0) {
      zero.next = temp;
      zero = temp;
    } else if (temp.val == 1) {
      one.next = temp;
      one = temp;
    } else {
      two.next = temp;
      two = temp;
    }

    temp = temp.next;
  }

  zero.next = oneHead.next ? oneHead.next : twoHead.next;
  one.next = twoHead.next;
  two.next = null;

  let newHead = zeroHead.next;
  return newHead;
}

let arr = [0, 1, 0, 2, 0, 1, 0, 2, 0];
let head = ArraytoList(arr);
head = SorLinkListOptimal(head);
printList(head);
