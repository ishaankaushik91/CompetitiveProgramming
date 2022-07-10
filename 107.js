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
}

let circle = new Circular();

let num = Math.floor(Math.random() * 323) + 2;
AddCousins(circle, num, num + 3);

console.log(circle);

function AddCousins(circle, n1, n2) {
  if (PrimeCheck(n1) == 0 || PrimeCheck(n2) == 0) {
    if (PrimeCheck(n1) == 0) {
      n1 += 1;
    } else if (PrimeCheck(n2) == 0) {
      n2 += 1;
    }
    return AddCousins(circle, n1, n2);
  }
  circle.addHead(n1);
  circle.addHead(n2);
}

function PrimeCheck(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return 0;
    }
  }
  return 1;
}