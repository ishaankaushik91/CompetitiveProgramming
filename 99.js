class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(data) {
    this.queue.push(data);
  }
  dequeue() {
    if (!this.queue.length) return;
    this.queue.shift();
  }
  front() {
    if (!this.queue.length) return;
    return this.queue[0];
  }
  length() {
    return this.queue.length;
  }
}

let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
console.log(Summation(myQueue, 0));

function Summation(myQueue, sum) {
  if (myQueue.length()) {
    sum += myQueue.front();
    myQueue.dequeue();
    return Summation(myQueue, sum);
  }
  return sum;
}
