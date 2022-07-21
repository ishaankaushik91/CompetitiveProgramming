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
    let myNode = new Node(null, data, this.head);
    if (!this.head) {
      this.head = myNode;
      this.tail = myNode;
      return;
    }
    this.head.prev = myNode;
    this.head = myNode;
  }
  travel() {
    let start = this.head;
    while (start) {
      console.log(start.data);
      start = start.next;
    }
  }
}

class cNode {
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
    let myNode = new cNode(data, this.head);
    if (!this.head) {
      this.head = myNode;
      this.tail = myNode;
      return;
    }
    this.head = myNode;
    this.tail.next = this.head;
  }
}

let d = new Doubly();
let c = new Circular();

console.log(addNode(1, d, 0) + addNode(1, c, 0));

function addNode(start, list, temp) {
  if (start <= 10) {
    temp = Math.floor(Math.random() * 10);
    list.addHead(temp);
    return temp + addNode(start + 1, list, temp);
  }
  return 0;
}