class Node
{
    constructor(prev, data, next)
    {
        this.prev = prev;
        this.data = data;
        this.next = next;
    }
}

class doubleLinkedList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
    }
    addToHead(data)
    {
        let newNode = new Node(null, data, this.head);
        if (this.head)
        {
            this.head.prev = newNode;
        }
        else
        {
            this.tail = newNode;
        }
        this.head = newNode;
    }
    addToTail(data)
    {
        let newNode = new Node(this.tail, data, null);
        if (this.tail)
        {
            this.tail.next = newNode;
        }
        else
        {
            this.head = newNode;
        }
        this.tail = newNode;
    }
    removeHeadNode()
    {
        if (!this.head && !this.tail)
        {
        }
        else if (this.head.prev == this.tail.prev && this.head.data == this.tail.data && this.head.next == this.tail.next)
        {
            this.head = null;
            this.tail = null;
            console.log(`Removed ${this.head}`);
        }
        else
        {
            this.head = this.head.next;
            this.head.prev = null;
            console.log(`Removed ${this.head}`);
        }
    }
    removeTailNode()
    {
        if (!this.head && !this.tail)
        {
        }
        else if (this.head.prev == this.tail.prev && this.head.data == this.tail.data && this.head.next == this.tail.next)
        {
            this.head = null;
            this.tail = null;
            console.log(`Removed ${this.tail}`);
        }
        else
        {
            this.tail = this.tail.prev;
            this.tail.next = null;
            console.log(`Removed ${this.tail}`);
        }
    }
    changeValue(data, index)
    {
        if (!this.head && !this.tail)
        {
            return;
        }

        let size = 0, start = 0;
        let current = this.head, previous;
        while (current)
        {
            current = current.next;
            size++;
        }
        current = this.head;

        if (index > size)
        {
            return;
        }

        if (index == 0)
        {
            this.head.data = data;
            return;
        }
        while  (start < index)
        {
            current = current.next;
            start++;
        }
        current.data = data;
    }
}

let ll = new doubleLinkedList();
ll.addToHead(11);
ll.addToHead(99);
console.log(ll);