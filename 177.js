let array = [];

FillUp(1, array);
console.log(array);
RemoveDuplicates(0, array);
console.log(array);

function FillUp(start, array)
{
    if (start <= 10)
    {
        array.push(start + Math.floor(Math.random() * 10));
        return FillUp(start + 1, array);
    }
}

function RemoveDuplicates(index, array)
{
    if (index < array.length)
    {
        for (let i = index + 1; i < array.length; i++)
        {
            if (array[index] == array[i])
            {
                for (let j = i; j < array.length - 1; j++)
                {
                    array[j] = array[j + 1];
                }
                array.length -= 1;
            }
        }
        return RemoveDuplicates(index + 1, array);
    }
}

function RemoveRecursion(index, array, subindex)
{
    if (index < array.length)
    {
        if (subindex < array.length)
        {
            if (array[index] == array[subindex])
            {
                for (let k = subindex; k < array.length - 1; k++)
                {
                    array[k] = array[k + 1];
                }
                array.length -= 1;
            }
            return RemoveRecursion(index, array, subindex + 1);
        }
        return RemoveRecursion(index + 1, array, subindex);
    }
}