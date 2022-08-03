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
    let node = new Node(data, this.head);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.head = node;
  }
}

let l1 = new Singly(),
  l2 = new Singly();
l1.addHead(3);
l1.addHead(4);
l1.addHead(2);

l2.addHead(4);
l2.addHead(6);
l2.addHead(5);

AddEmUp(l1, l2);

function AddEmUp(l1, l2) {
  let h1 = l1.head,
    h2 = l2.head;
  let s1 = "",
    s2 = "";

  while (h1) {
    s1 += h1.data;
    h1 = h1.next;
  }

  while (h2) {
    s2 += h2.data;
    h2 = h2.next;
  }

  s1 = Number(Rev(s1));
  s2 = Number(Rev(s2));

  let sum = String(s1 + s2);

  let newList = new Singly();
  for (let i = 0; i < sum.length; i++) {
    newList.addHead(Number(sum[i]));
  }
  return newList;
}

function Rev(s) {
  let temp = "";
  for (let i = s.length - 1; i >= 0; i--) {
    temp += s[i];
  }
  return temp;
}