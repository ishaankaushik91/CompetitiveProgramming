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
Travel(s.head, s);
console.log("After Removal");
let currentHeadNode = s.head, position = 1;
while (currentHeadNode.next != s.head)
{
    if (PrimeCheck(2, currentHeadNode.data))
    {
        RemoveNode(1, position, s, s.head, 0);
    }
    currentHeadNode = currentHeadNode.next;
    position++;
}
Travel(s.head, s);

function PrimeCheck(start, number)
{
    if (number == 1) return 0;
    if (number == 2) return 1;

    if (start < number)
    {
        if (number % start == 0)
        {
            return 0;
        }
        return PrimeCheck(start + 1, number);
    }
    return 1;
}

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
        s.addHeadNode(Math.floor(Math.random() * 8));
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