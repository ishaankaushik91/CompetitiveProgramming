nextNdigit(10, 4);

function nextNdigit(number, digit)
{
    for (number; String(number).length < digit; number++)
    {
        number += 1;
    }
    console.log(number);
}