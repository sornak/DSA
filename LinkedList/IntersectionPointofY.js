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

// TC - 0(N1*nlogn)(n2*nlogn) SC - 0(N1)

function IntesectionPointofYBrute(head1, head2) {
  let temp = head1;
  let visited = new Map();
  while (temp) {
    visited.set(temp, true);
    temp = temp.next;
  }
  temp = head2;
  while (temp) {
    if (visited.has(temp)) {
      console.log(temp);
      return temp;
    }
    temp = temp.next;
  }

  return null;
}

//TC - 0(N1)+0(N2)+0(N2-N1)+0(N1) = 0(N1)+0(2N2) SC - 0(1)
function IntesectionPointofYBetter(head1, head2) {
  let N1 = 0;
  let N2 = 0;

  let t1 = head1;

  while (t1) {
    N1++;
    t1 = t1.next;
  }

  let t2 = head2;

  while (t2) {
    N2++;
    t2 = t2.next;
  }

  if (N1 < N2) {
    CollosionPoint(head1, head2, N2 - N1);
  } else {
    CollosionPoint(head2, head1, N1 - N2);
  }

  return null;
}

function CollosionPoint(t1, t2, d) {
  while (d) {
    d--;
    t2 = t2.next;
  }
  while (t1 != t2) {
    t1 = t1.next;
    t2 = t2.next;
  }

  return t1;
}

// TC - 0(N1)+0(N2) SC - 0(1)

function IntesectionPointofYOptimal(head1, head2) {
  let t1 = head1;
  let t2 = head2;

  if (!head1 || !head2) return null;

  while (t1 != t2) {
    t1 = t1.next;
    t2 = t2.next;
    if (t1 == t2) return t2;
    if (!t1) {
      t1 = head2;
    }
    if (!t2) {
      t2 = head1;
    }
  }

  return t1;
}

let arr1 = [9, 1, 4, 6, 2];
let arr2 = [1, 2, 4, 5, 4, 6, 2];

let head1 = ArraytoList(arr1);
let head2 = ArraytoList(arr2);

head = IntesectionPointofYBrute(head1, head2);
printList(head);
