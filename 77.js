class Node
{
    constructor(data, next)
    {
        this.data = data;
        this.next = next;
    }
}

class Single
{
    constructor()
    {
        this.head = null;
        this.tail = null;
    }
    addHeadNode(data)
    {
        let node = new Node(data, this.head);

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
        let node = new Node(data, null);

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
        if (!this.head) return;

        let current = this.head;

        while (current)
        {
            console.log(current.data);
            current = current.next;
        }
    }
    reverse()
    {
        if (!this.head) return;

        let current = this.head, data = [];

        while (current)
        {
            data.push(current.data);
            current = current.next;
        }

        for (let i = data.length - 1; i >= 0; i--)
        {
            console.log(data[i]);
        }
    }
    insertion(data, index)
    {
        if (index == 0)
        {
            let node = new Node(data, null);
            this.head = node;
            this.tail = node;
            return;
        }

        let size = 0, current = this.head;
        while (current)
        {
            size++;
            current = current.next;
        }
        current = this.head;

        if (index < 0 || index > size) return;

        let previous;
        for (let i = 0; i < index - 1; i++)
        {
            previous = current;
            current = current.next;
        }

        let node = new Node(data, current);
        previous.next = node;
    }
    deleteList()
    {
        while (this.head)
        {
            this.head = this.head.next;
        }
    }
    deletion(index)
    {
        if (!this.head) return;

        if (index == 0)
        {
            this.head = null;
            this.tail = null;
            return;
        }

        let size = 0, current = this.head;
        while (current)
        {
            size++;
            current = current.next;
        }
        current = this.head;

        if (index < 0 || index > size) return;

        let previous;
        for (let i = 0; i < index - 1; i++)
        {
            previous = current;
            current = current.next;
        }
        current = current.next;
        previous.next = current;
    }
}

let singly = new Single();
singly.addTailNode(4);
singly.addTailNode(5);
singly.addTailNode(6);
singly.addHeadNode(3);
singly.addHeadNode(2);
singly.addHeadNode(1);
singly.insertion(100, 3);
singly.deletion(3);
singly.deleteList();
singly.travel();
singly.reverse();