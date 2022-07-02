class Node
{
    constructor(data, next)
    {
        this.data = data;
        this.next = next;
    }
}

class Stack
{
    constructor()
    {
        this.head = null;
        this.tail = null;
    }
    push(data)
    {
        let node = new Node(data, null);
        if (!this.tail)
        {
            this.tail = node;
            this.head = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }
    pop()
    {
        if (!this.tail) return;
        let current = this.head.next, previous;
        while (current)
        {
            previous = current;
            current =  current.next;
        }
    }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.pop();