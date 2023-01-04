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
    this.size = 0;
  }
  addHeadNode(data) {
    let newHeadNode = new Node(null, data, this.head);
    if (!this.head) {
      this.head = newHeadNode;
      this.tail = newHeadNode;
      this.size += 1;
      return;
    }
    this.head.prev = newHeadNode;
    this.head = newHeadNode;
    this.size += 1;
  }
  addTailNode(data) {
    let newTailNode = new Node(this.tail, data, null);
    if (!this.tail) {
      this.tail = newTailNode;
      this.head = newTailNode;
      this.size += 1;
      return;
    }
    this.tail.next = newTailNode;
    this.tail = newTailNode;
    this.size += 1;
  }
}

let double = new Doubly();

Fill(double);
Travel(double.head);
console.log("Travel");
Rotate(5);

function Fill(list) {
  if (list.size <= 10) {
    if (list.size % 2 == 0) {
      list.addTailNode(list.size);
      return Fill(list);
    }
    list.addHeadNode(list.size);
    return Fill(list);
  }
}

function Travel(listHead) {
  if (listHead) {
    console.log(listHead.data);
    listHead = listHead.next;
    return Travel(listHead);
  }
}

function Rotate(times) {
  if (times >= 1) {
    let temp = double.tail.data;
    let listTail = double.tail;
    for (let i = double.size; i >= 2; i--) {
      listTail.data = listTail.prev.data;
      listTail = listTail.prev;
    }
    return Rotate(times - 1);
  }
  Travel(double.head);
}
