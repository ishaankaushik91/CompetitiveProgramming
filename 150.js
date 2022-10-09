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
    addTail(data)
    {
        let newTail = new Node(this.tail, data, null);
        if (!this.tail)
        {
            this.tail = newTail;
            this.head = newTail;
            return;
        }

        this.tail.next = newTail;
        this.tail = newTail;
    }
    removeHead()
    {
        if (!this.head) return;
        if (!this.head.next)
        {
            this.head = null;
            this.tail = null;
            return;
        }

        this.head = this.head.next;;
        this.head.prev = null;
    }
    addHead(data)
    {
        let newHead = new Node(null, data, this.head);
        if (!this.head)
        {
            this.head = newHead;
            this.tail = newHead;
            return;
        }

        this.head.prev = newHead;
        this.head = newHead;
    }
    removeTail()
    {
        if (!this.tail) return;
        if (!this.head.next)
        {
            this.tail = null;
            this.head = null;
            return;
        }

        this.tail = this.tail.prev;
        this.tail.next = null;
    }
    size()
    {
        let count = 0, currentHead = this.head;
        while (currentHead)
        {
            count++;
            currentHead = currentHead.next;
        }

        return count;
    }
    deleteNode(position)
    {
        let len = this.size();
        if (!position || position > len || position < 1) return;
        if (position == 1)
        {
            this.removeHead();
            return;
        }
        if (position == len)
        {
            this.removeTail();
            return;
        }

        let currentHead = this.head, prev;
        for (let i = 1; i < position; i++)
        {
            prev = currentHead;
            currentHead = currentHead.next;
        }

        prev.next = currentHead.next;
        currentHead.next.prev = prev;
    }
    addNode(position, data)
    {
        let len = this.size();
        if (!position || !data || position < 1 || position > len) return;
        if (position == 1)
        {
            this.addHead(data);
            return;
        }

        let currentHead = this.head;
        for (let i = 1; i < position - 1; i++)
        {
            currentHead = currentHead.next;
        }
        let newNode = new Node(currentHead, data, currentHead.next);
        currentHead.next.prev = newNode;
        currentHead.next = newNode;
    }
}

let si = new Doubly();
si.addTail(1);
si.addTail(2);
si.addTail(3);
si.addTail(4);
si.addTail(5);
si.addNode(5, 10);

travel(si.head);

function travel(headValue)
{
    if (headValue)
    {
        console.log(headValue.data);
        headValue = headValue.next;
        return travel(headValue);
    }
}