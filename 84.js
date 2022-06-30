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
        this.tail.next = node;
        this.head = node;
    }
    travel()
    {
        let current = this.head;
        while (current.next != this.head)
        {
            console.log(current.data);
            current = current.next;
        }
    }
    middleNode()
    {
        let current = this.head, size = 0;
        while (current.next)
        {
            size++;
            current = current.next;
        }
        size++;
        current = this.head;

        for (let i = 0; i < size/2; i++)
        {
            if (current == size/2 - 2)
            {
                console.log(current.data);
                break;
            }
            current = current.next;
        }
    }
}

let circle = new Circular();
circle.addHeadNode(1);
circle.addHeadNode(2);
circle.addHeadNode(3);
circle.addHeadNode(4);
circle.addHeadNode(5);
circle.middleNode();