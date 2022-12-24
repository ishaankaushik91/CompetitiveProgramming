let a1 = [2, 3, 4, 5, 6, 67, 77, 5, 90, 101, 111];

removeElement(0, 5);
console.log(a1);

function removeElement(start, element)
{
    if (start < a1.length)
    {
        if (a1[start] == element)
        {
            remove(element, a1, start);
        }
        return removeElement(start + 1, element);
    }
}

function remove(element, array, index)
{
    for (let j = index; j < array.length - 1; j++)
    {
        array[j] = array[j + 1];
    }
        array.length -= 1;
    return;
}