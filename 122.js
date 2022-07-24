class Node {
  constructor(prev, data, next) {
    this.prev = prev;
    this.data = data;
    this.next = next;
  }
}

class Doubly {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addHead(data) {
    let node = new Node(null, data, this.head);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.head.prev = node;
    this.head = node;
  }
  travel() {
    if (!this.head) return;
    let currentHead = this.head;
    while (currentHead) {
      console.log(currentHead.data);
      currentHead = currentHead.next;
    }
  }
  removeTail() {
    if (!this.tail) return;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      return;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
  size() {
    if (!this.head) return 0;
    if (!this.head.next) return 1;

    let currentHead = this.head,
      len = 0;
    while (currentHead) {
      len++;
      currentHead = currentHead.next;
    }
    return len;
  }
}

let d = new Doubly();

AddNodes(d);
console.log(PreviousSum(d.head, 0));

function AddNodes(d) {
  if (d.size() < 10) {
    d.addHead(Math.floor(Math.random() * 23) + 1);
    return AddNodes(d);
  }
}

function PreviousSum(headValue, sum) {
  if (headValue) {
    if (PrimeCheck(2, headValue.data)) {
      sum += headValue.data;
      headValue = headValue.next;
      return PreviousSum(headValue, sum);
    }
    headValue = headValue.next;
    return PreviousSum(headValue, sum);
  }
  return sum;
}

function PrimeCheck(start, num) {
  if (start < num) {
    if (num % start == 0) {
      return 0;
    }
    return PrimeCheck(start + 1, num);
  }
  return 1;
}