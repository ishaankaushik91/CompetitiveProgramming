let array = [];

populate(array);
console.log(simpleSummation(0, array));

function populate(array)
{
    if (array.length <= 10)
    {
        array.push(Math.floor(Math.random() * 22));
        return populate(array);
    }
}

function simpleSummation(index, array)
{
    if (index < array.length)
    {
        return array[index] + simpleSummation(index + 1, array);
    }
    return 0;
}