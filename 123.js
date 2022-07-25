class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Single {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addTail(data) {
    let node = new Node(data, null);
    if (!this.tail) {
      this.tail = node;
      this.head = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }
  removeTail() {
    if (!this.tail) return;

    let currentHead = this.head,
      before;
    while (currentHead.next) {
      before = currentHead;
      currentHead = currentHead.next;
    }
    before.next = null;
    this.tail = before;
  }
  travel() {
    if (!this.head) return;
    if (!this.head.next) {
      console.log(this.head.data);
      return;
    }

    let currentHead = this.head;
    while (currentHead) {
      console.log(currentHead.data);
      currentHead = currentHead.next;
    }
  }
  remove(position) {
    if (!this.head) return;
    if (position == 1 && !this.head.next) {
      this.head = null;
      this.tail = null;
      return;
    }

    let currentHead = this.head,
      size = 0,
      previous;
    while (currentHead) {
      size++;
      currentHead = currentHead.next;
    }
    currentHead = this.head;

    if (size < position || position < 1) return;

    for (let i = 1; i < position; i++) {
      previous = currentHead;
      currentHead = currentHead.next;
    }
    previous.next = currentHead.next;
  }
}

let sins = new Single();

AddNodes(1, sins);
PrimePlus1(sins.head, sins);
sins.travel();

function AddNodes(start, sins) {
  if (start <= 10) {
    sins.addTail(Math.floor(Math.random() * 109));
    return AddNodes(start + 1, sins);
  }
}

function PrimePlus1(headValue, node) {
  if (headValue) {
    if (PrimeCheck(2, headValue.data)) {
      node.addTail(headValue.data + 1);
      headValue = headValue.next;
      return PrimePlus1(headValue, node);
    }
    headValue = headValue.next;
    return PrimePlus1(headValue, node);
  }
}

function PrimeCheck(start, number) {
  if (start < number) {
    if (number % start == 0) {
      return 0;
    }
    return PrimeCheck(start + 1, number);
  }
  return 1;
}