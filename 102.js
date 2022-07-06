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
}

let double = new Doubly();
double.addHead(1);
double.addHead(2);
double.addHead(3);
double.addHead(4);
double.addHead(5);
console.log(Size(double, double.head, 0));

function Size(double, current, len)
{
    if (current.next)
    {
        len++;
        current = current.next;
        return Size(double, current, len);
    }
    return len + 1;
}