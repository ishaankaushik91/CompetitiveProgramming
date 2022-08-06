class Node
{
    constructor(parent, child)
    {
        if (!child)
        {
            this.parent = parent;
            this.child = null;
        }
        else
        {
            this.parent = parent;
            this.child = child;
        }
    }
}

class Stack
{
    constructor()
    {
        this.Stack = [];
    }
    pop()
    {
        if (!this.Stack.length) return;
        this.Stack.pop();
    }
    push(data)
    {
        this.Stack.push(data);
    }
    peek()
    {
        if (!this.Stack.length) return;
        return this.Stack[this.Stack.length - 1];
    }
}

let line = [];
line.push(new Node("Rajesh Kaushik"));
line.push(new Node("Sooraj Obroi"));
line.push(new Node("Shefali George"));
line.push(new Node("Ashwin Bal"));
line.push(new Node(null, "Ishaan Kaushik"));
line.push(new Node(null, "Sooraj"));
line.push(new Node(null, "Mark Obroi"));
line.push(new Node(null, "Shefali George"));
line.push(new Node(null, "Shefali Maloney"));
line.push(new Node(null, "Anushka Bal"));

function FindFamily(Queue)
{
    let tempStack = new Stack();

    for (let i = 0; i < Queue.length; i++)
    {
        if (Queue[i].parent)
        {
            let parent = Queue[i];
            let surname = parent.parent.split(" ");
            surname = surname[1];

            for (let j = i; j < Queue.length; j++)
            {
                if (Queue[j].child)
                {
                    let sName = Queue[j].child.split(" ");
                    if (surname == sName[1])
                    {
                        parent.child = sName[0] + " " + sName[1];
                        break;
                    }
                }
            }
            tempStack.push(parent);
        }
    }
    return tempStack;
}
FindFamily(line);