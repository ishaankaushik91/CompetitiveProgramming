let array = [1, 2, 3, 11, 11, 89, 90];

console.log(sumMaxDigit(array));

function maxNumDigit(number, digit)
{
    for (number; String(number).length <= digit; number)
    {
        number += 1;
    }
    return number - 1;
}

function sumMaxDigit(array)
{
    let sum = 0;
    for (let i = 0; i < array.length; i++)
    {
        sum += maxNumDigit(array[i], String(array[i]).length);
    }
    return sum;
}