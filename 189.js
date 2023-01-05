class Stack
{
    constructor()
    {
        this.stack = [];
        this.size = 0;
        this.biggest = -Infinity;
    }
    push(data)
    {
        if (data > this.biggest)
        {
            this.biggest = data;
        }
        this.stack.push(data);
        this.size += 1;
    }
    pop()
    {
        this.stack.pop();
        this.size -= 1;
    }
    peek()
    {
        return this.stack[this.stack.length - 1];
    }
}

let s = new Stack();

Fill(s);
console.log(s.stack);
console.log(s.biggest);

function Fill(s)
{
    if (s.size <= 11)
    {
        s.push(Math.floor(Math.random() * 190));
        return Fill(s);
    }
}