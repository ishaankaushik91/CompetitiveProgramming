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
myStack.push(10);
myStack.push(21);
myStack.push(1000);
let myArray = [];

console.log(myStack);
reverseStack(0, myArray, myStack);
reversed(0, myArray, myStack);
console.log(myStack);

function reversed(index, array, myStack) {
  if (index < array.length) {
    myStack.push(array[index]);
    return reversed(index + 1, array, myStack);
  }
}

function reverseStack(index, array, myStack) {
  if (myStack.length() != 0) {
    array[index] = myStack.peek();
    myStack.pop();
    return reverseStack(index + 1, array, myStack);
  }
}