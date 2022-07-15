class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Circular {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addHead(data) {
    let node = new Node(data, this.head);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.head = node;
    this.tail.next = this.head;
  }
  size() {
    if (!this.head) return 0;
    if (!this.head.next) return 1;

    let current = this.head,
      l = 0;
    while (current.next != this.head) {
      l++;
      current = current.next;
    }
    l++;
    return l;
  }
}

let c = new Circular();

AddNodes(c);
Dupli(c.head, c, c.head.next);

function AddNodes(c) {
  if (c.size() < 10) {
    c.addHead(Math.floor(Math.random() * 12));
    return AddNodes(c);
  }
}

function Dupli(headValue, node, nextValue) {
  if (headValue.next != node.head) {
    if (nextValue != node.head) {
      if (headValue.data == nextValue.data) {
        console.log(nextValue.data);
        nextValue = nextValue.next;
        return Dupli(headValue, node, nextValue);
      }
      nextValue = nextValue.next;
      return Dupli(headValue, node, nextValue);
    }
    headValue = headValue.next;
    nextValue = headValue.next;
    return Dupli(headValue, node, nextValue);
  }
}