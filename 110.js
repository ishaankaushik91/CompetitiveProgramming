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
  size() {
    let current = this.head,
      size = 0;
    while (current) {
      size++;
      current = current.next;
    }
    return size;
  }
}

let double = new Doubly();

AddNode(double);
Dupli(double.head, double.head.next);

function AddNode(double) {
  if (double.size() < 10) {
    double.addHead(Math.floor(Math.random() * 20));
    return AddNode(double);
  }
}

function Dupli(list, next) {
  if (list.next) {
    if (next) {
      if (list.data == next.data) {
        console.log(list.data, next.data);
        next = next.next;
        return Dupli(list, next);
      }
      next = next.next;
      return Dupli(list, next);
    }
    list = list.next;
    next = list.next;
    return Dupli(list, next);
  }
}