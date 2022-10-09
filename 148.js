class Stack
{
    constructor()
    {
        this.stack = []
    }
    pop()
    {
        if (!this.stack.length) return;
        this.stack.pop();
    }
    push(data)
    {
        this.stack.push(data);
    }
    size()
    {
        return this.stack.length;
    }
}

AddNums(new Stack());

function AddNums(stack)
{
    for (let i = 0; i < 90; i++)
    {
        stack.push(Math.floor(Math.random() * 190));
    }
    console.log(stack);
}