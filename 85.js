class Node
{
    constructor(prev, data, next)
    {
        this.prev = prev;
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
        let node = new Node(null, data, this.head);
        if (!this.head)
        {
            this.head = node;
            this.tail = node;
            return;
        }
        this.head.prev = node;
        this.head = node;
    }
    dequeue()
    {
        if (!this.head) return;
        this.head = this.head.next;
        this.head.prev = null;
    }
}

let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.dequeue();
console.log(myQueue);