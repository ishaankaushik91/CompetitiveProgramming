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
}

let circle = new Circular();
circle.addHead(1);
circle.addHead(2);
circle.addHead(3);
circle.addHead(4);
circle.addHead(5);
console.log(Size(0, circle, circle.head));

function Size(len, circle, current) {
  if (current.next != circle.head) {
    len++;
    current = current.next;
    return Size(len, circle, current);
  }
  return len + 1;
}