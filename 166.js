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
    addHeadNod(data)
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
        this.tail.next = this.head;
        this.size += 1;
    }
}

let circle = new Circular();

Pop(0, circle);
console.log(Summation(circle.head, circle, 0));

function Pop(start, List)
{
    if (start < 10)
    {
        List.addHeadNod(start);
        return Pop(start + 1, List);
    }
}

function Summation(headValue, List, sum)
{
    if (headValue.next != List.head)
    {
        for (let i = 1; i <= headValue.data; i++)
        {
            sum += i;
        }
        headValue = headValue.next;
        return Summation(headValue, List, sum);
    }
    return sum;
}

function Tally()
{
    let sum = 0;
    for (let i = 1; i < 10; i++)
    {
        for (let k = 0; k <= i; k++)
        {
            sum += k;
            console.log(sum);
        }
    }
    console.log(sum);
}