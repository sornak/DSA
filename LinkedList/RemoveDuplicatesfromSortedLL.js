function RemoveDuplicates(head) {
  let temp = head;
  while (temp && temp.next) {
    if (temp.val === temp.next.val) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }
  return head;
}
