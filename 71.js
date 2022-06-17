class stack {
  constructor() {
    this.array = new Array();
  }
  push(ele) {
    this.array.push(ele);
  }
  pop() {
    this.array.pop();
  }
  isEmpty() {
    return this.array.length == 0;
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  primes(range) {
    for (let i = 1; i <= range; i++) {
      let check = 1;
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          check = 0;
          break;
        }
      }
      if (check) {
        this.array.push(i);
      }
    }
  }
}

let myStack = new stack();
myStack.primes(100);
console.log(myStack);
console.log(myStack.peek());