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

//TC - 0(2NM) SC -0(N)

function MergeofLL(list1, list2) {
  let dummyNode = new ListNode(-1);
  let res = dummyNode;

  while (list1 || list2) {
    if (list1.val < list2.val) {
      res.child = list1;
      res = list1;
      list1 = list1.next;
    } else {
      res.child = list2;
      res = list2;
      list1 = list2.next;
    }

    res.next = null;
  }
  if (list1) res.child = list1;
  if (list2) res.child = list2;
  return dummyNode.next;
}

function flattening(head) {
  if (!head || !head.next) return head;
  let mergehead = flattening(head.next);
  return MergeofLL(head, mergehead);
}

let arr = [1, 2, 3, 4, 5];
let head = ArraytoList(arr);
head = flattening(head);
printList(head);
