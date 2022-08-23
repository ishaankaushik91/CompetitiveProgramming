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
    let newHead = new Node(data, this.head);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
      return;
    }
    this.head = newHead;
    this.tail.next = this.head;
  }
  removeTail() {
    if (!this.tail) return;
    if (!this.tail.next) {
      this.tail = null;
      this.head = null;
      return;
    }

    let currentHead = this.head,
      previousValue;
    while (currentHead.next != this.head) {
      previousValue = currentHead;
      currentHead = currentHead.next;
    }
    this.tail = previousValue;
    this.tail.next = this.head;
  }
  travel() {
    if (!this.head) return;
    if (!this.head.next) {
      console.log(this.head.data);
      return;
    }

    let currentHead = this.head;
    while (currentHead.next != this.head) {
      console.log(currentHead.data);
      currentHead = currentHead.next;
    }
    console.log(currentHead.data);
  }
}

let c = new Circular();
c.addHead(1);
c.addHead(2);
c.addHead(1);

let num = Palli(c.head, "", c);
console.log(MlemCheck(num.length - 1, num, c.head));

function Palli(headValue, theNum, listName) {
  if (headValue.next != listName.head) {
    theNum += String(headValue.data);
    headValue = headValue.next;
    return Palli(headValue, theNum, listName);
  }
  theNum += String(headValue.data);
  return theNum;
}

function MlemCheck(start, number, headValue) {
  if (start >= 0) {
    if (number[start] != headValue.data) {
      return 0;
    }
    headValue = headValue.next;
    return MlemCheck(start - 1, number, headValue);
  }
  return 1;
}
