class Node
{
    constructor(data, next)
    {
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
        let node = new Node(data, this.head);
        if (!this.head)
        {
            this.head = node;
            this.tail = node;
            return;
        }
        this.head = node;
    }
    removeTail()
    {
        if (!this.tail) return;
        let myHead = this.head, prev;
        while (myHead.next)
        {
            prev = myHead;
            myHead = myHead.next;
        }
        prev.next = null;
        this.tail = prev;
    }
    removeHead()
    {
        if (!this.head) return;
        this.head = this.head.next;
    }
}

let single = new SingleLikeMe();
single.addHead(1);
single.addHead(2);
single.addHead(3);
single.addHead(4);
single.removeTail();
single.removeHead();
console.log(single);