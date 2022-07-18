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
    this.tail.next = node;
  }
  size() {
    if (!this.head) return 0;
    if (!this.head.next) return 1;

    let current = this.head,
      len = 0;
    while (current.next != this.head) {
      len++;
      current = current.next;
    }
    return len + 1;
  }
  travel() {
    if (!this.head) return;
    if (!this.head.next) {
      console.log(this.head.data);
      return;
    }

    let current = this.head;

    while (current.next != this.head) {
      console.log(current.data);
      current = current.next;
    }
    console.log(current.data);
  }
}

let c = new Circular();

AddMultiples(1, c);
c.travel();

function AddMultiples(start, c) {
  if (start <= 50) {
    if (50 % start == 0) {
      c.addHead(start);
      return AddMultiples(start + 1, c);
    }
    return AddMultiples(start + 1, c);
  }
}