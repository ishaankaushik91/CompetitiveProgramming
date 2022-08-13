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
    this.tail.next = this.head;
  }
  addTail(data)
  {
    let node = new Node(data, this.head);
    if (!this.tail)
    {
        this.tail = node;
        this.head = node;
        return;
    }
    this.tail.next = node;
    this.tail = node;
    this.tail.next = this.head;
  }
  removeTail()
  {
    if (!this.tail) return;
    if (!this.tail.next)
    {
        this.tail = null;
        this.head = null;
        return;
    }

    let currentHead = this.head, prev;

    while (currentHead.next != this.head)
    {
        prev = currentHead;
        currentHead = currentHead.next;
    }
    prev.next = currentHead.next;
    this.tail = prev;
  }
}

let c = new Circular();

PrimeSort(2, c);
c.removeTail();

function PrimeSort(start, list) {
  if (start < 11) {
    let num = SendPrime(2, start);
    if (num) {
      list.addHead(num);
      return PrimeSort(start + 1, list);
    }
    return PrimeSort(start + 1, list);
  }
}

function SendPrime(start, number) {
  if (start < number) {
    if (number % start == 0) {
      return 0;
    }
    return SendPrime(start + 1, number);
  }
  return number;
}