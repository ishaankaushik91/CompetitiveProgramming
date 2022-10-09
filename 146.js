console.log(NumberLine(1, 15, []));

function NumberLine(initiate, diff, arr)
{
    if (initiate - diff <= 15)
    {
        arr.push(initiate - diff);
        return NumberLine(initiate + 1, diff, arr);
    }
    return arr;
}

console.log(NumberLineLoop(15, []));

function NumberLineLoop(diff, arr)
{
    for (let i = 1; i  - diff <= 15; i++)
    {
        arr.push(i - diff);
    }
    return arr;
}