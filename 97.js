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
        let current = this.head;
        while (current.next != this.head)
        {
            console.log(current.data);
            current = current.next;
        }
        console.log(current.data);
    }
}

let circle1 = new Circular(), circle2 = new Circular(), circle3 = new Circular();
let array = [];
circle1.addHead(1);
circle1.addHead(2);
circle1.addHead(3);
circle2.addHead(4);
circle2.addHead(5);
circle2.addHead(6);
circle3.addHead(7);
circle3.addHead(8);
circle3.addHead(9);
array.push(circle1);
array.push(circle2);
array.push(circle3);
let current;
console.log(Summation(0, array, current, 0));

function Summation(index, array, current, sum)
{
    if (index < array.length)
    {
        current = array[index].head;
        while (current.next != array[index].head)
        {
            sum += current.data;
            current = current.next;
            console.log(current.data);
        }
        sum += current.data;
        return Summation(index + 1, array, current, sum);
    }
    return sum;
}