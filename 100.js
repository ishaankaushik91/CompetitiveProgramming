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
    let node = new Node(data, this.head);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.head = node;
  }
  change() {
    let next = this.head.next,
      current = this.head;
    this.head = this.tail;
    this.head.next = next;
    this.tail = current;
    this.tail.next = null;
  }
}

let single = new Singly();
single.addHead(1);
single.addHead(2);
single.addHead(3);
single.addHead(4);
single.addHead(5);
single.change();
console.log(single);
