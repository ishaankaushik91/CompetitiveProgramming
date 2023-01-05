class Node
{
    constructor(prev, data, next)
    {
        this.prev = prev;
        this.data = data;
        this.next = next;
    }
}

class Singly
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

let single = new Singly();

Fill();
Travel(single.head);
console.log("Travelled");
Reverse(single.tail, []);

function Fill()
{
    if (single.size < 5)
    {
        single.addHeadNode(single.size + 1);
        return Fill();
    }
}

function Travel(listHead)
{
    if (listHead)
    {
        console.log(listHead.data);
        listHead = listHead.next;
        return Travel(listHead);
    }
}

function Reverse(listTail, tempArray)
{
    if (listTail)
    {
        tempArray.push(listTail.data);
        listTail = listTail.prev;
        return Reverse(listTail, tempArray);
    }

    let rotated = new Singly();
    
    for (let i = tempArray.length - 1; i >= 0; i--)
    {
        rotated.addHeadNode(tempArray[i]);
    }

    Travel(rotated.head);
}