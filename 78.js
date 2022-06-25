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
        this.tail.next = this.head;
    }
    addTailNode(data)
    {
        let node = new Node(data, this.head)
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
        let current = this.head;
        while (current.next != this.head)
        {
            console.log(current.data);
            current = current.next;
        }
        console.log(current.data);
    }
    insertion(data, index)
    {
        if (index == 0)
        {
            let node = new Node(data, this.head);
            this.head = node;
            this.tail.next = this.head;
            return;
        }

        let size = 0, current = this.head;
        while (current.next != this.head)
        {
            size++;
            current = current.next;
        }
        size++;
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
    deletion(index)
    {
        if (!this.head) return;

        if (index == 0)
        {
            this.tail.next = this.head.next;
            this.head = this.head.next;
            return;
        }

        let size = 0, current = this.head;
        while (current.next != this.head)
        {
            size++;
            current = current.next;
        }
        size++;
        current = current.next;

        let previous;
        for (let i = 0; i < index - 1; i++)
        {
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
    }
}

let circle = new Circular();
circle.addHeadNode(12);
circle.addHeadNode(13);
circle.addHeadNode(14);
circle.addHeadNode(15);
circle.addTailNode(16);
circle.addTailNode(17);
circle.addHeadNode(18, 0);
circle.insertion(20, 4);
circle.deletion(0);
circle.deletion(3);
circle.deleteList();
circle.travel();