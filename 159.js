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
        this.size = 0;
    }
    addHead(data)
    {
        let newHead = new Node(data, this.head);
        if (!this.head)
        {
            this.head = newHead;
            this.tail = newHead;
            this.size++;
            return;
        }

        this.head = newHead;
        this.tail.next = this.head;
        this.size++;
    }
    removeHead()
    {
        if (!this.head) return;
        if (!this.head.next)
        {
            this.head = null;
            this.tail = null;
            this.size--;
            return;
        }

        this.head = this.head.next;
        this.tail = this.head;
        this.size--;
    }
    removeTail()
    {
        if (!this.tail) return;
        if (!this.tail.next)
        {
            this.tail = null;
            this.head = null;
            this.size--;
            return;
        }

        let headNode = this.head, before;
        while (headNode.next != this.head)
        {
            before = headNode;
            headNode = headNode.next;
        }

        this.tail  = before;
        this.tail.next = this.head;
        this.size--;
    }
    deleteNode(position)
    {
        if (!position || position < 1 || position > this.size) return;

        if (position == 1)
        {
            this.removeHead();
            this.size--;
            return;
        }

        if (position == this.size)
        {
            this.removeTail();
            this.size--;
            return;
        }

        let currentNode = this.head, previousNode;
        for (let i = 1; i < position; i++)
        {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
        this.size--;
    }
}

let c   = new Circular();

c.addHead(6);
c.addHead(8);
c.addHead(4);
c.addHead(12);
c.addHead(9);
c.addHead(8);
c.addHead(8);

Travel(c.head, c);

function Travel(headValue, list)
{
    if (headValue.next != list.head)
    {
        console.log(headValue.data);
        headValue = headValue.next;
        return Travel(headValue, list);
    }
    console.log(headValue.data);
}