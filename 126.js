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
    addTail(data)
    {
        let node = new Node(data, this.head);
        if (!this.tail)
        {
            this.head = node;
            this.tail = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }
    travel()
    {
        if (!this.head) return;
        if (!this.head.next)
        {
            console.log(this.head.data);
            return;
        }
        let current = this.head;
        while (current.next != this.head)
        {
            console.log(current.data);
            current = current.next;
        }
        console.log(current.data);
    }
}

let i = new Circular();

AddNodes(1, i);
i.travel();

function AddNodes(start, list)
{
    if (start <= 10)
    {
        let temp = Math.floor(Math.random() * 10);
        let value = temp;
        while (value != String(temp) + String(temp))
        {
            value += 1;
        }
        list.addTail(value);
        return AddNodes(start + 1, list);
    }
}