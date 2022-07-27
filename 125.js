class Node
{
    constructor(data, next)
    {
        this.data = data;
        this.next = next;
    }
}

class Single
{
    constructor()
    {
        this.head = null;
        this.tail = null;
    }
    addTail(data)
    {
        let node = new Node(data, null);
        if (!this.tail)
        {
            this.head = node;
            this.tail = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }
    travel()
    {
        if (!this.head) return;
        if (!this.head.next)
        {
            console.log(this.head.data);
            return;
        }
        let current = this.head;
        while (current)
        {
            console.log(current.data);
            current = current.next;
        }
    }
}

let me = new Single();

AddNodes(1, me);
me.travel();
Summation(me.head, 0, 0);

function AddNodes(start, me)
{
    if (start < 10)
    {
        me.addTail([]);
        for (let i = 0; i < 10; i++)
        {
            me.tail.data.push(Math.floor(Math.random() * 10));
        }
        return AddNodes(start + 1, me);
    }
}

function Summation(headValue, index, sum)
{
    if (headValue)
    {
        if (index < headValue.data.length)
        {
            sum += headValue.data[index];
            return Summation(headValue, index + 1, sum);
        }
        console.log(sum);
        headValue = headValue.next;
        index = 0;
        sum = 0;
        return Summation(headValue, index, sum);
    }
}