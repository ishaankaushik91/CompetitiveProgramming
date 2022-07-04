class Node
{
    constructor(data, next)
    {
        this.data = data;
        this.next = next;
    }
}

class Queue
{
    constructor()
    {
        this.head = null;
        this.tail = null;
    }
    enqueue(data)
    {
        let node = new Node(data, this.head);
        if (!this.tail)
        {
            this.tail = node;
            this.head = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }
    dequeue()
    {
        if (!this.head) return;
        this.head = this.head.next;
        this.tail.next = this.head;
    }
}

let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.dequeue();
console.log(myQueue);