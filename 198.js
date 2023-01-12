let array = [1, 1, 0, 190, 3, 6, 1, 44, 101, 9, 8, 3, 80, 81, 33, 100];

console.log(Kth(10));

function Kth(k)
{
    if (k > 1)
    {
        let index = Largest(0, array, -1, 0);
        Delete(index.index, array);
        return Kth(k - 1);
    }
    return Largest(0, array, -1, 0).temp;
}

function Largest(start, array, temp, index)
{
    if (start < array.length)
    {
        if (temp < array[start])
        {
            temp = array[start];
            index = start;
            return Largest(start + 1, array, temp, index);
        }
        return Largest(start + 1, array, temp, index);
    }
    return {temp, index};
}

function Delete(index, array)
{
    for (let i = index; i < array.length - 1; i++)
    {
        array[i] = array[i + 1];
    }
    array.length -= 1;
}