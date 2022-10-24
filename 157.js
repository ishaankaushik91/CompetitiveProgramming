class Node
{
    constructor(data, next)
    {
        this.data = data;
        this.next = next;
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
    addHead(data)
    {
        let newHead = new Node(data, this.head);
        if (!this.head)
        {
            this.head = newHead;
            this.tail = newHead;
            this.size++;
            return;
        }
        this.head = newHead;
        this.size++;
    }
}

let s = new Singly();

AddHeads(0, s);
BackwardPosition(s.head, s, 1);

function AddHeads(start, list)
{
    if (start < 10)
    {
        list.addHead(start);
        return AddHeads(start + 1, list);
    }
}

function BackwardPosition(headValue, list, start)
{
    if (headValue)
    {
        console.log(list.size - start);
        headValue = headValue.next;
        return BackwardPosition(headValue, list, start + 1);
    }
}