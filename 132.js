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
    }
    addTail(data)
    {
        let node = new Node(data, null);
        if (!this.tail)
        {
            this.tail = node;
            this.head = node;
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

        let c = this.head;
        while (c)
        {
            console.log(c.data);
            c = c.next;
        }
    }
}

let l = new Singly();
l.addTail(1);
l.addTail(2);
l.addTail(3);
l.addTail(2);
l.addTail(5);
l.addTail(5);
l.addTail(6);
l.addTail(9);

RD(l.head, l);

function RD(headValue, list)
{
    while (headValue)
    {
        let nth = 0, current = headValue;

        while (current)
        {
            nth++;

            if (current.data == headValue.data && nth != 1)
            {
                d(list, nth);
            }

            current = current.next;
        }
        headValue = headValue.next;
    }
}

function d(list, nth)
{
    if (!list.head) return;
    if (nth == 1)
    {
        list.head = list.head.next;
        return;
    }

    let current = list.head, prev;
    for (let i = 1; i < nth; i++)
    {
        prev = current;
        current = current.next;
    }
    prev.next = current.next;
}