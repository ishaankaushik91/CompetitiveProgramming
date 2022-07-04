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
    reverse()
    {
        let temp = [];
        while (this.stack.length)
        {
            temp.push(this.stack[this.stack.length - 1]);
            this.stack.pop();
        }

        while (temp.length)
        {
            this.stack.push(temp[0]);
            temp.shift()
        }
    }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.reverse();
console.log(myStack);