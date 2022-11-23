class Node
{
    constructor(data, next)
    {
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
        let newHeadNode = new Node(data, this.head);
        if (!this.head)
        {
            this.head = newHeadNode;
            this.tail = newHeadNode;
            this.size += 1;
            return;
        }
        this.head = newHeadNode;
        this.size += 1;
    }
}

let single = new Singly();

Pop(1, single);

let str = Palli(single.head, ``);
str = str.split("-");
StoreRev(str.length - 1, str, single);
Travel(single.head);

function StoreRev(index, reverse, List)
{
    if (index >= 0)
    {
        List.addHeadNode(reverse[index]);
        return StoreRev(index - 1, reverse, List);
    }
}

function Pop(start, List)
{
    if (List.size <= 10)
    {
        List.addHeadNode(start);
        return Pop(start + 1, List);
    }
}

function Palli(headValue, str)
{
    if (headValue)
    {
        str += headValue.data + `-`;
        headValue = headValue.next;
        return Palli(headValue, str);
    }
    return str;
}

function Reverse(lastIndex, str, capture)
{
    if (lastIndex >= 0)
    {
        capture += str[lastIndex];
        return Reverse(lastIndex - 1, str, capture);
    }
    return capture;
}

function Travel(headValue)
{
    if (headValue)
    {
        console.log(headValue.data);
        headValue = headValue.next;
        return Travel(headValue);
    }
}