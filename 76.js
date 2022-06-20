class Node
{
    constructor(prev, data, next)
    {
        this.prev = prev;
        this.data = data;
        this.next = next;
    }
}

class DoublyLinkedList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
    }
    addTailNode(data)
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
    addHeadNode(data)
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
    removeTailNode()
    {
        if (!this.tail)
        {
            return null
        }
        if (this.tail)
        {
            this.tail = this.tail.prev;
        }
        else
        {
            this.head = null;
        }
    }
    removeHeadNode()
    {
        if (!this.head)
        {
            return "Nothing Here";
        }
        this.head = this.head.next;
        if (this.head)
        {
            this.head.prev = null;
        }else
        {
            this.tail = null;
        }
    }
}

let ll = new DoublyLinkedList();
ll.addTailNode(12);
ll.addTailNode(13);
ll.addHeadNode(15);
ll.removeTailNode();
console.log(ll);