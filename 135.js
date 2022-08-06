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
        this.stack = [];
    }
    pop()
    {
        if (!this.stack.length) return;
        this.stack.pop();
    }
    push(data)
    {
        this.stack.push(data);
    }
    peek()
    {
        if (!this.stack.length) return;
        return this.stack[this.stack.length - 1];
    }
}

class Singly
{
    constructor()
    {
        this.head = null;
        this.tail = null;
    }
    addTail(data)
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
}

let l = new Singly();
l.addTail(1);
l.addTail(2);
l.addTail(2);
l.addTail(1);

console.log(Palidrome(l.head, new Stack(), ""));

function Palidrome(headValue, stack, empty)
{
    if (headValue)
    {
        empty += String(headValue.data);
        stack.push(headValue.data);
        headValue = headValue.next;
        return Palidrome(headValue, stack, empty);
    }

    let palli = "";
    while (stack.peek())
    {
        palli += String(stack.peek());
        stack.pop();
    }
    return palli == empty;
}