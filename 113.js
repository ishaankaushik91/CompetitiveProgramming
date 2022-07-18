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
    }
    addHead(data)
    {
        let node = new Node(data, this.head);
        if (!this.head)
        {
            this.head = node;
            this.tail = node;
            return;
        }
        this.head = node;
        this.tail.next = this.head;
    }
    size()
    {
        if (!this.head) return 0;
        if (!this.head.next) return 1;

        let current = this.head, len = 0;
        while (current.next != this.head)
        {
            len++;
            current = current.next;
        }
        return len + 1;
    }
    travel()
    {
        if (!this.head) return;
        if (!this.head.next) return console.log(this.head.data);

        let current = this.head;
        while (current.next != this.head)
        {
            console.log(current.data);
            current = current.next;
        }
    }
}

let c = new Circular();

AddNodes(1, c, 0);
c.travel();

function AddNodes(start, c, count)
{
    if (count <= 2)
    {
        c.addHead(start);
        if (50 % c.size() == 0)
        {
            c.addHead(start);
            return AddNodes(start + 1, c, count + 1);
        }
        return AddNodes(start + 1, c, count);
    }
}