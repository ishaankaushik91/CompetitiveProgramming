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
}

let circle1 = new Circular(), circle2 = new Circular();
let array = [];
circle1.addHead(1);
circle1.addHead(2);
circle1.addHead(3);
circle2.addHead(4);
circle2.addHead(5);
circle2.addHead(6);
array.push(circle1);
array.push(circle2);
console.log(array);