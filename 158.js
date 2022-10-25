class Queue {
    constructor()
    {
        this.queue = [];
        this.size = 0;
    }
    enqueue(data)
    {
        this.queue.push(data);
    }
    dequeue()
    {
        this.queue.pop();
    }
}

let q = new Queue();

AddMembers(0, q);
console.log(q);

function AddMembers(start, queue)
{
    if (start < 10)
    {
        queue.enqueue(start);        
        return AddMembers(start + 1, queue);
    }
}