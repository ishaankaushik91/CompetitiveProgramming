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
        this.size = 0;
    }
    addHead(data)
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
    addTail(data)
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
        this.tail = newTail;
        this.size += 1;
    }
}

let s = new Doubly();

Fill(s);
AddNode(1, s.head, 1000000, 0, 5, s);
Travel(s.head);

function Fill(s)
{
    if (s.size <= 11)
    {
        s.addTail(s.size);
        return Fill(s);
    }
}

function AddNode(start, headValue, data, prev, position, list)
{
    if (!position || position > list.size || position < 1) return;
    if (position == 1)
    {
        list.addHead(data);
        return;
    }
    if (position == list.size)
    {
        list.addTail(data);
        return;
    }

    else if (start < position)
    {
        prev = headValue;
        headValue = headValue.next;
        return AddNode(start + 1, headValue, data, prev, position, list);
    }

    let newNode = new Node(prev, data, headValue);
    prev.next = newNode;
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