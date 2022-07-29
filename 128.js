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
  AddPattern(start, end, str) {
    if (start < 5) {
      if (end < start) {
        str += "*";
        return this.AddPattern(start, end + 1, str);
      }
      this.addHead(str);
      str = "*";
      end = 0;
      return this.AddPattern(start + 1, end, str);
    }
  }
  UpsideDown() {
    if (!this.head) return;
    if (!this.head.next) {
      console.log(this.head.data);
      return;
    }

    let someHead = this.head;
    while (someHead) {
      console.log(someHead.data);
      someHead = someHead.next;
    }
  }
  Normal() {
    if (!this.head) return;
    if (!this.head.next) {
      console.log(this.head.data);
      return;
    }
    let someTail = this.tail;
    while (someTail) {
      console.log(someTail.data);
      someTail = someTail.prev;
    }
  }
}

let s = new Doubly();
s.AddPattern(0, 0, "*");
s.Normal();
console.log("\n");
s.UpsideDown();
console.log("\n");
s.Normal();
s.UpsideDown();