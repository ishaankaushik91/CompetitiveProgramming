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
    }
}

let double = new Doubly();
addNodes(1, double);
addNodePosition(1, 50000, 5, 0, double.head);
Travel(double.head);

function addHeadNode(data, list)
{
    let newHead = new Node(null, data, list.head);
    if (!list.head)
    {
        list.head = newHead;
        list.tail = newHead;
        return;
    }
    list.head.prev = newHead;
    list.head = newHead;
}

function addTailNode(data, list)
{
    let newTail = new Node(list.tail, data, null);
    if (!list.tail)
    {
        list.tail = newTail;
        list.head = newTail;
        return;
    }
    list.tail.next = newTail;
    list.tail = newTail;
}

function addNodes(start, list)
{
    if (start <= 10)
    {
        if (start % 2 == 0)
        {
            addHeadNode(start, list);
            return addNodes(start + 1, list);
        }
        addTailNode(start, list);
        return addNodes(start + 1, list);
    }
}

function addNodePosition(start, data, position, prev, currentHead)
{
    if (start < position)
    {
        prev = currentHead;
        currentHead = currentHead.next;
        return addNodePosition(start + 1, data, position, prev, currentHead);
    }
    let newNode = new Node(prev, data, currentHead);
    prev.next = newNode;
    currentHead.prev = newNode;
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