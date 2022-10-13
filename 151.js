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
  size() {
    if (!this.head) return 0;
    if (!this.head.next) return 1;

    let currentHead = this.head,
      count = 0;
    while (currentHead.next != this.head) {
      count++;
      currentHead = currentHead.next;
    }
    count++;

    return count;
  }
  addNode(data, position) {
    let len = this.size;

    if (!data || position > len || position < 1) return;
    if (position == 1) {
      this.addHead(data);
      return;
    }
    if (position == len) {
      this.addTail(data);
      return;
    }

    let currentHead = this.head,
      prev;
    for (let i = 1; i <= position; i++) {
      prev = currentHead;
      currentHead = currentHead.next;
    }

    let newNode = new Node(data, currentHead);
    prev.next = newNode;
  }
  addTail(data)
  {
    let newTail = new Node(data, this.head);
    if (!this.tail)
    {
        this.tail = newTail;
        this.head = newTail;
        return;
    }

    this.tail.next = newTail;
    this.tail = newTail;
  }
  deleteNode(position)
  {
      let len = this.size;
    
      if (!position || position < 1 || position > len) return;

      if (position == 1)
      {
          this.removeHead();
      }
      if (position == len)
      {
          this.removeTail();
      }

      let currentHead = this.head, prev;

      for (let i = 1; i <= position; i++)
      {
          prev = currentHead;
          currentHead = currentHead.next;
      }

      prev.next = currentHead.next;
  }
}

let ci = new Circular();

AddHeadNodes(0, [1, 2, 3, 4, 5, 6, 7], ci);
ci.addNode(200, 6);
ci.addTail(1000);
ci.deleteNode(3);
Travel(ci.head, ci);

function AddHeadNodes(start, arr, list) {
  if (start <= arr.length) {
    list.addHead(arr[start]);
    return AddHeadNodes(start + 1, arr, list);
  }
}

function Travel(headValue, list) {
  if (headValue.next != list.head) {
    console.log(headValue.data);
    headValue = headValue.next;
    return Travel(headValue, list);
  }
  console.log(headValue.data);
}
