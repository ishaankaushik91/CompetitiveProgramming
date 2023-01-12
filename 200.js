let array = [1, 1, 0, 190, 3, 6, 1, 44, 101, 9, 8, 3, 80, 81, 33, 100];

console.log(MajorityIsNoMoreTheAuthority(0, array, 0, 0, 0));

function MajorityIsNoMoreTheAuthority(start, array, count, temp, number)
{
    if (start < array.length)
    {
        for (let j = 0; j < array.length; j++)
        {
            if (array[start] == array[j])
            {
                temp++;
            }
        }
        if (count < temp)
        {
            number = array[start];
            count = temp;
            temp = 0;
            return MajorityIsNoMoreTheAuthority(start + 1, array, count, temp, number);
        }
        temp = 0;
        return MajorityIsNoMoreTheAuthority(start + 1, array, count, temp, number);
    }
    return number;
}