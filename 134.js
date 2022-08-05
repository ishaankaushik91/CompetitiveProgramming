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
  addTail(data) {
    let node = new Node(data, this.head);
    if (!this.tail) {
      this.tail = node;
      this.head = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }
  Travel() {
    if (!this.head) return;
    if (!this.head.next) {
      console.log(this.head.data);
      return;
    }

    let someHead = this.head;
    while (someHead.next != this.head) {
      console.log(someHead.data);
      someHead = someHead.next;
    }
    console.log(someHead.data);
  }
}

let c = new Circular();

c.addTail(1);
c.addTail(2);
c.addTail(3);
c.addTail(4);
c.addTail(5);

Easy(0, 2, c);

function Easy(start, k, list) {
  if (start < k) {
    Rotate(list.head, 0, 0, list);
    return Easy(start + 1, k, list);
  }
  list.Travel();
}

function Rotate(headValue, prev, temp, list) {
  if (headValue.next != list.head) {
    prev = headValue;
    headValue = headValue.next;
    return Rotate(headValue, prev, temp, list);
  }

  temp = list.head;
  list.head = list.tail;
  list.head.next = temp;
  list.tail = prev;
  list.tail.next = list.head;
}