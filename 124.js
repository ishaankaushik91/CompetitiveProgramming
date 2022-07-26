class Node
{
    constructor(prev, data, next)
    {
        this.prev = prev;
        this.data = data;
        this.next = next;
    }
}

class SingleLikeMe
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
    removeTail()
    {
        if (!this.head) return;
        if (!this.head.next)
        {
            this.head = null;
            this.tail = null;
            return;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
    travel()
    {
        if (!this.head) return;
        if (!this.head.next)
        {
            console.log(this.head.data);
            return;
        }

        let currentHead = this.head;
        while (currentHead)
        {
            console.log(currentHead.data);
            currentHead = currentHead.next;
        }
    }
}

let us = new SingleLikeMe();

DeleteList(us, 1);
us.travel();

function DeleteList(node, start)
{
    if (start < 10)
    {
        let temp = Math.floor(Math.random() * 21);
        node.addHead(temp);
        if (PrimeCheck(2, node.head.data))
        {
            node.removeTail();
            return DeleteList(node, start + 1);
        }
        return DeleteList(node, start + 1);
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