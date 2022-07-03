class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  push(data) {
    let node = new Node(data, this.head);
    if (!this.tail) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }
  pop() {
    if (!this.tail) return;
    let current = this.head,
      prev;
    while (current.next != this.head) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    this.tail = prev;
  }
  peek() {
    if (!this.tail) return;
    console.log(this.tail);
  }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.pop();
myStack.peek();
