class stack {
  constructor() {
    this.stack = [];
  }
  push(ele) {
    this.stack.push(ele);
  }
  pop() {
    this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  length() {
    return this.stack.length;
  }
}

let myStack = new stack();
let tempStack = new stack();
myStack.push(10);
myStack.push(21);
myStack.push(1000);

console.log(myStack);
reverseStack(myStack, tempStack);
console.log(tempStack);

function reverseStack(myStack, tempStack) {
  if (myStack.length() != 0) {
    tempStack.push(myStack.peek());
    myStack.pop();
    return reverseStack(myStack, tempStack);
  }
}
