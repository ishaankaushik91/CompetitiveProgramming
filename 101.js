class Stack {
  constructor() {
    this.stack = [];
  }
  push(data) {
    this.stack.push(data);
  }
  pop() {
    if (!this.stack.length) return;
    this.stack.pop();
  }
  length() {
    return this.stack.length;
  }
}

let myStack = new Stack();
AddElements(myStack);

function AddElements(myStack) {
  if (myStack.length() != 100) {
    myStack.push(Math.floor(Math.random() * 1021));
    return AddElements(myStack);
  }
  console.log(myStack);
}
