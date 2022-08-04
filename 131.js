class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class ListNode {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addHead(val) {
    let node = new Node(val, this.head);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.head = node;
  }
  travel() {
    if (!this.head) return;
    if (!this.head.next) {
      console.log(this.head.val);
      return;
    }

    let h = this.head;
    while (h) {
      console.log(h.val);
      h = h.next;
    }
  }
}

let l = new ListNode();
l.addHead(1);
l.addHead(2);
l.addHead(3);
l.addHead(4);
l.addHead(5);

removeNthFromEnd(l, 3);
l.travel();

function removeNthFromEnd(head, n) {
  if (!head.head) return;

  let s = size(head);
  if (n > s) return null;

  if (head.head == head.tail && n == 1) {
    head.head = null;
    head.tail = null;
    return;
  }

  let cHead = head.head,
    prev;

  while (cHead && s > n) {
    prev = cHead;
    cHead = cHead.next;
    s--;
  }
  prev.next = cHead.next;
  cHead = null;
}

function size(list) {
  let myHead = list.head,
    size = 0;
  while (myHead) {
    size++;
    myHead = myHead.next;
  }
  return size;
}