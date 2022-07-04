class Stack
{
    constructor()
    {
        this.stack = [];
    }
    push(data)
    {
        this.stack.push(data);
    }
    pop()
    {
        if (!this.stack) return;
        this.stack.pop();
    }
    peek()
    {
        if (!this.stack) return false;
        return this.stack[this.stack.length - 1];
    }
    length()
    {
        if (!this.stack) return false;
        return this.stack.length;
    }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
console.log(pi(myStack));

function pi(stack)
{
    if (stack.stack.length)
    {
        let p = stack.peek();
        stack.pop();
        return p * pi(stack);
    }
    return 1;
}