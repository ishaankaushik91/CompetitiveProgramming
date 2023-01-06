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
    addTail(data)
    {
        let newTail = new Node(data, this.head);
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
    addHead(data)
    {
        let newHead = new Node(data, this.head);
        if (!this.head)
        {
            this.head = newHead;
            this.tail = newHead;
            this.size += 1;
            return;
        }
        this.head = newHead;
        this.tail.next = this.head;
        this.size += 1;
    }
}

let s = new Circular();

Fill(s);
AddNode(1, 5, 100000, s, s.head, 0);
Travel(s.head, s);

function Fill(s)
{
    if (s.size <= 11)
    {
        s.addTail(s.size);
        return Fill(s);
    }
}

function AddNode(start, position, data, list, currentHead, prev)
{
    if (position > list.size || !position || position < 1) return;

    if (position == 1)
    {
        list.addHead(data);
        return;
    }
    if (position == 2)
    {
        list.addTail(data);
        return;
    }

    else if (start < position)
    {
        prev = currentHead;
        currentHead = currentHead.next;
        return AddNode(start + 1, position, data, list, currentHead, prev);
    }

    let newNode = new Node(data, currentHead);
    prev.next = newNode;
}

function Travel(headvalue, list)
{
    if (headvalue.next != list.head)
    {
        console.log(headvalue.data);
        headvalue = headvalue.next;
        return Travel(headvalue, list);
    }
    console.log(headvalue.data);
}