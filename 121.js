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
  size() {
    if (!this.head) return 0;
    if (!this.head.next) return 1;

    let myHead = this.head,
      len = 1;
    while (myHead.next != this.head) {
      len++;
      myHead = myHead.next;
    }

    return len;
  }
  travel() {
    if (!this.head) return;
    if (!this.head.next) {
      console.log(this.head.data);
      return;
    }

    let myHead = this.head;
    while (myHead.next != this.head) {
      console.log(myHead.data);
      myHead = myHead.next;
    }
  }
}

let cir = new Circular();

AddNodes(cir);
cir.travel();
console.log("\n\n\n");
MakePlaindrome(cir.head, cir, String(cir.head.data) + String(cir.head.data));

function AddNodes(cir) {
  if (cir.size() <= 5) {
    cir.addHead(Math.floor(Math.random() * 10));
    return AddNodes(cir);
  }
}

function MakePlaindrome(headValue, cir, headData) {
  if (headValue.next != cir.head) {
    if (headValue.data != headData) {
      headValue.data += 1;
      return MakePlaindrome(headValue, cir, headData);
    }
    console.log(headValue.data);
    headValue = headValue.next;
    headData = String(headValue.data) + String(headValue.data);
    return MakePlaindrome(headValue, cir, headData);
  }
}