class Node
{
    constructor(prev, data, next)
    {
        this.prev = prev;
        this.data = data;
        this.next = next;
    }
}

class TopG
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    addHeadNode(data)
    {
        let newHeadNode = new Node(this.tail, data, this.head);
        if (!this.head)
        {
            this.head = newHeadNode;
            this.tail = newHeadNode;
            this.size += 1;
            return;
        }
        this.head.prev = newHeadNode;
        this.head = newHeadNode;
        this.tail.next = newHeadNode;
        this.size += 1;
    }
}

let IshaanKaushik = new TopG();

Millions(IshaanKaushik);
Travel(IshaanKaushik.head, IshaanKaushik);

function Millions(list)
{
    if (list.size <= 11)
    {
        list.addHeadNode(list.size);
        return Millions(list);
    }
}

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