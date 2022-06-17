let array = [1, 2, 33, 1, 2, 90];

console.log(Summmation(0, array) * 2);

function Summmation(index, array)
{
    if (index < array.length)
    {
        return array[index] + Summmation(index + 1, array);
    }
    return 0;
}