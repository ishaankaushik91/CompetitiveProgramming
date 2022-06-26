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
    addHeadNode(data)
    {
        let node = new Node(null, data, this.head);

        if (!this.head)
        {
            this.head = node;
            this.tail = node;
            return;
        }
        this.head.prev = node;
        this.head = node;
    }
    addTailNode(data)
    {
        let node = new Node(this.tail, data, null);

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
        let currect = this.head;
        while (currect)
        {
            console.log(currect.data);
            currect = currect.next;
        }
    }
    PrimeList()
    {
        let currect = this.head;
        while (currect)
        {
            let check = 1;
            for (let i = 2; i < currect.data; i++)
            {
                if (currect.data % i == 0)
                {
                    check = 0;
                    break;
                }
            }
            if (check) console.log(currect.data);
            currect = currect.next;
        }
    }
    summation()
    {
        let currect = this.head, sum = 0;
        while (currect)
        {
            sum += currect.data;
            currect = currect.next;
        }
        console.log(sum);
    }
    fizzBuzz()
    {
        let currect = this.head;
        while (currect)
        {
            if (currect.data % 3 == 0 && currect.data % 5 == 0)
            {

            }
            else if (currect.data % 3 == 0)
            {
                console.log(currect.data);
            }
            else if (currect.data % 5 == 0)
            {
                console.log(currect.data);
            }
            currect = currect.next;
        }
    }
    frequency()
    {
        let currect = this.head;

        while (currect)
        {
            let temp = this.head, freq = 0;
            while (temp)
            {
                if (currect.data == temp.data)
                {
                    freq++;
                }
                temp = temp.next;
            }
            console.log(`Freq for ${currect.data} = ${freq}`);
            currect = currect.next;
        }
    }
    swap()
    {
        let d = new Doubly(), currect = this.tail;
        while (currect)
        {
            d.addHeadNode(currect.data);
            currect = currect.prev;
        }
    }
}

let duo = new Doubly();
duo.addHeadNode(12);
duo.addHeadNode(13);
duo.addHeadNode(14);
duo.addTailNode(15);
duo.addTailNode(16);
duo.addTailNode(17);
duo.addTailNode(11);
duo.addTailNode(11);
duo.fizzBuzz();
duo.frequency();