class Queue
{
    constructor()
    {
        this.queue = [];
        this.length = 4;
    }
    enqueue(data)
    {
        this.queue.push(data);
    }
    dequeue()
    {
        if (!this.queue.length) return;
        this.queue.shift();
    }
    isFull()
    {
        if (this.queue.length == 4) return true;
        return false;
    }
}

let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);

WaitForYourChance(myQueue, 5);

function WaitForYourChance(myQueue, data)
{
    setTimeout(() => {
        myQueue.dequeue();
        myQueue.enqueue(data);
        console.log(myQueue);
    }, 5000);
}