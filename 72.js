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
for (let i = 0; i < 10; i++) myStack.push(i);

console.log(summation(myStack, 0));

function summation(myStack, sum) {
  if (myStack.length() != 0) {
    sum += myStack.peek();
    myStack.pop();
    return summation(myStack, sum);
  }
  return sum;
}