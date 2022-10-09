class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Singly {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addHead(data) {
    let newHead = new Node(data, this.head);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
      return;
    }
    this.head = newHead;
  }
  removeTail() {
    if (!this.tail) return;

    if (!this.head.next) {
      this.tail = null;
      this.head = null;
      return;
    }

    let currentHead = this.head,
      prev;
    while (currentHead.next) {
      prev = currentHead;
      currentHead = currentHead.next;
    }
    this.tail = prev;
    this.tail.next = null;
  }
  removeHead() {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      return;
    }

    this.head = this.head.next;
  }
  length() {
    let count = 0,
      currentHead = this.head;

    while (currentHead) {
      count++;
      currentHead = currentHead.next;
    }
    return count;
  }
  deleteNode(position) {
    let len = this.length();

    if (position > len || position < 1 || !position) return;

    if (position == 1) {
      this.removeHead();
      return;
    }

    if (position == len) {
      this.removeTail();
      return;
    }

    let currentHead = this.head,
      prev;
    for (let i = 1; i < position; i++) {
      prev = currentHead;
      currentHead = currentHead.next;
    }
    prev.next = currentHead.next;
  }
  addTail(data) {
    let newTail = new Node(data, null);
    if (!this.head) {
      this.tail = newTail;
      this.head = newTail;
      return;
    }

    let currentHead = this.head;
    while (currentHead.next) {
      currentHead = currentHead.next;
    }
    currentHead.next = newTail;
    this.tail = newTail;
  }
  addNode(position, data) {
    let len = this.length();
    if (!position || position < 1 || position > len || !data) return;
    if (position == 1) {
      this.addHead(data);
      return;
    }

    let currentHead = this.head;
    for (let i = 1; i < position - 1; i++) {
      currentHead = currentHead.next;
    }
    let newNode = new Node(data, currentHead.next);
    currentHead.next = newNode;
  }
}

let si = new Singly();
si.addHead(1);
si.addHead(2);
si.addHead(3);
si.addHead(4);
si.addTail(0);
si.addNode(5, 90);

Travel(si.head);

function Travel(headValue) {
  if (headValue) {
    console.log(headValue.data);
    headValue = headValue.next;
    return Travel(headValue);
  }
}