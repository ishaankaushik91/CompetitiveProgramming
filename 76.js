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
    addHeadNode(data)
    {
        let node = new Node(null, data, this.head);
        if (!this.head)
        {
            this.head = node;
            this.tail = node;
            return;
        }
        this.head = node;
    }
    addTailNode(data)
    {
        let node = new Node(this.tail, data, null);
        if (!this.tail)
        {
            this.tail = node;
            this.head = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }
    travel()
    {
        let someHead = this.head;
        while (someHead)
        {
            console.log(someHead.data);
            someHead = someHead.next;
        }
    }
    deleteList()
    {
        while (this.head)
        {
            this.head = this.head.next;
        }
        this.tail = null;
    }
    insertOne(data, index)
    {
        let size = 0, current = this.head;
        while (current)
        {
            current = current.next;
            size++
        }
        current = this.head;
        if (index < 0 || index > size) return;

        if (index == 0)
        {
            let node = new Node(null, data, this.head);
            this.head.prev = node;
        }

        let previous;
        for (let i = 0; i < index - 1; i++)
        {
            previous = current;
            current = current.next;
        }
        let node = new Node(previous, data, current);
        previous.next = node;
        current.prev = node;
    }
    deletion(index)
    {
        if (!this.head) return;
        
        let size = 0, current = this.head;
        while (current)
        {
            size++
            current = current.next;
        }
        current = this.head;
        if (index < 0 || index > size) return;

        if (index == 0)
        {
            this.head = this.head.next;
            return;
        }
        
        let previous;
        for (let i = 0; i < index - 1; i++)
        {
            previous = current;
            current = current.next;
        }

        previous.next = current.next;
        current = current.next;
        current.prev = previous;
    }
    reverse()
    {
        if (!this.head) return;

        let current = this.tail;
        while (current)
        {
            console.log(current.data);
            current = current.prev;
        }
    }
}

function deleteRecursive(node)
{
    if (node)
    {
        node = node.next;
        return deleteRecursive(node);
    }
}

let duo = new Doubly();
duo.addHeadNode(3);
duo.addHeadNode(2);
duo.addHeadNode(1);
duo.addTailNode(4);
duo.addTailNode(5);
duo.insertOne(100, 3);
duo.insertOne(101, 4);
duo.deletion(3);
deleteRecursive(duo);
duo.travel();