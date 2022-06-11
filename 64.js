console.log(sameDigitMax(5, String(5).length));

function sameDigitMax(number, digit)
{
    for (number; String(number).length == digit; number++)
    {

    }
    return number - 1;
}