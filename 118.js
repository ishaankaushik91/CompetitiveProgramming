class Node
{
    constructor(prev, data, next)
    {
        this.prev = prev;
        this.data = data;
        this.next = next;
    }
}

class Single
{
    constructor()
    {
        this.head = null;
        this.tail = null;
    }
    addHead(data)
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
    removeTail()
    {
        if (!this.tail)
        {
            return;
        }
        this.tail = this.tail.prev;
    }
}

let s = new Single();
s.addHead(1);
s.addHead(2);
s.addHead(3);
s.removeTail();
console.log(s);