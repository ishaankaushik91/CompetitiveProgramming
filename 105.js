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
  size() {
    let current = this.head,
      length = 0;
    while (current) {
      length++;
      current = current.next;
    }
    return length;
  }
}

let double = new Doubly();
AddNum(double);
console.log(double);
console.log(double.size());

function AddNum(double) {
  if (double.size() <= 5) {
    let num = Math.floor(Math.random() * 20);
    if (PrimeCheck(2, num)) {
      double.addHead(num);
      return AddNum(double);
    }
    return AddNum(double);
  }
}

function PrimeCheck(start, num) {
  if (start < num) {
    if (num % start == 0) {
      return 0;
    }
    return PrimeCheck(start + 1, num);
  }
  return 1;
}