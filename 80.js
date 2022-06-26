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
    addHeadNode(data)
    {
        let node = new Node(data, this.head);
        if (!this.head)
        {
            this.head = node;
            this.tail = node;
        }
        this.head = node;
    }
    summation()
    {
        let current = this.head, sum = 0;
        while (current)
        {
            sum += current.data;
            current = current.next;
        }
        console.log(sum);
    }
    PrimeList()
    {
        let current = this.head;
        while (current)
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
}

let sing = new Singly();
sing.addHeadNode(1);
sing.addHeadNode(2);
sing.addHeadNode(3);
sing.addHeadNode(4);
sing.addHeadNode(5);
sing.addHeadNode(6);
sing.summation();
console.log(sing);
sing.PrimeList();