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
}

let single = new Singly();
addRandom(1, single);
addNode(0, single, 5, 10000, single.head, 0);
Travel(single.head);

function addHeadNode(list, data)
{
    let newHead = new Node(data, list.head);
    if (!list.head)
    {
        list.head = newHead;
        list.tail = newHead;
        list.size += 1;
        return;
    }
    list.head = newHead;
    list.size += 1;
}

function addTailNode(list, data)
{
    let newTail = new Node(data, this.tail);
    if (!list.tail)
    {
        list.tail = newTail;
        list.head = newTail;
        list.size += 1;
        return;
    }
    list.tail.next = newTail;
    list.tail = newTail;
    list.size += 1;
}

function addRandom(start, list)
{
    if (start <= 10)
    {
        if (start % 2 == 0)
        {
            addHeadNode(list, start);
            return addRandom(start + 1, list);
        }
        addTailNode(list, start);
        return addRandom(start + 1, list);
    }
}

function addNode(start, list, position, data, listHeadValue, prev)
{
    if (position < 1 || position > list.size) return;

    if (position == 1) addHeadNode(list, data);
    if (position == list.size) addTailNode(list, data);

    if (start < position - 1)
    {
        prev = listHeadValue;
        listHeadValue = listHeadValue.next;
        return addNode(start + 1, list, position, data, listHeadValue, prev);
    }
    let newNode = new Node(data, listHeadValue);
    prev.next = newNode;
    list.size += 1;
}

function Travel(listHeadValue)
{
    if (listHeadValue)
    {
        console.log(listHeadValue.data);
        listHeadValue = listHeadValue.next;
        return Travel(listHeadValue);
    }
}