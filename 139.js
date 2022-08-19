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
    let newHead = new Node(data, this.head);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
      return;
    }
    this.head = newHead;
  }
  travel() {
    if (!this.head) return;
    if (!this.head.next) {
      console.log(this.head.data);
      return;
    }

    let currentHead = this.head;
    while (currentHead) {
      console.log(currentHead.data);
      currentHead = currentHead.next;
    }
  }
}

let s = new Singly();
s.addHead(1);

PrimePositionNode(2, s);

function PrimePositionNode(start, list) {
  if (start < 10) {
    if (PrimeCheck(2, start)) {
      list.addHead({ Prime: start });
      return PrimePositionNode(start + 1, list);
    }
    list.addHead(start);
    return PrimePositionNode(start + 1, list);
  }
  list.travel();
}

function PrimeCheck(start, number) {
  if (number == 0) return 0;
  if (number == 1) return 1;

  if (start < number) {
    if (number % start == 0) {
      return 0;
    }
    return PrimeCheck(start + 1, number);
  }
  return 1;
}