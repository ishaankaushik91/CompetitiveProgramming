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
}

let secret = new Circular();
let key_number;

RandomHeads(0, "Ishaan", secret);

function RandomHeads(start, message, list) {
  if (start < message.length) {
    let number = String(message).charCodeAt(start);
    list.addHead(convertToBinary(number) + (convertToBinary(number) * 9.5));
    return RandomHeads(start + 1, message, list);
  }
  Travel(list.head, list);
}

function Travel(headValue, list) {
  if (headValue.next != list.head) {
    console.log(headValue.data);
    headValue = headValue.next;
    return Travel(headValue, list);
  }
  console.log(headValue.data);
}

function convertToBinary(x) {
  let bin = 0;
  let rem,
    i = 1,
    step = 1;
  while (x != 0) {
    rem = x % 2;
    x = parseInt(x / 2);
    bin = bin + rem * i;
    i = i * 10;
  }
  return bin;
}
