let array = [];

TADA(1);
Babelade(4);
console.log(array);

function TADA(start)
{
    if (start <= 5)
    {
        array.push(start);
        return TADA(start + 1);
    }
}

function Babelade(times)
{
    if (times >= 1)
    {
        Rotate();
        return Babelade(times - 1);
    }
}

function Rotate()
{
    let temp = array[array.length - 1];
    for (let i = array.length - 1; i >= 0; i--)
    {
        array[i] = array[i - 1];
    }
    array[0] = temp;
}