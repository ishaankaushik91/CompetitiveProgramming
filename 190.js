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
}

let s = new Circular();

Fill(s);
Mid(1, s.head, s);

function Fill(s)
{
    if (s.size <= 11)
    {
        s.addHeadNode(s.size);
        return Fill(s);
    }
}

function Mid(start, headValue, list)
{
    if (start < list.size / 2)
    {
        console.log(headValue.data);
        headValue = headValue.next;
        return Mid(start + 1, headValue, list);
    }
    console.log(headValue.data);
}