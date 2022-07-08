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
  length() {
    let current = this.head,
      size = 0;
    while (current) {
      size++;
      current = current.next;
    }
    return size;
  }
}

let double = new Doubly();
AddNums(double);

console.log(Summation(double.head, 0));

function AddNums(double) {
  if (double.length() <= 5) {
    double.addHead(Math.floor(Math.random() * 5) + 1);
    return AddNums(double);
  }
}

function Summation(double, sum) {
  if (double) {
    double = double.next;
    if (PrimeCheck(2, double.data)) {
      sum += double.data;
      double = double.next;
      return Summation(double, sum);
    }
    double = double.next;
    return Summation(double, sum);
  }
  return sum;
}

function PrimeCheck(start, number) {
  if (start < number) {
    if (number % start == 0) {
      return 0;
    }
    return PrimeCheck(start + 1, number);
  }
  return 1;
}
