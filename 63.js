console.log(sameDigitMax(5, String(5).length));

function sameDigitMax(number, len)
{
    if (String(number).length == len)
    {
        number += 1;
        return sameDigitMax(number, len);
    }
    return number - 1;
}