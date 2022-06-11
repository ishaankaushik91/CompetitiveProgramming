function nextNdigit(number, digit)
{
    if (String(number).length < digit)
    {
        number += 1;
        return nextNdigit(number, digit);
    }
    return number;
}
console.log(nextNdigit(10, 4));