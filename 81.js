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
    addHeadNode(data)
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
        let current = this.head;
        while (current.next != this.head)
        {
            console.log(current.data);
            current = current.next;
        }
        console.log(current.data);
    }
    PrimeList()
    {
        let current = this.head;
        while (current.next != this.head)
        {
            let check = 1;
            for (let i = 2; i < current.data; i++)
            {
                if (current.data % i == 0)
                {
                    check = 0;
                    break;
                }
            }
            if (check) console.log(current.data);
            current = current.next;
        }
    }
    PrimeSum()
    {
        let current = this.head, sum = 0;
        while (current.next != this.head)
        {
            let check = 1;
            for (let i = 2; i < current.data; i++)
            {
                if (current.data % i == 0)
                {
                    check = 0;
                    break;
                }
            }
            if (check) sum += current.data;
            current = current.next;
        }
        console.log(sum);
    }
}

let circle = new Circular();
circle.addHeadNode(1);
circle.addHeadNode(2);
circle.addHeadNode(3);
circle.addHeadNode(4);
circle.addHeadNode(5);
circle.addHeadNode(6);
circle.PrimeList();
circle.travel();
circle.PrimeSum();