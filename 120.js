class Queue
{
    constructor(size)
    {
        this.queue = [];
        this.size = size;
    }
    enqueue(person)
    {
        this.queue.push(person);
    }
    dequeue()
    {
        if (!this.queue.length) return;
        this.queue.shift();
    }
    len()
    {
        return this.queue.length;
    }
}

let people = new Queue(6);

AddPeople(people);
console.log(people);

function AddPeople(people)
{
    if (people.len() < people.size)
    {
        people.enqueue(Math.floor(Math.random() * 9));
        return AddPeople(people);
    }
}