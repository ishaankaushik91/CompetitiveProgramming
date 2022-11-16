let array = [];

morePopulate(0, array);
console.log(array);

function populate(start, array, end)
{
    if (start < end)
    {
        array.push(Math.floor(Math.random() * 22));
        return populate(start + 1, array, end);
    }
}

function morePopulate(start, array)
{
    if (start < 100)
    {
        populate(start, array, start + 10);
        return morePopulate(start + 10, array);
    }
}