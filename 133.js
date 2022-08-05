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
    addtail(data)
    {
        let node = new Node(data, this.head);
        if (!this.tail)
        {
            this.tail = node;
            this.head = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }
    addHead(data)
    {
        let node = new Node(data, this.head);
        if (!this.head)
        {
            this.head = node;
            this.tail = node;
            return;
        }
        this.head = node;
        this.tail.next = this.head;
    }
    travel()
    {
        if (!this.head) return;
        if (!this.head.next)
        {
            console.log(this.head.data);
            return;
        }

        let currectHead = this.head;
        while (currectHead.next != this.head)
        {
            console.log(currectHead.data);
            currectHead = currectHead.next;
        }
        console.log(currectHead.data);
    }
}

let maList = new Circular();
maList.addtail(1);
maList.addtail(2);
maList.addtail(3);
maList.addtail(4);
maList.addtail(5);

OhYeahBaby(maList, 3);
maList.travel();

function OhYeahBaby(maList, k)
{
    if (!maList.head.next) return;

    for (let i = 0; i < k; i++)
    {
        let currectHead = maList.head, temp;
        while (currectHead.next != maList.head)
        {
            temp = currectHead;
            currectHead = currectHead.next;
        }

        let saveHead = maList.head;
        maList.head = maList.tail;
        maList.head.next = saveHead;
        maList.tail = temp;
        maList.tail.next = maList.head;
    }
}