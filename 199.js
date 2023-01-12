let array = [1, 1, 0, 190, 3, 6, 1, 44, 101, 9, 8, 3, 80, 81, 33, 100];

console.log(Repeating(0, array));

function Repeating(start, array)
{
    if (start < array.length)
    {
        for (let j = start + 1; j < array.length; j++)
        {
            if (array[start] == array[j])
            {
                return array[j];
            }
        }
        return Repeating(start + 1, array);
    }
}