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
    if (index < array.length - 1)
    {
        array[index] = array[index + 1];
        return remove(element, array, index + 1);
    }
    array.length -= 1;
    return;
}