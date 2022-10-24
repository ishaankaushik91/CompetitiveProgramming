class Node
{
    constructor(prev, data, next)
    {
        this.prev = prev;
        this.data = data;
        this.next = next
    }
}

class Structure
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.history = [];
    }
    addHead(data)
    {
        let newHead = new Node(null, data, this.head);
        if (!this.head)
        {
            this.head = newHead;
            this.tail = newHead;
            return;
        }
        this.head.prev = newHead;
        this.head = newHead;
    }
    removeHead(data)
    {
        if (!this.head) return;
        this.history.push({"head" : this.head.data});
        this.head = this.head.next;
        this.head.prev = null;
    }
    removeTail()
    {
        if (!this.tail) return;
        this.history.push({"tail" : this.tail.data});
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
}

let s = new Structure();

AddHeads(0, s);
s.removeTail();
s.removeHead();
Travel(s.head);
console.log(s.history);

function AddHeads(start, structure)
{
    if (start < 10)
    {
        structure.addHead(start);
        return AddHeads(start + 1, structure);
    }
}

function Travel(headValue)
{
    if (headValue)
    {
        console.log(headValue.data);
        headValue = headValue.next;
        return Travel(headValue);
    }
}