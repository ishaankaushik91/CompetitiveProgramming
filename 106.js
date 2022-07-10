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
  peek() {
    if (!this.stack.length) return;
    return this.stack[this.stack.length - 1];
  }
  length() {
    return this.stack.length;
  }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(1001);
myStack.push(90);
myStack.push(5);
myStack.push(78);
myStack.push(15);
myStack.push(88);
myStack.push(10);
myStack.push(78);

let topper = myStack.peek();
myStack.pop();
console.log(CheckDupli(myStack, topper));

function CheckDupli(myStack, topMost) {
  if (myStack.length()) {
    if (myStack.peek() == topMost) {
      return myStack.peek();
    }
    myStack.pop();
    return CheckDupli(myStack, topMost);
  }
  return -1;
}