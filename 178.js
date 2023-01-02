let reverse = [];

FillUp(reverse);
console.log(reverse);
ReverseGear(reverse.length - 1, reverse);

function FillUp(array)
{
    if (array.length <= 10)
    {
        array.push(Math.floor(Math.random() * 11));
        return FillUp(array);
    }
}

function ReverseGear(index, array)
{
    if (index >= 0)
    {
        console.log(array[index]);
        return ReverseGear(index - 1, array);
    }
}