class Node
{
    constructor(prev, data, next)
    {
        this.prev = prev;
        this.data = data;
        this.next = next
    }
}

class Singly
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    addHeadNode(data)
    {
        let newHead = new Node(null, data, this.head);
        if (!this.head)
        {
            this.head = newHead;
            this.tail = newHead;
            this.size += 1;
            return;
        }
        this.head.prev = newHead;
        this.head = newHead;
        this.size += 1;
    }
    removeTailNode()
    {
        if (!this.tail) return;
        if (!this.tail.prev)
        {
            this.tail = null;
            this.head = null;
            this.size -= 1;
            return;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.size -= 1;
    }
    removeHeadNode()
    {
        if (!this.head) return;
        if (!this.head.next)
        {
            this.head = null;
            this.tail = null;
            this.size -= 1;
            return;
        }
        this.head = this.head.next
        this.head.prev = null;
        this.size -= 1;
    }
    removeFromPosition(position)
    {
        if (!this.head || position > this.size || !position || position < 1) return;
        if (position == 1)
        {
            this.removeHeadNode();
            return;
        }
        if (position == this.size)
        {
            this.removeTailNode();
            return;
        }

        let currentNode = this.head, prev;
        for (let i = 1; i < position; i++)
        {
            prev = currentNode;
            currentNode = currentNode.next;
        }
        prev.next = currentNode.next;
        currentNode.prev = prev;
    }
    addTailNode(data)
    {
        let newTail = new Node(this.tail, data, null);
        if (!this.tail)
        {
            this.tail = newTail;
            this.head = newTail;
            this.size += 1;
            return;
        }
        this.tail.next = newTail;
        this.tail = this.tail.next;
        this.size += 1;
    }
}

let single = new Singly();
Populate(0, single);
single.removeTailNode();
single.removeHeadNode();
single.removeFromPosition(4);
single.addTailNode(1000000);
Travel(single.head);

function Populate(start, List)
{
    if (start < 10)
    {
        List.addHeadNode(start);
        return Populate(start + 1, List);
    }
}

function Travel(headValue)
{
    if (headValue)
    {
        console.log(headValue.data);
        headValue = headValue.next;
        return Travel(headValue);
    }
}