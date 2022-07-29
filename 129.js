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
}

let m = new Circular();

m = Stuff(0, m);
console.log(m.head);

function Stuff(start, list) {
  if (start < 10) {
    m = RandomStr(5);
    list.addHead(m);
    list.addHead(Reverse(m.length - 1, m, ""));
    return Stuff(start + 1, list);
  }
  return list;
}

function Reverse(start, s, newOne) {
  if (start >= 0) {
    newOne += s[start];
    return Reverse(start - 1, s, newOne);
  }
  return newOne;
}

function RandomStr(length) {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let j = "";
  for (let i = 0; i < length; i++) {
    j += chars[Math.floor(Math.random() * (chars.length - 1))];
  }
  return j;
}