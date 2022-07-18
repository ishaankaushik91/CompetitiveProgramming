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
    travel()
    {
        if (!this.head) return;
        let current = this.head;
        while (current)
        {
            console.log(current.data);
            current = current.next;
        }
    }
    size()
    {
        if (!this.head) return 0;
        let current = this.head, l = 0;
        while (current)
        {
            l++;
            current = current.next;
        }
        return l;
    }
}

let d = new Doubly();

AddNodes(d);
PrimeData(1, d.head, d);

function AddNodes(d)
{
    if (d.size() < 10)
    {
        d.addHead(Math.floor(Math.random() * 1021));
        return AddNodes(d);
    }
}

function PrimeData(start, headValue, node)
{
    if (start <= node.size())
    {
        if (PrimeCheck(2, headValue.data) == 0)
        {
            headValue.data += 1;
            return PrimeData(start, headValue, node);
        }
        console.log(headValue.data);
        headValue = headValue.next;
        return PrimeData(start + 1, headValue, node);
    }
}

function PrimeCheck(start, number)
{
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