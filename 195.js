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
    addHeadNode(data)
    {
        let newHeadNode = new Node(data, this.head);
        if (!this.head)
        {
            this.head = newHeadNode;
            this.tail = newHeadNode;
            this.size += 1;
            return;
        }
        this.head = newHeadNode;
        this.tail.next = this.head;
        this.size += 1;
    }
    removeTailNode()
    {
        if (!this.head) return;
        if (!this.head.next)
        {
            this.head = null;
            this.tail = null;
            this.size -= 1;
            return;
        }
        let currentHeadNode = this.head;
        while (currentHeadNode.next.next != this.head)
        {
            currentHeadNode = currentHeadNode.next;
        }
        this.tail = currentHeadNode;
        this.tail.next = this.head;
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
        this.head = this.head.next;
        this.tail.next = this.head;
        this.size -= 1;
    }
}

let s = new Circular();

Fill(s);
RemoveNode(1, 5, s, s.head, 0);
Travel(s.head, s);

function RemoveNode(start, position, list, currentHeadNode, prev)
{
    if (position > list.size || position < 1 || !position) return;
    if (position == 1)
    {
        list.removeHeadNode();
        return;
    }
    if (position == list.size)
    {
        list.removeTailNode();
        return;
    }
    else if (start < position)
    {
        prev = currentHeadNode;
        currentHeadNode = currentHeadNode.next;
        return RemoveNode(start + 1, position, list, currentHeadNode, prev);
    }
    prev.next = currentHeadNode.next;
}

function Fill(s)
{
    if (s.size <= 11)
    {
        s.addHeadNode(s.size);
        return Fill(s);
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