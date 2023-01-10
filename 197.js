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
        this.size = 0;
    }
    addHeadNode(data)
    {
        let newHeadNode = new Node(null, data, this.head);
        if (!this.head)
        {
            this.head = newHeadNode;
            this.tail = newHeadNode;
            this.size += 1;
            return;
        }
        this.head.prev = newHeadNode;
        this.head = newHeadNode;
        this.size += 1;
    }
}

let l1 = new Doubly();

Fill(l1);
console.log(SUMINGUM(l1.head, l1));

function Fill(list)
{
    if (list.size < 11)
    {
        list.addHeadNode(list.size + 1);
        return Fill(list);
    }
}

function SUMINGUM(headValue, list)
{
    if (headValue)
    {
        let temp = headValue.data;
        headValue = headValue.next;
        return temp + SUMINGUM(headValue, list);
    }
    return 0;
}