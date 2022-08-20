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
    addHead(data)
    {
        let newHeadNode = new Node(data, this.head);
        if (!this.head)
        {
            this.head = newHeadNode;
            this.tail = newHeadNode;
            return;
        }
        this.head = newHeadNode;
        this.tail.next= this.head;
    }
    travel()
    {
        if (!this.head) return;
        if (!this.head.next)
        {
            console.log(this.head.data);
            return;
        }

        let myHead = this.head;
        while (myHead.next != this.head)
        {
            console.log(myHead.data);
            myHead = myHead.next;
        }
        console.log(myHead.data);
    }
    removeNode(position)
    {
        if (position < 1) return;

        let myHead = this.head, prev;
        for (let i = 1; i < position; i++)
        {
            prev = myHead;
            myHead = myHead.next;
        }
        prev.next = myHead.next;
    }
    positionOf(data)
    {
        if (!this.head) return;
        if (!this.head.next && data == this.head.data) return 1;

        let myHead = this.head, position = 1;
        while (myHead.next != this.head)
        {
            if (data == myHead.data) return position;
            position++;
        }
        if (data == myHead.data) return position;

        return;
    }
}

let c = new Circular();

AddNodes(1, c);
c.travel();
RemoveDuplicate(c.head, c);

function AddNodes(start, listName)
{
    if (start < 10)
    {
        listName.addHead(Math.floor(Math.random() * 10));
        return AddNodes(start + 1, listName);
    }
}

function RemoveDuplicate(headValue, listName)
{
    if (headValue.next != listName.head)
    {
        let temp = headValue.next, start = 1;

        while (temp.next != listName.head)
        {
            start++;
            if (temp.data == headValue.data)
            {
                listName.removeNode(start);
                break;
            }
            temp = temp.next;
        }
        headValue = headValue.next;
        return RemoveDuplicate(headValue, listName);
    }
    listName.travel();
}