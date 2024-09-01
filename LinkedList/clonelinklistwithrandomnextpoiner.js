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

//TC - 0(2N) SC -0(N) + 0(N)

function CloneLinkListBrute(head) {
  let temp = head;
  let hashmap = new Map();

  while (temp) {
    let newnode = new ListNode(temp);
    hashmap.add(temp, newnode);
    temp = temp.next;
  }
  temp = head;
  while (temp) {
    let copyNode = hashmap.get(temp);
    copyNode.next = hashmap.get(temp.next);
    copyNode.random = hashmap.get(temp.random);
    temp = temp.next;
  }

  return hashmap.get(head);
}

function InsertingNodesInbetween(head) {
  let temp = head;
  while (temp) {
    let copynode = new ListNode(temp);
    copynode.next = temp.next;
    temp.next = copynode;
    temp = temp.next.next;
  }
}

function ConnectingRandomPoints(head) {
  let temp = head;
  while (temp) {
    let copynode = temp.next;
    if (temp.random) {
      copynode.random = temp.random.next;
    }
    temp = temp.next.next;
  }
}

function ConnectingNextpointer(head) {
  let temp = head;
  let dummyNode = new ListNode(-1);
  let res = dummyNode;
  while (temp) {
    res.next = temp.next;
    temp.next = temp.next.next;
    res = res.next;
    temp = temp.next;
  }

  return dummyNode.next;
}

//TC - 0(3N) SC - 0(N)

function clonelinklistOptimal(head) {
  InsertingNodesInbetween(head);
  ConnectingRandomPoints(head);
  ConnectingNextpointer(head);
}

let arr = [1, 2, 3, 4, 5];
let head = ArraytoList(arr);
head = flattening(head);
printList(head);
