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
        let node = new Node(data, this.head);
        if (!this.head)
        {
            this.head = node;
            this.tail = node;
            return;
        }
        this.head = node;
    }
    pop()
    {
        if (!this.head) return;

        if (this.head == this.tail)
        {
            this.head = this.head.next;
            this.tail = this.tail.next;
            return;
        }

        this.head = this.head.next;
    }
    peek()
    {
        if (!this.head) return;
        console.log(this.head.data);
    }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.pop();
myStack.peek();