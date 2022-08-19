class Node
{
    constructor(prev, data, next)
    {
        this.prev = prev;
        this.data = data;
        this.next = next;
    }
}

class Doubly
{
    constructor()
    {
        this.head = null;
        this.tail = null;
    }
    addHead(data)
    {
        let newHead = new Node(null, data, this.head);
        if (!this.head)
        {
            this.head = newHead;
            this.tail = newHead;
            return;
        }
        this.head.prev = newHead;
        this.head = newHead;
    }
    travel()
    {
        if (!this.head) return;
        if (!this.head.next)
        {
            console.log(this.head.data);
            return;
        }

        let cHEad = this.head;
        while (cHEad)
        {
            console.log(cHEad.data);
            cHEad = cHEad.next;
        }
    }
    removeTail()
    {
        if (!this.tail) return;
        if (!this.tail.prev)
        {
            this.tail = null;
            this.head = null;
            return;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
}

let d = new Doubly();
d.addHead(1);
d.addHead(2);
d.addHead(3);
d.addHead(4);
d.addHead(5);

AddNode(1, 3, d.head, 0, 10);
d.travel();

function AddNode(start, position, headValue, previousNode, data)
{
    if (start < position)
    {
        previousNode = headValue;
        headValue = headValue.next;
        return AddNode(start + 1, position, headValue, previousNode, data);
    }
    let newNode = new Node(previousNode, data, headValue);
    previousNode.next = newNode;
    headValue.prev = newNode;
}