let array = [];

YEEEAAHHHH(1);
console.log(BBC(0, -1, array));

function YEEEAAHHHH(start)
{
    if (start <= 100)
    {
        if (start == 31)
        {
            array.push(start * 100);
            return YEEEAAHHHH(start + 1);
        }
        array.push(start);
        return YEEEAAHHHH(start + 1);
    }
}

function BBC(index, temp, array)
{
    if (index < array.length)
    {
        if (temp < array[index])
        {
            temp = array[index];
            return BBC(index + 1, temp, array);
        }
        return BBC(index + 1, temp, array);
    }
    return temp;
}