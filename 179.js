let array = [];

OneToHundered(1);
MissingBrother(0, array);

function OneToHundered(start)
{
    if (start <= 100)
    {
        if (start % 5 == 0 && start > 5)
        {
            return OneToHundered(start + 1);
        }
        array.push(start);
        return OneToHundered(start + 1);
    }
}

function MissingBrother(index, array)
{
    if (index < array.length - 1)
    {
        if (array[index + 1] - array[index] > 1)
        {
            console.log(array[index] + 1);
        }
        return MissingBrother(index + 1, array);
    }
}