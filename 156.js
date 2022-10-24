class Node
{
    constructor(data, next)
    {
        this.data = data;
        this.next = next;
    }
}

class Circular
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    addHead(data)
    {
        let newHead = new Node(data, this.head);
        if (!this.head)
        {
            this.head = newHead;
            this.tail = newHead;
            return;
        }
        this.head = newHead;
        this.tail.next = this.head;
        this.size++;
    }
    addTail(data)
    {
        let newTail = new Node(data, this.head);
        if (!this.tail)
        {
            this.tail = newTail;
            this.head = newTail;
            return;
        }

        this.tail.next = newTail;
        this.tail = newTail;
    }
    addNode(position, data)
    {
        if (position > this.size || position < 1 || !data) return;
        if (position == 1)
        {
            this.addHead(data);
            return;
        }
        if (position == this.size)
        {
            this.addTail(data);
            return;
        }

        let currentHead = this.head, prev;
        for (let i = 1; i < position; i++)
        {
            prev = currentHead;
            currentHead = currentHead.next;
        }

        let newNode = new Node(data, currentHead);
        prev.next = newNode;
    }
}

let c = new Circular();

Check(0, c);
c.addNode(9, 100);

function Check(start, list)
{
    if (start < 10)
    {
        list.addHead(start);
        return Check(start + 1, list);
    }
}

function Travel(headValue, list)
{
    if (headValue.next != list.head)
    {
        console.log(headValue.data);
        headValue = headValue.next;
        return Travel(headValue, list);
    }
    console.log(headValue.data);
}