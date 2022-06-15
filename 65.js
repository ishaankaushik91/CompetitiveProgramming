let array = [1, 2, 3, 11, 11, 89, 90];

console.log(sumMaxDigit(0, array, 0));

function sumMaxDigit(index, array, sum)
{
    if (index < array.length)
    {
        sum += maxNumDigit(array[index], String(array[index]).length);
        return sumMaxDigit(index + 1, array, sum);
    }
    return sum;
}

function maxNumDigit(number, digit)
{
    if ( String(number).length == digit)
    {
        return maxNumDigit(number + 1, digit);
    }
    return number - 1;
}